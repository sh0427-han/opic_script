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
    return "scripts";
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
    .filter((topic) => state.topic === "all" || topic.id === state.topic)
    .map((topic) => ({
      ...topic,
      questions: topic.questions.filter((question) => matchesQuery(topic, question)),
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
    const chips = [
      { id: "all", title: "전체" },
      ...data.topics.map((topic) => ({ id: topic.id, title: topic.title })),
    ];

    elements.filters.innerHTML = chips.map((chip) => `
      <button
        class="topic-chip ${state.topic === chip.id ? "is-active" : ""}"
        type="button"
        data-topic="${escapeHtml(chip.id)}"
        aria-pressed="${state.topic === chip.id}"
      >
        ${escapeHtml(chip.title)}
      </button>
    `).join("");
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
            <div class="answer" lang="en">
              ${question.answer.map((line) => `<p>${escapeHtml(line)}</p>`).join("")}
            </div>
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
                <small>연결 주제 · ${escapeHtml(item.topics.join(", "))}</small>
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

    elements.filters.hidden = isSurvey;
    elements.searchBox.hidden = isSurvey;

    if (isSurvey) {
      const surveyChoiceCount = data.survey
        ? data.survey.settings.filter((setting) => setting.topics).length
          + data.survey.groups.reduce(
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
      ? "질문, 영어 답변, 한글 흐름을 한 번에 봅니다."
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
        : "#scripts";
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
