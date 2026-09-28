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
    return "core";
  };

  const initialView = viewFromHash();

  const state = {
    query: "",
    topic: "all",
    view: initialView,
  };

  const questionById = new Map();
  data.topics.forEach((topic) => {
    topic.questions.forEach((question) => {
      questionById.set(question.id, question);
    });
  });

  const escapeHtml = (value) => String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");

  const normalize = (value) => String(value).toLocaleLowerCase("ko").trim();

  const matchesQuery = (topic, question) => {
    if (!state.query) {
      return true;
    }

    const searchable = [
      topic.title,
      question.number,
      question.question,
      question.hint,
      ...question.answer,
    ].join(" ");
    return normalize(searchable).includes(state.query);
  };

  const getVisibleTopics = () => data.topics
    .slice()
    .sort((first, second) => first.order - second.order)
    .filter((topic) => state.topic === "all" || topic.id === state.topic)
    .map((topic) => ({
      ...topic,
      questions: topic.questions
        .filter((question) => matchesQuery(topic, question))
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
      <h3 class="question-title">
        <span class="question-number">${escapeHtml(question.number)}.</span>
        ${escapeHtml(question.question)}
      </h3>
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
      { id: "unexpected", title: "돌발 질문" },
      { id: "roleplay", title: "롤플레이" },
    ];

    elements.filters.innerHTML = `
      <div class="topic-filter-all">${chipHtml({ id: "all", title: "전체" })}</div>
      <div class="topic-filter-groups">
        ${filterGroups.map((group) => {
          const chips = data.topics
            .filter((topic) => topic.source === group.id)
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

  const answerHtml = (question) => {
    const [mainPoint] = question.answer;
    const supportCount = question.supportCount ?? Math.min(2, question.answer.length - 2);
    const support = question.answer.slice(1, 1 + supportCount);
    const extra = question.answer.slice(1 + supportCount, -1);
    const closing = question.answer.at(-1);

    return `<div class="answer answer--structured">
      <div class="answer-mp">
        <strong>MP · 무엇 + 감정 + 이유</strong>
        <p lang="en">${escapeHtml(mainPoint)}</p>
      </div>
      <div class="answer-support">
        <strong>부연설명 · 1~2문장</strong>
        ${support.map((line) => `<p lang="en">${escapeHtml(line)}</p>`).join("")}
      </div>
      ${extra.length ? `<details class="answer-more">
        <summary>선택 · 한두 문장 더 말하기 (${extra.length}문장)</summary>
        ${extra.map((line) => `<p lang="en">${escapeHtml(line)}</p>`).join("")}
      </details>` : ""}
      <div class="answer-closing">
        <strong>마무리 멘트</strong>
        <p lang="en">${escapeHtml(closing)}</p>
      </div>
    </div>`;
  };

  const renderScripts = (topics) => topics.map((topic) => `
    <section class="topic-section" aria-labelledby="${topic.id}-title">
      <div class="topic-heading">
        <h2 id="${topic.id}-title">${topic.order}. ${escapeHtml(topic.title)}</h2>
        <span>${topic.questions.length}개 문제</span>
      </div>
      <div class="card-list">
        ${topic.questions.map((question) => `
          <article id="${escapeHtml(question.id)}" class="script-card">
            ${questionHeadingHtml(question)}
            ${answerHtml(question)}
            <div class="flow">
              <strong>흐름</strong>
              <span>${escapeHtml(question.hint)}</span>
            </div>
            <div class="card-actions">
              <button
                class="text-button"
                type="button"
                data-action="copy"
                data-question-id="${escapeHtml(question.id)}"
              >
                스크립트 복사
              </button>
            </div>
          </article>
        `).join("")}
      </div>
    </section>
  `).join("");

  const renderQuestions = (topics) => topics.map((topic) => `
    <section class="topic-section" aria-labelledby="${topic.id}-practice-title">
      <div class="topic-heading">
        <h2 id="${topic.id}-practice-title">${topic.order}. ${escapeHtml(topic.title)}</h2>
        <span>${topic.questions.length}개 문제</span>
      </div>
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
                <button
                  class="hint-button"
                  type="button"
                  aria-expanded="false"
                  aria-controls="${panelId}"
                  data-action="hint"
                >
                  힌트 보기
                </button>
              </div>
            </article>
          `;
        }).join("")}
      </div>
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
            <small>기본 ${anchor.basic.length}문장${anchor.extra.length
              ? ` · 추가 ${anchor.extra.length}문장` : ""}</small>
          </summary>
          <p class="core-cue">${escapeHtml(anchor.use)}</p>
          <div class="chunk-lines">
            <p class="chunk-label">먼저 연습할 문장</p>
            ${renderLines(anchor.basic)}
          </div>
          ${anchor.extra.length ? `
            <div class="chunk-lines chunk-lines--extra">
              <p class="chunk-label">익숙해지면 추가</p>
              ${renderLines(anchor.extra)}
            </div>
          ` : ""}
        </details>
      </li>
    `;
  }).join("");
  const patterns = study.patterns.map((pattern, index) => `
    <article class="core-card">
      <div class="core-card__heading">
        <span class="core-number">${index + 1}</span>
        <h3>${escapeHtml(pattern.title)}</h3>
      </div>
      <p class="core-use">${escapeHtml(pattern.use)}</p>
      <div class="core-lines" lang="en">
        ${pattern.lines.map((line) => `<p>${escapeHtml(line)}</p>`).join("")}
      </div>
      <p class="core-cue">${escapeHtml(pattern.cue)}</p>
    </article>
  `).join("");
  return `
    <section class="core-view" aria-labelledby="core-title">
      <div class="core-intro">
        <p class="topic-label">오늘은 한 묶음만</p>
        <h2 id="core-title">${escapeHtml(study.title)}</h2>
        <p>${escapeHtml(study.lead)}</p>
      </div>
      <h3 class="core-section-title">1단계 · MP부터 마무리까지 이어 말하기</h3>
      <ul class="anchor-list">${chunks}</ul>
      <div class="core-practice">
        <h3>하루 연습 순서</h3>
        <ol>${study.steps.map((step) => `<li>${escapeHtml(step)}</li>`).join("")}</ol>
        <p>${escapeHtml(study.note)}</p>
      </div>
      <details class="core-patterns">
        <summary>2단계 · 익숙해지면 문장 틀 응용하기</summary>
        <p>지금은 이 부분을 외우지 않아도 됩니다.</p>
        <div class="core-grid">${patterns}</div>
      </details>
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
                  ? `<small>연결 주제 · ${escapeHtml(item.topics.join(", "))}</small>`
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
        "MP(무엇·감정·이유)→부연설명→마무리 순서로 말합니다.";
      elements.resultSummary.textContent = "8개 영어 문장 묶음";
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
      ? "MP→부연설명→선택 문장→마무리 순서와 한글 힌트를 확인합니다."
      : "질문만 보고 답한 뒤, 필요할 때 한글 흐름만 확인합니다.";
    elements.resultSummary.textContent = `${visibleCount}개 표시 중`;

    if (visibleCount === 0) {
      elements.content.innerHTML = `
        <p class="empty-state">검색 조건에 맞는 문제가 없습니다.</p>
      `;
      return;
    }

    elements.content.innerHTML = state.view === "scripts"
      ? renderScripts(topics)
      : renderQuestions(topics);
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
    const answer = question.answer.join("\n");

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
