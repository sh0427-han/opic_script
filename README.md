# OPIc 5-5 IM2 최소암기 스크립트

OPIc 5-5 IM2 준비용 정적 웹페이지입니다. 현재 v11 스크립트의 70개
질문과 답변을 그대로 웹에서 볼 수 있습니다.

## 화면 구성

- **전체 스크립트**: 질문, 영어 답변, 한글 흐름을 함께 표시
- **문제 연습**: 질문만 표시하고 `힌트 보기`를 눌렀을 때 한글 흐름만 표시
- **시험 전 설문**: 난이도·주거 설정과 현재 연습 주제에 연결된 설문 선택을 표시
- 주제 필터와 검색 지원
- 모바일/데스크톱 반응형 화면
- 각 영어 스크립트 복사 기능

## 파일 구성

- `index.html`: 화면 구조
- `styles.css`: 디자인과 반응형 스타일
- `app.js`: 탭, 필터, 검색, 힌트 토글 동작
- `script-data.js`: 70개 질문·스크립트·한글 흐름 데이터

## 로컬 실행

```bash
python -m http.server 8000
```

브라우저에서 <http://localhost:8000>으로 접속합니다.

## GitHub Pages 공개

저장소의 `Settings → Pages`에서 아래처럼 한 번만 설정합니다.

1. **Source**: `Deploy from a branch`
2. **Branch**: `main`
3. **Folder**: `/(root)`
4. **Save**

배포가 끝나면 아래 주소로 접속할 수 있습니다.

<https://sh0427-han.github.io/opic_script/>

문제 연습 탭을 바로 열려면 다음 주소를 사용합니다.

<https://sh0427-han.github.io/opic_script/#questions>

시험 전 설문 탭을 바로 열려면 다음 주소를 사용합니다.

<https://sh0427-han.github.io/opic_script/#survey>
