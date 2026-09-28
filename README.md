# OPIc 5-5 최소암기 스크립트

OPIc 질문 159개를 주제별로 연습하는 정적 웹페이지입니다. v31에서는 모든 답변을 **MP(무엇·감정·이유) → 부연설명 1~2문장 → 선택 문장 0~2문장 → 마무리 멘트**로 정리했습니다. 짧게 연습할 때는 MP·부연설명·마무리만 말합니다.

## 화면 구성

- **핵심 암기(첫 화면)**: 스크립트에 실제로 나오는 영어 문장 8개 묶음(기본 27문장, 선택 17문장).
- **전체 스크립트**: 159개 답변의 MP, 부연설명, 필요할 때 펼치는 선택 문장, 마무리 멘트를 순서대로 표시.
- **문제 연습**: 질문만 보고 답한 뒤 한국어 흐름을 확인.
- **시험 전 설문**: 난이도와 현재 연습 주제에 맞는 설문 선택.
- 주제 필터·검색·영어 스크립트 복사, 모바일·데스크톱 반응형 화면.

## 답변 구성

`script-data.js`의 각 질문은 `answer` 배열과 `supportCount`를 가집니다. 첫 문장이 MP, 그다음 `supportCount`개(1~2개)가 부연설명, 마지막 문장이 마무리입니다. 그 사이의 0~2문장은 선택 문장입니다. 복사 기능은 이 순서대로 전체 답변을 복사합니다. 롤플레이도 같은 구분을 표시하되, 전화 상황에서는 자연스러운 인사와 질문·대안을 우선합니다.

| 유형 | MP 예시 | 뒤에 붙이는 내용 |
| --- | --- | --- |
| 집 휴가 | I prefer being alone during a vacation at home because the quiet helps me relax. | 혼자 쉬는 행동 → 휴가 뒤에 만날 수 있다는 마무리 |
| 문제 경험 | I felt worried when my phone suddenly turned off because I needed to contact a friend. | 충전 → 다시 켜짐 → 다음부터 배터리 확인 |
| 전화 문의 | Hi, I'm looking forward to visiting this weekend, so I'm calling to plan the details. | 영업시간·예약·가격 질문 → 감사 |

평소에는 집에서 혼자 조용히 쉬고 국내여행도 주로 혼자 갑니다. 해운대 깜짝 생일파티나 가족·친구 모임은 별개의 특별한 경험으로 유지합니다. `watch YouTube`, `check my phone`(화면·메시지 확인), 카페의 아이스커피와 창가 자리, 공원의 커피와 벤치, 혼자 타는 부산행 기차처럼 반복되는 행동은 같은 표현을 사용합니다.

클럽·조깅·걷기는 설문 연습 목록에서 제외했습니다. 공원·해변을 설명하면서 잠깐 걷는 행동은 포함됩니다.

## 파일 구성

- `index.html`: 화면 구조
- `styles.css`: 반응형 디자인
- `app.js`: 화면 표시, 필터, 검색, 복사 동작
- `script-data.js`: 질문 159개, 4단계 답변, 한국어 힌트와 핵심 암기 문장
- `STUDY_GUIDE.md`: MP→부연설명→마무리 최소암기 연습법

## 공개 질문 변형과 검토 범위

2026-09-28 기준 공개 자료와 주제별 질문 기능을 비교해 선택 연습 질문을 보강했습니다. 실제 시험 문항 전체는 공개되지 않으므로 이 자료가 모든 출제 문제를 포함한다는 뜻은 아닙니다.

- [ACTFL OPIc 소개](https://www.actfl.org/assessments/postsecondary-assessments/oral-proficiency-interview-computer-opic): 설문과 자기평가에 따른 개별 문항 선택.
- [ACTFL 응시자 안내](https://www.actfl.org/assessments/postsecondary-assessments/opi/tips-for-opi-and-opic-test-takers): 질문에 맞춰 자연스럽게 말하는 연습.
- [링글 프랩 주제별 모의 문항](https://prep.ringleplus.com/questions): 자체 제작 모의 문항(실제 시험 복원 문항이 아님).

[최소암기 학습법](STUDY_GUIDE.md)에서 하루 연습 순서와 공통 표현을 볼 수 있습니다.

## 로컬 실행

```bash
python -m http.server 8000
```

브라우저에서 <http://localhost:8000>으로 접속합니다.

## GitHub Pages 공개

저장소의 `Settings → Pages`에서 `Source: Deploy from a branch`, `Branch: main`, `Folder: /(root)`로 설정합니다.

- [첫 화면](https://sh0427-han.github.io/opic_script/)
- [전체 스크립트](https://sh0427-han.github.io/opic_script/#scripts)
- [문제 연습](https://sh0427-han.github.io/opic_script/#questions)
- [시험 전 설문](https://sh0427-han.github.io/opic_script/#survey)
