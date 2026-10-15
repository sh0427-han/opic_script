(() => {
  "use strict";

  // 원본 질문과 답변을 변경하지 않고 세트별 연습 화면만 구성합니다.
  const data = window.OPIC_DATA;
  const comboData = window.OPIC_COMBOS;
  const studyMeta = window.OPIC_STUDY_META || {};
  const advancedQuestions = studyMeta.advancedQuestions || {};
  const unexpectedTopics = studyMeta.unexpectedTopics || {};
  if (!data || !comboData) {
    throw new Error("Combo practice data was not loaded.");
  }

  const topics = data.topics.filter((topic) => comboData[topic.id])
    .sort((first, second) => {
      if (first.source !== second.source) return first.order - second.order;
      if (first.source === "unexpected") {
        return (unexpectedTopics[first.id]?.priority ?? 99)
          - (unexpectedTopics[second.id]?.priority ?? 99);
      }
      return first.order - second.order;
    });
  const questionById = new Map(
    topics.flatMap((topic) => topic.questions.map((q) => [q.id, q])),
  );
  const setNames = {
    A: "기본 콤보 · 필수 우선",
    B: "응용 콤보 · 경험과 문제",
    C: "확장 콤보 · 비교와 변형",
  };
  const setOrder = ["A", "B", "C"];
  const availableSets = (topic) => setOrder.filter(
    (set) => Boolean(comboData[topic.id][set]),
  );
  const remainingQuestions = (topic) => {
    const assigned = new Set(Object.values(comboData[topic.id]).flat());
    return topic.questions.filter((question) => !assigned.has(question.id))
      .sort((first, second) => {
        const a = first.status === "필수" ? 0 : 1;
        const b = second.status === "필수" ? 0 : 1;
        return a - b;
      });
  };

  let currentTopicId = null;
  let currentSet = "A";
  let currentQuestionIndex = 0;
  let answerVisible = false;
  let hintVisible = false;

  const escapeHtml = (value) => String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");

  const advancedTypeHtml = (question) => {
    const type = advancedQuestions[question.id];
    return type === "14" || type === "15"
      ? `<span class="advanced-tag advanced-tag--${type}">${type}번 유형</span>`
      : "";
  };

  const frequencyText = (topic) => topic.source === "unexpected"
    ? unexpectedTopics[topic.id]?.sampleLabel || "" : "";

  const reset = (topicId) => {
    currentTopicId = topicId;
    currentSet = "A";
    currentQuestionIndex = 0;
    answerVisible = false;
    hintVisible = false;
  };

  const renderTopicCard = (topic) => {
    const required = topic.questions.filter((q) => q.status === "필수").length;
    const count = availableSets(topic).length;
    const remaining = remainingQuestions(topic).length;
    return [
      '<article class="combo-topic-card">',
      '<p class="combo-topic-category">',
      topic.source === "survey" ? "설문조사 기반"
        : `일반·돌발 · ${escapeHtml(frequencyText(topic))}`,
      "</p>",
      '<h3>', escapeHtml(topic.title), "</h3>",
      '<p>기존 ', topic.questions.length, "개 질문 중 필수 ", required,
      "개 · ", count, "세트 · 개별 질문 ", remaining, "개</p>",
      '<button type="button" class="combo-primary-button"',
      ' data-action="combo-open-topic" data-topic-id="',
      escapeHtml(topic.id), '">', count, '세트 연습하기 →</button>',
      "</article>",
    ].join("");
  };

  const renderList = (filter) => {
    const visible = topics.filter((topic) =>
      filter === "all" || topic.source === filter);
    const bySource = ["survey", "unexpected"].map((source) => {
      const group = visible.filter((topic) => topic.source === source);
      if (!group.length) return "";
      return [
        '<section class="combo-category">',
        "<h3>", source === "survey"
          ? "설문조사 기반 · 먼저 연습" : "일반·돌발 · 표본 빈도순",
        "</h3>",
        source === "unexpected" && studyMeta.frequencySource
          ? `<p class="frequency-note">${escapeHtml(studyMeta.frequencyNote)}
            <a href="${escapeHtml(studyMeta.frequencySource)}" target="_blank"
              rel="noopener noreferrer">표본 집계 출처</a></p>` : "",
        '<div class="combo-topic-grid">',
        group.map(renderTopicCard).join(""),
        "</div></section>",
      ].join("");
    }).join("");

    return [
      '<div class="combo-intro">',
      '<p class="combo-kicker">OPIc 3-QUESTION COMBO</p>',
      "<h2>3문제 콤보 연습</h2>",
      '<p>주제별 질문 수에 맞춰 1~3세트를 구성했습니다.',
      ' 각 세트는 중복되지 않는 3개 질문으로 이루어집니다.',
      ' A세트부터 연습하고, 세트에 없는 질문은 개별 질문에서 확인하세요.</p>',
      '<p class="combo-disclaimer">실제 기출 세트나 확정 출제 순서가 아닙니다.',
      " 질문과 완성 답변은 기존 스크립트를 그대로 사용합니다.</p>",
      "</div>",
      bySource || '<p class="empty-state">해당 범주의 세트가 없습니다.</p>',
      '<p class="combo-roleplay-note">롤플레이 17개 상황별 세트는 기존 ',
      '<button type="button" class="combo-link-button" ',
      'data-action="combo-open-roleplay">전체 스크립트</button>',
      "에서 별도로 연습할 수 있습니다.</p>",
    ].join("");
  };

  const renderSetTabs = (topic) => [
    '<div class="combo-set-tabs" role="group" aria-label="연습 세트 선택"',
    ' data-set-count="', availableSets(topic).length, '">',
    availableSets(topic).map((set) => {
      const first = questionById.get(comboData[topic.id][set][0]);
      return [
        '<button type="button" class="combo-set-tab',
        currentSet === set ? ' is-active' : '',
        '" data-action="combo-set" data-set="', set,
        '" aria-pressed="', currentSet === set, '">',
        "<strong>Set ", set, "</strong>",
        "<span>", escapeHtml(setNames[set]), "</span>",
        '<small>시작 질문: ', escapeHtml(first.type), "</small>",
        "</button>",
      ].join("");
    }).join(""),
    "</div>",
  ].join("");

  const renderSteps = (questions) => [
    '<nav class="combo-steps" aria-label="세트 질문 순서">',
    questions.map((question, index) => [
      '<button type="button" class="combo-step',
      index === currentQuestionIndex ? ' is-active' : '',
      '" data-action="combo-step" data-index="', index,
      '"', index === currentQuestionIndex ? ' aria-current="step"' : '',
      '><span>', index + 1, "</span>",
      '<small>', escapeHtml(question.type),
      advancedQuestions[question.id] ? ` · ${advancedQuestions[question.id]}번 유형` : "",
      "</small></button>",
    ].join("")).join(""),
    "</nav>",
  ].join("");

  const renderCurrentQuestion = (question) => {
    const answer = answerVisible ? [
      '<section class="combo-reveal" aria-label="영어 답변">',
      "<h4>기존 완성 답변 · ", question.answer.length, "문장</h4>",
      '<p class="combo-answer" lang="en">',
      escapeHtml(question.answer.join(" ")), "</p>",
      '<button type="button" class="text-button" data-action="copy"',
      ' data-question-id="', escapeHtml(question.id),
      '">스크립트 복사</button>',
      "</section>",
    ].join("") : "";

    const hints = hintVisible ? [
      '<section class="combo-reveal combo-reveal--hint" aria-label="답변 흐름">',
      "<h4>한국어 흐름 힌트</h4>",
      question.hintSteps?.length
        ? '<ol class="flow-steps">' + question.hintSteps.map((step) =>
          "<li>" + escapeHtml(step) + "</li>").join("") + "</ol>"
        : "<p>" + escapeHtml(question.hint || "") + "</p>",
      "</section>",
    ].join("") : "";

    return [
      '<article class="combo-question">',
      '<div class="combo-question-meta">',
      '<span class="question-number">', escapeHtml(question.number), "</span>",
      '<span class="question-type">', escapeHtml(question.type), "</span>",
      advancedTypeHtml(question),
      '<span class="badge badge--',
      question.status === "필수" ? "required" : "optional", '">',
      escapeHtml(question.status), "</span>",
      "</div>",
      '<h3 lang="en" tabindex="-1" id="combo-question-title">',
      escapeHtml(question.questionEn), "</h3>",
      '<p class="combo-korean" lang="ko">',
      escapeHtml(question.question), "</p>",
      '<div class="combo-reveal-actions">',
      '<button type="button" class="text-button" data-action="combo-toggle-answer"',
      ' aria-pressed="', answerVisible, '">',
      answerVisible ? "답변 숨기기" : "답변 보기", "</button>",
      '<button type="button" class="text-button" data-action="combo-toggle-hint"',
      ' aria-pressed="', hintVisible, '">',
      hintVisible ? "힌트 숨기기" : "흐름 힌트 보기", "</button>",
      "</div>",
      hints, answer, "</article>",
    ].join("");
  };


  const renderRemaining = (topic) => {
    const remaining = remainingQuestions(topic);
    if (!remaining.length) return "";
    const required = remaining.filter((q) => q.status === "필수").length;
    return [
      '<details class="combo-remaining">',
      '<summary>세트 외 개별 질문 ', remaining.length,
      '개 <small>(필수 ', required, '개 포함)</small></summary>',
      '<p class="combo-disclaimer">3문제 세트에 억지로 중복 배치하지 않은 질문입니다.',
      ' 이곳에서 원래 질문과 답변을 그대로 연습할 수 있습니다.</p>',
      '<div class="combo-extra-list">',
      remaining.map((question) => [
        '<details class="combo-extra-item">',
        '<summary>',
        '<span class="question-number">', escapeHtml(question.number), '</span>',
        '<span>', escapeHtml(question.questionEn), '</span>',
        '<small>', escapeHtml(question.status), '</small>',
        advancedTypeHtml(question),
        '</summary>',
        '<p class="question-translation" lang="ko">',
        escapeHtml(question.question), '</p>',
        '<p class="combo-answer" lang="en">',
        escapeHtml(question.answer.join(" ")), '</p>',
        '</details>',
      ].join("")).join(""),
      '</div></details>',
    ].join("");
  };

  const renderDetail = (topic) => {
    if (currentTopicId !== topic.id) reset(topic.id);
    const ids = comboData[topic.id][currentSet];
    const questions = ids.map((id) => questionById.get(id));
    const question = questions[currentQuestionIndex];
    const isLast = currentQuestionIndex === 2;
    const sets = availableSets(topic);
    const nextSet = sets[sets.indexOf(currentSet) + 1];
    const nextLabel = !isLast ? "다음 문제 →"
      : nextSet ? "다음 Set " + nextSet + " →" : "Set A로 다시 시작 ↻";
    return [
      '<section class="combo-detail">',
      '<button type="button" class="combo-back" data-action="combo-back"',
      ' data-category="', escapeHtml(topic.source),
      '">← 주제 목록으로</button>',
      '<div class="combo-topic-heading">',
      '<p>', topic.source === "survey" ? "설문조사 기반"
        : `일반·돌발 · ${escapeHtml(frequencyText(topic))}`, "</p>",
      "<h2>", escapeHtml(topic.title), "</h2>",
      '<span>', sets.length, '세트 · ', sets.length * 3,
      '개 중복 없는 콤보 질문 · 개별 질문 ', remainingQuestions(topic).length,
      '개</span>',
      "</div>",
      renderSetTabs(topic),
      '<div class="combo-progress">',
      '<strong>Set ', currentSet, ' · 질문 ',
      currentQuestionIndex + 1, " / 3</strong>",
      '<span>', escapeHtml(setNames[currentSet]), "</span>",
      "</div>",
      renderSteps(questions),
      renderCurrentQuestion(question),
      '<div class="combo-navigation">',
      '<button type="button" class="combo-secondary-button"',
      ' data-action="combo-prev"', currentQuestionIndex === 0 ? " disabled" : "",
      '>← 이전 문제</button>',
      '<button type="button" class="combo-primary-button"',
      ' data-action="combo-next">', nextLabel, "</button>",
      "</div>",
      renderRemaining(topic),
      '<p class="combo-disclaimer">문제가 바뀌면 답변과 힌트는 다시 가려집니다.',
      " 실전에서는 질문의 요구에 맞춰 표현을 조절하세요.</p>",
      "</section>",
    ].join("");
  };

  const render = (filter) => {
    const topic = topics.find((item) => item.id === filter);
    if (!topic) return renderList(filter);
    return renderDetail(topic);
  };

  const handleClick = (button) => {
    const action = button.dataset.action;
    if (action === "combo-set" && currentTopicId
      && availableSets(topics.find((topic) => topic.id === currentTopicId))
        .includes(button.dataset.set)) {
      currentSet = button.dataset.set;
      currentQuestionIndex = 0;
    } else if (action === "combo-step") {
      const index = Number(button.dataset.index);
      if (!Number.isInteger(index) || index < 0 || index > 2) return false;
      currentQuestionIndex = index;
    } else if (action === "combo-prev") {
      currentQuestionIndex = Math.max(0, currentQuestionIndex - 1);
    } else if (action === "combo-next") {
      if (currentQuestionIndex < 2) {
        currentQuestionIndex += 1;
      } else {
        const topic = topics.find((item) => item.id === currentTopicId);
        const sets = availableSets(topic);
        currentSet = sets[sets.indexOf(currentSet) + 1] || "A";
        currentQuestionIndex = 0;
      }
    } else if (action === "combo-toggle-answer") {
      answerVisible = !answerVisible;
      return true;
    } else if (action === "combo-toggle-hint") {
      hintVisible = !hintVisible;
      return true;
    } else {
      return false;
    }

    answerVisible = false;
    hintVisible = false;
    return true;
  };

  window.OPIC_COMBO_VIEW = { render, handleClick, reset };
})();
