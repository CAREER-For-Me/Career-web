<div id="top"></div>

<div align='center'>

<h1><b>Career For Me</b></h1>
<h3><b>내 커리어의 맞춤형 로드맵</b></h3>

</div>

<br>

## 0. 목차

1.  [팀원 소개](#1)
2.  [시작 가이드](#2)
3.  [브랜치 및 디렉토리 구조](#3)
4.  [Color 적용 방법](#4)
5.  [커밋 컨벤션](#5)
6.  [Package_yarn](#6)
7.  [ 마무리👴🗨️](#7)

<br >

## <span id="1">🏃 1. 팀원 소개</span>

<div align="center">
                            
| [이정한](https://github.com/topeanut) | [박시은](https://github.com/MyNameSieun) | [박진우](https://github.com/username3) | [조지현](https://github.com/username4) |
|:-------------------------------------:|:-------------------------------------:|:-------------------------------------:|:-------------------------------------:|
| **FE Leader**                         | **FE**                                | **FE**                                | **FE**                                |
| 초기 세팅<br>컴포넌트 작업 및 Global Style 적용<br>포트폴리오 분석 페이지 | 활동 추천 페이지 | 질의 응답 페이지 | 로그인 및 마이페이지<br>메인 페이지(검색 기능) |

</div>

<br>

<!-- Top Button -->
<p style='background: black; width: 32px; height: 32px; border-radius: 50%; display: flex; justify-content: center; align-items: center; margin-left: auto;'><a href="#top" style='color: white; '>▲</a></p>

<br>

## <span id="2">2. 🛠️ 시작 가이드</span>

### 2.1 Installation

```shell
# 1. 클론하기
$ git clone https://github.com/CAREER-For-Me/Career-web.git .

# 2. 의존성 설치하기
$ yarn

# 3. 개발 서버 실행하기
$ yarn dev
```

<br>

### 2.2 리액트 버전 설치 확인

본 프로젝트는 React 18 버전을 사용합니다.

React 19는 안정성이 확인되지 않았으므로 설치 시 아래 명령어를 사용하세요.

```shell
yarn remove react react-dom
yarn add react@18 react-dom@18
```

<br>

아래 명령어를 통해 리액트 버전을 확인하실 수 있습니다.

```shell
yarn list --pattern react
```

<br>

### 2.3 브랜치 생성 가이드

① 브랜치 생성

- `feature/`로 시작하고 기능명을 붙이세요.
- e.g., `feature/login`, `feature/activityRecommend`

<br>

② 본인 브랜치에 push 후 `develop` 브랜치에 PR 보낸 후 카톡 남겨주세요.

- 두번 세번 검토 후 올려주시길 바랍니다.

<br>

③ PR 후 `develop` 브랜치에서 pull

<br>

④ main 브랜치는 건들지 말기

<br>

> 브랜치 활용 명령어

```shell
# 브랜치 생성
git branch feature/<기능명>

# 브랜치 이동
git switch feature/<기능명>

# 생성과 동시에 이동
git switch -c feature/<기능명>

# 브랜치 리스트 확인
git branch

# 브랜치 삭제 (삭제를 하기 위해선 다른 브랜치로 전환 후 삭제하셔야합니다.)
git branch -d <브랜치명>   # 안전 삭제
git branch -D <브랜치명>   # 강제 삭제
```

```shell
# 안전하게 삭제
git branch -d <브랜치 이름>

# 강제로 삭제
git branch -D <브랜치 이름>
```

<br>

- 작업 디렉토리: `app/(route)` 폴더 내
- 공용 파일 쓰시면 이정한한테 말할 것

<br>

<!-- Top Button -->
<p style='background: black; width: 32px; height: 32px; border-radius: 50%; display: flex; justify-content: center; align-items: center; margin-left: auto;'><a href="#top" style='color: white; '>▲</a></p>

<br>

## 3. <span id="3"> 🗂️ 브랜치 및 디렉토리 구조</span>

> 브랜치

- `main`
- `dev`
- `featuer/login` - 지현
- `featuer/` - 정한
- `featuer/` - 진우
- `featuer/` - 시은

<br>

> 디렉토리 구조

```shell

```

<br>

<!-- Top Button -->
<p style='background: black; width: 32px; height: 32px; border-radius: 50%; display: flex; justify-content: center; align-items: center; margin-left: auto;'><a href="#top" style='color: white; '>▲</a></p>

<br>

# 4. <span id="4">🎨 4. Color 적용 방법</span>

`tailwind.config.js` 파일에 프로젝트에서 사용할 색상을 정의해 뒀습니다.

```ts
extend: {
  colors: {
    careerForMe: {
      main: "#6D72FF",
      mainMedium: "#979AED",
      red: "#FF4238",
      redMedium: "#FF8E88",
      gray01: "#F4F4F4",
    },
    gray: {
      dark: "#737373",
      medium: "#B2B2B2",
      light: "#D2D2D2",
    },
  },
}
```

<br>

Tailwind에서 추가한 색상을 아래와 같이 사용할 수 있습니다.

```tsx
<p class="text-careerForMe-main">커리어 포미 색</p>
```

```tsx
<div class="bg-careerForMe-red">배경 색</div>
```

```tsx
<button class="border border-gray-medium">테두리 색</button>
```

<br>

<!-- Top Button -->
<p style='background: black; width: 32px; height: 32px; border-radius: 50%; display: flex; justify-content: center; align-items: center; margin-left: auto;'><a href="#top" style='color: white; '>▲</a></p>

<br>

## <span id="5">🤝 5. 커밋 컨벤션</span>

커밋 메시지 형식: `[타입] - 하려는 내용`

| **타입** | **설명**                     | **예시**                                              |
| -------- | ---------------------------- | ----------------------------------------------------- |
| feat     | 기능 구현                    | [feat] - 페인페이지 레이아웃 구현                     |
| rename   | 파일/폴더 이름 변경 및 이동  | [rename] - `src/old-folder`를 `src/new-folder`로 이동 |
| script   | 라이브러리 추가              | [script] - `supabase` 라이브러리 추가                 |
| fix      | 버그 수정                    | [fix] - `supabase` env 미연결 문제 해결               |
| chore    | 주석 추가/삭제, console 제거 | [chore] - 불필요한 console.log 제거                   |
| refactor | 코드 리팩토링                | [refactor] - 함수 분리 및 코드 정리                   |
| style    | CSS 코드                     | [style] - 버튼 스타일 수정                            |
| test     | 테스트 코드                  | [test] - 유저 로그인 기능 테스트 추가                 |
| docs     | 문서 수정                    | [docs] - API 문서 업데이트                            |

<br>

<!-- Top Button -->
<p style='background: black; width: 32px; height: 32px; border-radius: 50%; display: flex; justify-content: center; align-items: center; margin-left: auto;'><a href="#top" style='color: white; '>▲</a></p>

<br>

## <span id="6">⚙️ 6. Package_yarn</span>

다음은 이 프로젝트에서 사용 중인 주요 라이브러리 목록입니다.

이미 설치되어 있으므로, 별도로 추가할 필요는 없습니다.

```shell
yarn create next-app
```

```shell
yarn add axios
```

```shell
yarn global add json-server
```

```shell
yarn add next-auth
```

```shell
yarn add @tanstack/react-query-devtools
```

<br>

<!-- Top Button -->
<p style='background: black; width: 32px; height: 32px; border-radius: 50%; display: flex; justify-content: center; align-items: center; margin-left: auto;'><a href="#top" style='color: white; '>▲</a></p>

<br>

## <span id="7">7. 마무리👴🗨️</span>

아직 폰트라던가 이미지 파일 넣는 app폴더는 작업 안했는데, 다른 분들 빨리 시작하는게 좋을 듯 하여 일단 올렸습니다.

작업하다가 중간중간 넣게 될 듯 합니다. 필요하신 게 있으시면 얼른 저한테 독촉해주세요!

우선 제일 많이 쓰는 버튼컴포넌트는 만들었는데 미완성입니다. 컴포넌트 작업이에만 의의 두시고 추후에 수정하겠습니다.

<br><br>

저도 개발이 너무 오랜만이라 기억도 안나고 모르는 것도 너무 많네요 ㅎㅎ..

아주 많이 부족하니 도움 많이 부탁드립니다. 제가 틀리거나 이상한 게 있으면, 또 좋은 아이디어 제안할 것이 있으면 언제든지 말씀주세요! 새벽세시에 갑자기 연락주셔도 저는 전혀 상관없습니다. 보는대로 바로 답 드릴게요.

모르는 것이 있으시면 사소하고 별거 아니더라도 물어봐주세요! 톡방이 부담스러우시면 갠톡하셔도 돼용(저도 모를 확률이 80퍼센트지만 같이 고민하면 더 좋잖아요?)

다들 파이팅 합시다!

-- 정한 --

<br>

<!-- Top Button -->
<p style='background: black; width: 32px; height: 32px; border-radius: 50%; display: flex; justify-content: center; align-items: center; margin-left: auto;'><a href="#top" style='color: white; '>▲</a></p>

<br>
