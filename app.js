(() => {
  "use strict";

  const data = window.OPIC_DATA;
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
    if (window.location.hash === "#questions") {
      return "questions";
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
    topic: "all",
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
      description: "현재 설문 선택과 별도로 준비하는 일상 주제입니다." },
    { id: "roleplay", title: "롤플레이",
      description: "같은 상황을 정보 문의 → 문제 해결 → 관련 과거 경험 순서로 연습합니다." },
  ];

  const isAskingQuestion = (question) => question.type === "정보 문의";
  const matchesTopic = (topic) => state.topic === "all"
    || topic.id === state.topic
    || topic.source === state.topic
    || (topic.source === "roleplay" && state.topic.startsWith("roleplay:"));
  const matchesRoleplayFilter = (question) => {
    if (state.topic === "roleplay:ask") return isAskingQuestion(question);
    if (state.topic === "roleplay:respond") return !isAskingQuestion(question);
    return true;
  };

  const roleplayScenarios = [
  [
    "친구와 약속",
    "rp1",
    "rp3",
    "rp5"
  ],
  [
    "전자기기 구매·고장",
    "mp3-rp1",
    "mp3-rp2",
    "mp3-rp3"
  ],
  [
    "콘서트 예매·문제",
    "concert-rp1",
    [
      "concert-rp2",
      "rp4"
    ],
    null
  ],
  [
    "기차 여행",
    "travel-rp1",
    "travel-rp2",
    "travel-rp3"
  ],
  [
    "집 구하기·집 문제",
    "house-rp1",
    "house-rp2",
    "house-rp3"
  ],
  [
    "친구의 부탁·식물 돌보기",
    "friend-rp1",
    "friend-rp2",
    "friend-rp3"
  ],
  [
    "미용실 예약",
    "service-rp1",
    "service-rp2",
    null
  ],
  [
    "음식점 문의",
    "restaurant-rp1",
    null,
    null
  ],
  [
    "호텔 예약",
    "hotel-rp1",
    null,
    null
  ],
  [
    "재활용 문의",
    "recycling-rp1",
    null,
    null
  ],
  [
    "휴대폰 수리 문의",
    "repair-rp1",
    null,
    null
  ],
  [
    "파티 초대",
    "party-rp1",
    null,
    null
  ],
  [
    "박물관 방문",
    "rp2",
    null,
    null
  ],
  [
    "유명인에게 질문",
    "celebrity-rp1",
    null,
    null
  ]
];

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

  const renderRoleplaySections = (topic, renderSection) =>
    getRoleplaySections(topic).map(renderSection).join("");

  const renderCategories = (topics, renderTopics) => topicCategories.map((category) => {
    const members = topics.filter((topic) => topic.source === category.id);
    if (!members.length) return "";
    const count = members.reduce((sum, topic) => sum + topic.questions.length, 0);
    return `<section class="study-category" aria-labelledby="category-${category.id}">
      <div class="study-category-heading">
        <h2 id="category-${category.id}">${category.title}</h2>
        <p>${category.description} · ${count}개 문항</p>
      </div>${renderTopics(members)}
    </section>`;
  }).join("");

  const matchesQuery = (topic, question) => {
    if (!state.query) {
      return true;
    }

    const searchable = [
      topic.title,
      question.number,
      question.question,
      question.questionEn,
      question.type,
      question.hint,
      ...question.answer,
      ...(question.variants ?? []).flatMap((variant) =>
        [variant.label, variant.question, variant.questionEn,
          ...variant.replacements.map((item) => item.to)]),
    ].join(" ");
    return normalize(searchable).includes(state.query);
  };

  const getVisibleTopics = () => data.topics
    .slice()
    .sort((first, second) => first.order - second.order)
    .filter(matchesTopic)
    .map((topic) => ({
      ...topic,
      questions: topic.questions
        .filter((question) => matchesQuery(topic, question)
          && matchesRoleplayFilter(question))
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
          <span class="sentence-count">답변 ${question.answer.length}문장</span>
          <span class="origin-label ${question.scriptOrigin === "user"
    ? "origin-label--user" : "origin-label--original"}">${question.scriptOrigin === "user"
    ? "직접 작성" : "기존 스크립트"}</span>
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
      { id: "survey", title: "설문조사 기반" },
      { id: "unexpected", title: "일반·돌발 주제" },
      { id: "roleplay", title: "롤플레이" },
    ];

    elements.filters.innerHTML = `
      <div class="topic-filter-all">${chipHtml({ id: "all", title: "전체" })}</div>
      <div class="topic-filter-groups">
        ${filterGroups.map((group) => {
          const chips = chipHtml({ id: group.id, title: `${group.title} 전체` })
            + (group.id === "roleplay" ? [
              { id: "roleplay:ask", title: "내가 질문하는 문항" },
              { id: "roleplay:respond", title: "상황·경험에 답하는 문항" },
            ].map(chipHtml).join("") : "") + data.topics
            .filter((topic) => topic.source === group.id)
            .filter((topic) => group.id !== "roleplay")
            .sort((first, second) => first.order - second.order)
            .map((topic) => chipHtml({ id: topic.id, title: topic.title }))
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

  const answerHtml = (question) => `
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

  const renderScripts = (topics) => topics.map((topic) => {
    const renderGroup = (group) => {
      const questions = group.questionIds.map((id) =>
        topic.questions.find((question) => question.id === id)).filter(Boolean);
      if (!questions.length) {
        return group.missing && !state.query && state.topic !== "roleplay:ask"
          && state.topic !== "roleplay:respond"
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
              ${answerHtml(question, sharedLines)}
              ${variantsHtml(question)}
              <div class="flow">
                <strong>흐름</strong>
                <span>${escapeHtml(question.hint)}</span>
              </div>
              <div class="card-actions">
                <button class="text-button" type="button" data-action="copy"
                  data-question-id="${escapeHtml(question.id)}">스크립트 복사</button>
              </div>
            </article>
          `).join("")}
        </div>
      </section>`;
    };
    const groups = topic.roleplaySections
      ? renderRoleplaySections(topic, (section) => `
        <section class="roleplay-section" aria-labelledby="${escapeHtml(section.id)}-title">
          <div class="roleplay-section__heading">
            <h4 id="${escapeHtml(section.id)}-title">${escapeHtml(section.title)}</h4>
            <p>${escapeHtml(section.description)}</p>
          </div>
          ${section.sets.map(renderGroup).join("")}
        </section>`)
      : topic.scriptGroups.map(renderGroup).join("");
    return `<section class="topic-section" aria-labelledby="${topic.id}-title">
      <div class="topic-heading">
        <h2 id="${topic.id}-title">${topic.order}. ${escapeHtml(topic.title)}</h2>
        <span>${topic.questions.length}개 문제</span>
      </div>
      ${groups}
    </section>`;
  }).join("");

  const renderQuestionCards = (topic) => `
      <div class="card-list">
        ${topic.questions.map((question) => {
          const panelId = `${question.id}-hint`;
          return `
            <article class="question-card">
              <div class="question-card__main">
                <p class="topic-label">${escapeHtml(topic.title)}</p>
                ${questionHeadingHtml(question)}
              </div>
              <div id="${panelId}" class="hint-panel" hidden>
                ${escapeHtml(question.hint)}
              </div>
              <div class="question-card__footer">
                <button class="hint-button" type="button" aria-expanded="false"
                  aria-controls="${panelId}" data-action="hint">힌트 보기</button>
              </div>
            </article>`;
        }).join("")}
      </div>`;

  const renderQuestions = (topics) => topics.map((topic) => `
    <section class="topic-section" aria-labelledby="${topic.id}-practice-title">
      <div class="topic-heading">
        <h2 id="${topic.id}-practice-title">${topic.order}. ${escapeHtml(topic.title)}</h2>
        <span>${topic.questions.length}개 문제</span>
      </div>
      ${topic.roleplaySections ? renderRoleplaySections(topic, (section) => `
        <section class="roleplay-section" aria-labelledby="${section.id}-practice-title">
          <div class="roleplay-section__heading">
            <h4 id="${section.id}-practice-title">${section.title}</h4>
            <p>${section.description}</p>
          </div>
          ${section.sets.map((set) => set.questionIds.length
            ? `<section class="script-group">
                <div class="script-group__heading"><h5>${escapeHtml(set.title)}</h5></div>
                ${renderQuestionCards({ ...topic, questions: set.questionIds.map((id) =>
                  questionById.get(id)) })}
              </section>`
            : set.missing && !state.query && state.topic !== "roleplay:ask"
              && state.topic !== "roleplay:respond"
              ? `<div class="roleplay-missing"><strong>${escapeHtml(set.title)}</strong>
                  <p>현재 등록된 문항이 없습니다.</p></div>` : "").join("")}
        </section>`) : renderQuestionCards(topic)}
    </section>
  `).join("");

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
    elements.searchBox.hidden = isSurvey || isCore;

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

    elements.content.setAttribute(
      "aria-labelledby",
      state.view === "scripts" ? "scripts-tab" : "questions-tab",
    );
    elements.description.textContent = state.view === "scripts"
      ? "유형별 영·한 질문과 완성 답변 5~7문장입니다. ‘공통’ 문장은 같은 유형의 다른 답변에서도 사용합니다."
      : "영어 질문과 한국어 번역을 보고 답한 뒤, 필요할 때 흐름 힌트를 확인합니다.";
    elements.resultSummary.textContent = `${visibleCount}개 표시 중`;

    if (visibleCount === 0) {
      elements.content.innerHTML = `
        <p class="empty-state">검색 조건에 맞는 문제가 없습니다.</p>
      `;
      return;
    }

    elements.content.innerHTML = renderCategories(topics,
      state.view === "scripts" ? renderScripts : renderQuestions);
  };

  const setView = (view) => {
    state.view = view;
    const hash = view === "questions"
      ? "#questions"
      : view === "survey"
        ? "#survey"
        : view === "scripts"
          ? "#scripts"
          : "#core";
    window.history.replaceState(null, "", hash);
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

  const toggleHint = (button) => {
    const panelId = button.getAttribute("aria-controls");
    const panel = document.getElementById(panelId);
    if (!panel) {
      return;
    }

    const willOpen = button.getAttribute("aria-expanded") !== "true";
    button.setAttribute("aria-expanded", String(willOpen));
    button.textContent = willOpen ? "힌트 닫기" : "힌트 보기";
    panel.hidden = !willOpen;
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
    if (button.dataset.action === "hint") {
      toggleHint(button);
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
      render();
    }
  });

  window.addEventListener("scroll", () => {
    elements.scrollTop.classList.toggle("is-visible", window.scrollY > 620);
  }, { passive: true });

  elements.scrollTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  elements.questionCount.textContent = data.questionCount;
  renderFilters();
  render();
})();
