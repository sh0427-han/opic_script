(() => {
  "use strict";

  const data = window.OPIC_DATA;
  const studyMeta = window.OPIC_STUDY_META || {};
  const advancedQuestions = studyMeta.advancedQuestions || {};
  const unexpectedTopics = studyMeta.unexpectedTopics || {};
  const advancedFilterTypes = {
    "advanced-14": "14",
    "advanced-15": "15",
  };
  if (!data) {
    throw new Error("OPIc data was not loaded.");
  }

  const elements = {
    content: document.querySelector("#content"),
    description: document.querySelector("#view-description"),
    filters: document.querySelector("#topic-filters"),
    questionCount: document.querySelector("#question-count"),
    resultSummary: document.querySelector("#result-summary"),
    search: document.querySelector("#search-input"),
    searchBox: document.querySelector(".search-box"),
    scrollTop: document.querySelector("#scroll-top"),
    tabs: [...document.querySelectorAll("[data-view]")],
  };

  const viewFromHash = () => {
    if (window.location.hash === "#combos") {
      return "combos";
    }
    if (window.location.hash === "#questions") {
      return "scripts";
    }
    if (window.location.hash === "#survey") {
      return "survey";
    }
    if (window.location.hash === "#scripts") {
      return "scripts";
    }
    if (window.location.hash === "#core") {
      return "core";
    }
    return "scripts";
  };

  const initialView = viewFromHash();

  const state = {
    query: "",
    topic: initialView === "combos" ? "survey" : "all",
    view: initialView,
  };

  const questionById = new Map();
  const lineUses = new Map();
  data.topics.forEach((topic) => {
    topic.questions.forEach((question) => {
      questionById.set(question.id, question);
      new Set(question.answer).forEach((line) => {
        const key = `${question.type}\u0000${line}`;
        lineUses.set(key, (lineUses.get(key) ?? 0) + 1);
      });
    });
  });

  const escapeHtml = (value) => String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");

  const normalize = (value) => String(value).toLocaleLowerCase("ko").trim();

  const topicCategories = [
    { id: "survey", title: "설문조사 기반 주제",
      description: "주거 설정과 여가·취미·휴가 선택에 연결된 주제입니다." },
    { id: "unexpected", title: "일반·돌발 주제",
      description: "공개 수험생 표본 출제 횟수 기준으로 정렬한 연습 주제입니다." },
    { id: "roleplay", title: "롤플레이",
      description: "같은 상황을 정보 문의 → 문제 해결 → 관련 과거 경험 순서로 연습합니다." },
  ];

  const studyTopics = data.topics.flatMap((topic) => {
    if (topic.source === "unexpected") {
      const priority = unexpectedTopics[topic.id]?.priority ?? topic.order;
      return [{ ...topic, order: 10 + priority }];
    }
    if (topic.source !== "roleplay") return [topic];
    return topic.roleplayScenarios.map(([title, ...stages], index) => {
      const ids = stages.flatMap((stage) => Array.isArray(stage)
        ? stage : stage ? [stage] : []).map((id) => `topic-10-${id}`);
      return {
        ...topic,
        id: `roleplay-scenario-${index + 1}`,
        title: index === 1 ? "MP3 플레이어 구매·고장" : title,
        order: topic.order + index / 100,
        questions: ids.map((id) => questionById.get(id)).filter(Boolean),
      };
    });
  });

  const topicTitleHtml = (topic) => topic.source === "roleplay"
    ? `롤플레이 · ${escapeHtml(topic.title)}`
    : `${topic.order}. ${escapeHtml(topic.title)}`;

  const unexpectedFrequencyText = (topic) => topic.source === "unexpected"
    ? unexpectedTopics[topic.id]?.sampleLabel || "" : "";

  const advancedTypeHtml = (question) => {
    const type = advancedQuestions[question.id];
    return type === "14" || type === "15"
      ? `<span class="advanced-tag advanced-tag--${type}">${type}번 유형</span>`
      : "";
  };

  const matchesTopic = (topic) => state.topic === "all"
    || Boolean(advancedFilterTypes[state.topic])
    || topic.id === state.topic || topic.source === state.topic;

  const flowHintHtml = (question) => question.hintSteps?.length
    ? `<ol class="flow-steps">${question.hintSteps.map((step) =>
      `<li>${escapeHtml(step)}</li>`).join("")}</ol>`
    : `<span>${escapeHtml(question.hint)}</span>`;

  const roleplayScenarios = data.topics.find((topic) => topic.source === "roleplay").roleplayScenarios;

  const getRoleplaySections = (topic) => roleplayScenarios.map((scenario, index) => {
    const [title, ...stages] = scenario;
    const sectionId = `roleplay-scenario-${index + 1}`;
    const sets = stages.map((stage, stageIndex) => {
      const questionIds = (Array.isArray(stage) ? stage : stage ? [stage] : [])
        .map((id) => `topic-10-${id}`);
      return {
        id: `${sectionId}-stage-${stageIndex + 1}`,
        title: ["1. 정보 문의 · 내가 질문하기",
          "2. 문제 해결 · 상황 설명과 대안 제안",
          "3. 관련 과거 경험 · 질문에 답하기"][stageIndex],
        missing: questionIds.length === 0,
        questionIds: questionIds.filter((id) =>
          topic.questions.some((question) => question.id === id)),
      };
    });
    return {
      id: sectionId,
      title: `세트 ${index + 1} · ${title}`,
      description: "정보 문의 → 문제 해결 → 관련 과거 경험 순서로 연습하세요.",
      sets,
    };
  }).filter((section) => section.sets.some((set) => set.questionIds.length));

  const renderCategories = (topics, renderTopics) => topicCategories.map((category) => {
    const members = topics.filter((topic) => topic.source === category.id);
    if (!members.length) return "";
    const count = members.reduce((sum, topic) => sum + topic.questions.length, 0);
    return `<section class="study-category" aria-labelledby="category-${category.id}">
      <div class="study-category-heading">
        <h2 id="category-${category.id}">${category.title}</h2>
        <p>${category.description} · ${count}개 문항</p>
        ${category.id === "unexpected" && studyMeta.frequencySource
    ? `<p class="frequency-note">${escapeHtml(studyMeta.frequencyNote)}
            <a href="${escapeHtml(studyMeta.frequencySource)}" target="_blank"
              rel="noopener noreferrer">표본 집계 출처</a></p>` : ""}
      </div>${renderTopics(members)}
    </section>`;
  }).join("");

  const matchesQuery = (topic, question) => {
    if (!state.query) {
      return true;
    }

    const searchable = [
      topic.title,
      topic.source === "roleplay" ? "롤플레이" : "",
      question.number,
      question.question,
      question.questionEn,
      question.type,
      advancedQuestions[question.id] ? `${advancedQuestions[question.id]}번 유형` : "",
      question.hint,
      ...question.answer,
      ...(question.variants ?? []).flatMap((variant) =>
        [variant.label, variant.question, variant.questionEn,
          ...variant.replacements.map((item) => item.to)]),
    ].join(" ");
    return normalize(searchable).includes(state.query);
  };

  const getVisibleTopics = () => studyTopics
    .slice()
    .sort((first, second) => first.order - second.order)
    .filter(matchesTopic)
    .map((topic) => ({
      ...topic,
      questions: topic.questions
        .filter((question) => matchesQuery(topic, question)
          && (!advancedFilterTypes[state.topic]
            || advancedQuestions[question.id] === advancedFilterTypes[state.topic]))
        .sort((first, second) => {
          const firstPriority = first.status === "필수" ? 0 : 1;
          const secondPriority = second.status === "필수" ? 0 : 1;
          return firstPriority - secondPriority;
        }),
    }))
    .filter((topic) => topic.questions.length > 0);

  const badgeHtml = (status) => {
    const kind = status === "필수" ? "required" : "optional";
    return `<span class="badge badge--${kind}">${escapeHtml(status)}</span>`;
  };

  const questionHeadingHtml = (question) => `
    <div class="card-topline">
      <div class="question-heading">
        <p class="question-meta">
          <span class="question-number">${escapeHtml(question.number)}</span>
          <span class="question-type">${escapeHtml(question.type)}</span>
          ${advancedTypeHtml(question)}
          <span class="sentence-count">${question.questionOnly ? "질문만 등록" : `답변 ${question.answer.length}문장`}</span>
          <span class="origin-label ${question.scriptOrigin === "user"
    ? "origin-label--user" : "origin-label--original"}">${question.scriptOrigin === "user"
    ? "직접 작성" : question.questionOnly ? "추가 연습 문항" : "기존 스크립트"}</span>
          ${question.levelAdjusted && question.scriptOrigin !== "user"
    ? '<span class="revision-label" title="말하기 수준에 맞춰 답변과 한국어 힌트를 수정함">맞춤 수정됨</span>'
    : ""}
        </p>
        <h3 class="question-title" lang="en">${escapeHtml(question.questionEn)}</h3>
        <p class="question-translation" lang="ko">${escapeHtml(question.question)}</p>
      </div>
      ${badgeHtml(question.status)}
    </div>
  `;

  const renderFilters = () => {
    const chipHtml = (chip) => `
      <button
        class="topic-chip ${state.topic === chip.id ? "is-active" : ""}"
        type="button"
        data-topic="${escapeHtml(chip.id)}"
        aria-pressed="${state.topic === chip.id}"
      >
        ${escapeHtml(chip.title)}
      </button>
    `;
    const filterGroups = [
      ...(state.view === "combos" ? [] : [{
        id: "advanced",
        title: "14·15번 대비",
        chips: [
          { id: "advanced-14", type: "14", title: "14번 유형 · 변화·비교" },
          { id: "advanced-15", type: "15", title: "15번 유형 · 사회 문제·의견" },
        ],
      }]),
      { id: "survey", title: "설문조사 기반" },
      { id: "unexpected", title: "일반·돌발 주제" },
      ...(state.view === "combos" ? [] : [
        { id: "roleplay", title: "롤플레이" },
      ]),
    ];

    elements.filters.innerHTML = `
      <div class="topic-filter-all">${chipHtml({ id: "all", title: "전체" })}</div>
      <div class="topic-filter-groups">
        ${filterGroups.map((group) => {
          const chips = group.id === "advanced"
            ? group.chips.map((chip) => {
              const count = Object.entries(advancedQuestions)
                .filter(([id, type]) => type === chip.type && questionById.has(id))
                .length;
              return chipHtml({ id: chip.id, title: `${chip.title} (${count}문항)` });
            }).join("")
            : chipHtml({ id: group.id, title: `${group.title} 전체` })
              + studyTopics
              .filter((topic) => topic.source === group.id)
              .sort((first, second) => first.order - second.order)
              .map((topic) => chipHtml({ id: topic.id, title: topic.source === "unexpected"
                ? `${topic.title} · 표본 ${unexpectedTopics[topic.id]?.sampleCount ?? "?"}회`
                : topic.title }))
              .join("");
          return `
            <section class="topic-filter-group" aria-labelledby="${group.id}-filter-title">
              <strong id="${group.id}-filter-title">${group.title}</strong>
              <div class="topic-filter-chips">${chips}</div>
            </section>
          `;
        }).join("")}
      </div>
    `;
  };

  const answerHtml = (question) => question.questionOnly
    ? '<p class="source-note">답변 스크립트는 아직 작성되지 않았습니다.</p>'
    : `
    <div class="answer">
      <p lang="en">${escapeHtml(question.answer.join(" "))}</p>
    </div>
  `;

  const variantAnswer = (question, variant) => question.answer.map((line) =>
    variant.replacements.find((item) => item.from === line)?.to ?? line);

  const variantsHtml = (question) => (question.variants ?? []).map((variant, index) => `
    <details class="answer-more">
      <summary>${escapeHtml(variant.label)} · 완성 답변 ${question.answer.length}문장</summary>
      <p class="variant-question" lang="en">${escapeHtml(variant.questionEn)}</p>
      <p class="question-translation" lang="ko">${escapeHtml(variant.question)}</p>
      ${answerHtml({ ...question, answer: variantAnswer(question, variant) })}
      <button class="text-button" type="button" data-action="copy"
        data-question-id="${escapeHtml(question.id)}" data-variant-index="${index}">
        이 상황의 스크립트 복사
      </button>
    </details>
  `).join("");

  const getPrioritizedScriptGroups = (topic) => ["필수", "선택"].flatMap((status) =>
    topic.scriptGroups.map((group) => ({
      ...group,
      id: `${group.id}-${status === "필수" ? "required" : "optional"}`,
      title: `${group.title} · ${status}`,
      questionIds: group.questionIds.filter((id) =>
        questionById.get(id)?.status === status),
    })).filter((group) => group.questionIds.length));

  const renderScripts = (topics) => topics.map((topic) => {
    const renderGroup = (group) => {
      const questions = group.questionIds.map((id) =>
        topic.questions.find((question) => question.id === id)).filter(Boolean);
      if (!questions.length) {
        return group.missing && !state.query
          ? `<div class="roleplay-missing"><strong>${escapeHtml(group.title)}</strong>
              <p>현재 등록된 문항이 없습니다.</p></div>` : "";
      }
      const allQuestions = group.questionIds.map((id) => questionById.get(id));
      const sharedLines = new Set(allQuestions.flatMap((question) =>
        question.answer.filter((line) =>
          lineUses.get(`${question.type}\u0000${line}`) > 1)));
      const basics = allQuestions.map((question) => question.answer);
      let tailCount = 0;
      if (basics.length > 1) {
        while (basics.every((lines) =>
          lines.length > tailCount
          && lines.at(-1 - tailCount) === basics[0].at(-1 - tailCount))) {
          tailCount += 1;
        }
      }
      const tailNote = tailCount > 1
        ? `이 묶음의 답변은 마지막 ${tailCount}문장이 같습니다.`
        : "";
      const commonNote = sharedLines.size
        ? "‘공통’ 표시는 전체 자료의 같은 유형 답변에서 재사용하는 문장입니다."
        : "";
      const headingTag = topic.roleplaySections ? "h5" : "h3";
      return `<section class="script-group" aria-labelledby="${group.id}-title">
        <div class="script-group__heading">
          <${headingTag} id="${group.id}-title">${escapeHtml(group.title)}</${headingTag}>
          <span>${questions.length}개 질문</span>
        </div>
        ${tailNote || commonNote ? `<p class="script-group__note">
          ${escapeHtml(tailNote)} ${escapeHtml(commonNote)}
        </p>` : ""}
        <div class="card-list">
          ${questions.map((question) => `
            <article id="${escapeHtml(question.id)}" class="script-card">
              ${questionHeadingHtml(question)}
              <div class="script-card__tools">
                <details class="practice-hint">
                  <summary>힌트 보기</summary>
                  <div class="flow">
                    <strong>${question.questionOnly ? "답변 구성 힌트" : "흐름"}</strong>
                    ${flowHintHtml(question)}
                  </div>
                </details>
                ${question.questionOnly
    ? '<span class="script-unavailable">답변 스크립트 준비 중</span>'
    : `<details class="script-reveal" data-script-reveal>
                    <summary>
                      <span class="script-reveal__closed">스크립트 펼치기 · ${question.answer.length}문장</span>
                      <span class="script-reveal__opened">스크립트 닫기</span>
                    </summary>
                    <div class="script-reveal__body">
                      ${answerHtml(question, sharedLines)}
                      ${variantsHtml(question)}
                      <div class="card-actions">
                        <button class="text-button" type="button" data-action="copy"
                          data-question-id="${escapeHtml(question.id)}">스크립트 복사</button>
                      </div>
                    </div>
                  </details>`}
              </div>
            </article>
          `).join("")}
        </div>
      </section>`;
    };
    const groups = topic.roleplaySections
      ? getRoleplaySections(topic).flatMap((section) => section.sets)
        .map(renderGroup).join("")
      : getPrioritizedScriptGroups(topic).map(renderGroup).join("");
    return `<section class="topic-section" aria-labelledby="${topic.id}-title">
      <div class="topic-heading">
        <h2 id="${topic.id}-title">${topicTitleHtml(topic)}</h2>
        <span>${topic.questions.length}개 문제${unexpectedFrequencyText(topic)
    ? ` · ${escapeHtml(unexpectedFrequencyText(topic))}` : ""}</span>
      </div>
      ${groups}
    </section>`;
  }).join("");

  const renderCore = function renderCore() {
  const study = data.minimalStudy;
  const chunks = study.anchors.map((anchor, index) => {
    const renderLines = (lines) => lines.map((line) => `
      <div class="chunk-line">
        ${line.role ? `<small class="chunk-role">${escapeHtml(line.role)}</small>` : ""}
        <p class="chunk-en" lang="en">${escapeHtml(line.en)}</p>
        <p class="chunk-ko">${escapeHtml(line.ko)}</p>
      </div>
    `).join("");
    return `
      <li class="anchor-item">
        <details ${index === 2 ? "open" : ""}>
          <summary>
            <strong>${escapeHtml(anchor.title)}</strong>
            <small>표현 ${anchor.lines.length}개</small>
          </summary>
          <p class="core-cue">${escapeHtml(anchor.use)}</p>
          <div class="chunk-lines">
            <p class="chunk-label">질문별 완성 답변에서 가져온 표현</p>
            ${renderLines(anchor.lines)}
          </div>
        </details>
      </li>
    `;
  }).join("");
  return `
    <section class="core-view" aria-labelledby="core-title">
      <div class="core-intro">
        <p class="topic-label">오늘은 한 묶음만</p>
        <h2 id="core-title">${escapeHtml(study.title)}</h2>
        <p>${escapeHtml(study.lead)}</p>
      </div>
      <h3 class="core-section-title">같은 의미를 같은 표현으로 연습하기</h3>
      <ul class="anchor-list">${chunks}</ul>
      <div class="core-practice">
        <h3>하루 연습 순서</h3>
        <ol>${study.steps.map((step) => `<li>${escapeHtml(step)}</li>`).join("")}</ol>
        <p>${escapeHtml(study.note)}</p>
      </div>
    </section>
  `;
};

  const renderSurvey = () => {
    const survey = data.survey;
    if (!survey) {
      return '<p class="empty-state">저장된 설문 선택이 없습니다.</p>';
    }

    const settingCards = survey.settings.map((setting) => `
      <article class="survey-setting">
        <span>${escapeHtml(setting.label)}</span>
        <strong>${escapeHtml(setting.value)}</strong>
        ${setting.topics ? `
          <small>연결 주제 · ${escapeHtml(setting.topics.join(", "))}</small>
        ` : ""}
      </article>
    `).join("");

    const groupCards = survey.groups.map((group) => `
      <section class="survey-group">
        <div class="survey-group__heading">
          <h3>${escapeHtml(group.title)}</h3>
          <span>${group.items.length}개 선택</span>
        </div>
        <ul class="survey-list">
          ${group.items.map((item) => `
            <li>
              <span class="survey-check" aria-hidden="true">✓</span>
              <div>
                <strong>${escapeHtml(item.label)}</strong>
                ${item.topics.length > 0
                  ? `<small>연결 주제 · ${escapeHtml(item.topics.join(", "))}</small>
                    <div class="survey-topic-links">${item.topics.map((title) => {
                      const topic = data.topics.find((entry) => entry.title === title);
                      return topic ? `<button type="button" class="text-button"
                        data-action="open-topic" data-topic-id="${topic.id}">
                        ${escapeHtml(title)} 연습</button>` : "";
                    }).join("")}</div>`
                  : "<small>선택 기록 · 별도 스크립트 없음</small>"}
              </div>
            </li>
          `).join("")}
        </ul>
      </section>
    `).join("");

    return `
      <section class="survey-view" aria-labelledby="survey-title">
        <div class="survey-intro">
          <p class="topic-label">시험장 확인용</p>
          <h2 id="survey-title">${escapeHtml(survey.title)}</h2>
          <p>${escapeHtml(survey.note)}</p>
        </div>
        <div class="survey-settings">${settingCards}</div>
        <div class="survey-groups">${groupCards}</div>
      </section>
    `;
  };

  const render = () => {
    const isSurvey = state.view === "survey";
    const isCore = state.view === "core";
    const isCombos = state.view === "combos";
    const topics = getVisibleTopics();
    const visibleCount = topics.reduce(
      (count, topic) => count + topic.questions.length,
      0,
    );

    elements.tabs.forEach((tab) => {
      const isActive = tab.dataset.view === state.view;
      tab.classList.toggle("is-active", isActive);
      tab.setAttribute("aria-selected", String(isActive));
    });

    elements.filters.hidden = isSurvey || isCore;
    elements.searchBox.hidden = isSurvey || isCore || isCombos;

    if (isCombos) {
      const isDetail = Boolean(window.OPIC_COMBOS[state.topic]);
      const shown = data.topics.filter((topic) =>
        window.OPIC_COMBOS[topic.id] && (state.topic === "all"
          || state.topic === topic.source || topic.id === state.topic));
      elements.content.setAttribute("aria-labelledby", "combos-tab");
      elements.description.textContent =
        "기존 질문을 3문제씩 이어서 연습합니다. A세트부터 시작하세요.";
      const setCount = shown.reduce((count, topic) =>
        count + Object.keys(window.OPIC_COMBOS[topic.id]).length, 0);
      const detailCount = isDetail
        ? Object.keys(window.OPIC_COMBOS[state.topic]).length : 0;
      elements.resultSummary.textContent = isDetail
        ? `${detailCount}세트 · 각 3문제`
        : `${shown.length}개 주제 · ${setCount}개 세트`;
      elements.content.innerHTML = window.OPIC_COMBO_VIEW.render(state.topic);
      return;
    }

    if (isCore) {
      elements.content.setAttribute("aria-labelledby", "core-tab");
      elements.description.textContent =
        "유형에 맞는 표현을 익힌 뒤 전체 스크립트의 5~7문장을 이어 말합니다.";
      elements.resultSummary.textContent = `${data.minimalStudy.anchors.length}개 표현 묶음`;
      elements.content.innerHTML = renderCore();
      return;
    }

    if (isSurvey) {
      const surveyChoiceCount = data.survey
        ? data.survey.groups.reduce(
          (count, group) => count + group.items.length,
          0,
        )
        : 0;
      elements.content.setAttribute("aria-labelledby", "survey-tab");
      elements.description.textContent =
        "현재 연습 주제와 연결된 시험 전 설문 선택을 확인합니다.";
      elements.resultSummary.textContent = `${surveyChoiceCount}개 선택 항목`;
      elements.content.innerHTML = renderSurvey();
      return;
    }

    elements.content.setAttribute("aria-labelledby", "scripts-tab");
    elements.description.textContent =
      "질문을 먼저 보고 답해 보세요. 힌트와 스크립트를 각각 펼쳐 확인할 수 있습니다.";
    elements.resultSummary.textContent = `${visibleCount}개 표시 중`;

    if (visibleCount === 0) {
      elements.content.innerHTML =
        '<p class="empty-state">검색 조건에 맞는 문제가 없습니다.</p>';
      return;
    }

    elements.content.innerHTML = `
      <div class="script-controls" aria-label="스크립트 표시 설정">
        <span>답변은 기본적으로 접혀 있습니다.</span>
        <button type="button" class="text-button" data-action="reveal-all">
          전체 펼치기
        </button>
        <button type="button" class="text-button" data-action="hide-all">
          전체 닫기
        </button>
      </div>
      ${renderCategories(topics, renderScripts)}
    `;
  };

  const setView = (view) => {
    state.view = view;
    if (view === "combos" && (state.topic === "all"
      || state.topic === "roleplay"
      || advancedFilterTypes[state.topic]
      || state.topic.startsWith("roleplay-scenario-"))) {
      state.topic = "survey";
    }
    const hash = view === "combos"
      ? "#combos"
      : view === "survey"
        ? "#survey"
        : view === "scripts"
          ? "#scripts"
          : "#core";
    window.history.replaceState(null, "", hash);
    renderFilters();
    render();
  };

  const copyAnswer = async (button) => {
    const question = questionById.get(button.dataset.questionId);
    if (!question) {
      return;
    }

    const originalText = button.textContent.trim();
    const variantIndex = button.dataset.variantIndex;
    const variant = variantIndex === undefined
      ? undefined
      : question.variants?.[Number(variantIndex)];
    const answer = (variant ? variantAnswer(question, variant) : question.answer).join("\n");

    try {
      await navigator.clipboard.writeText(answer);
      button.textContent = "복사 완료";
    } catch (_error) {
      const textarea = document.createElement("textarea");
      textarea.value = answer;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      textarea.remove();
      button.textContent = "복사 완료";
    }

    window.setTimeout(() => {
      button.textContent = originalText;
    }, 1300);
  };

  elements.tabs.forEach((tab) => {
    tab.addEventListener("click", () => setView(tab.dataset.view));
  });

  elements.filters.addEventListener("click", (event) => {
    const button = event.target.closest("[data-topic]");
    if (!button) {
      return;
    }
    state.topic = button.dataset.topic;
    renderFilters();
    render();
  });

  elements.search.addEventListener("input", (event) => {
    state.query = normalize(event.target.value);
    render();
  });

  elements.content.addEventListener("click", (event) => {
    const button = event.target.closest("[data-action]");
    if (!button) {
      return;
    }
    if (state.view === "combos") {
      if (button.dataset.action === "combo-open-topic") {
        state.topic = button.dataset.topicId;
        renderFilters();
        render();
        return;
      }
      if (button.dataset.action === "combo-back") {
        state.topic = button.dataset.category;
        renderFilters();
        render();
        return;
      }
      if (button.dataset.action === "combo-open-roleplay") {
        state.topic = "roleplay";
        renderFilters();
        setView("scripts");
        return;
      }
      if (window.OPIC_COMBO_VIEW.handleClick(button)) {
        render();
        return;
      }
    }
    if (button.dataset.action === "reveal-all"
      || button.dataset.action === "hide-all") {
      const shouldOpen = button.dataset.action === "reveal-all";
      elements.content.querySelectorAll("[data-script-reveal]")
        .forEach((details) => { details.open = shouldOpen; });
      return;
    }
    if (button.dataset.action === "copy") {
      copyAnswer(button);
    }
    if (button.dataset.action === "open-topic") {
      state.topic = button.dataset.topicId;
      state.query = "";
      elements.search.value = "";
      renderFilters();
      setView("scripts");
    }

  });

  window.addEventListener("hashchange", () => {
    const nextView = viewFromHash();
    if (nextView !== state.view) {
      state.view = nextView;
      if (nextView === "combos" && advancedFilterTypes[state.topic]) {
        state.topic = "survey";
      }
      renderFilters();
      render();
    }
  });

  window.addEventListener("scroll", () => {
    elements.scrollTop.classList.toggle("is-visible", window.scrollY > 620);
  }, { passive: true });

  elements.scrollTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  document.querySelector("#topic-count").textContent = studyTopics.length;
  elements.questionCount.textContent = data.questionCount;
  renderFilters();
  render();
})();
