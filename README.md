## 프로젝트 소개

> json-server로 만든 가상의 서버에서 견적 요청서 목록 데이터를 가져와 화면에 출력하고
> 필터링과 토글 기능으로 조건에 맞는 요청서가 보여질 수 있도록 하는 페이지 제작.

### member

<table>
  <tr>
        </td>
      <td align="center">
      <a href="https://github.com/LEEHYUNHO2001"
        ><img
          src="https://avatars.githubusercontent.com/LEEHYUNHO2001"
          width="100px;"
          alt=""
        /><br /><sub><b>이현호</b></sub></a>
    <br />
    </td>
    <td align="center">
      <a href="https://github.com/hoonjoo-park"
        ><img
          src="https://avatars.githubusercontent.com/hoonjoo-park"
          width="100px;"
          alt=""
        /><br /><sub><b>박훈주</b></sub></a
      ><br />
    </td>
    <td align="center">
      <a href="https://github.com/Yoon-CH"
        ><img
          src="https://avatars.githubusercontent.com/Yoon-CH"
          width="100px;"
          alt=""
        /><br /><sub><b>윤창현</b></sub></a
      ><br />
    </td>
    <td align="center">
      <a href="https://github.com/devjoylee"
        ><img
          src="https://avatars.githubusercontent.com/devjoylee"
          width="100px;"
          alt=""
        /><br /><sub><b>이주영</b></sub></a
      ><br />
  </tr>
</table>

| 팀 구성        | 담당                            |
| -------------- | ------------------------------- |
| 이주영, 윤창현 | 견적요청서 제작, 토글 버튼 구현 |
| 이현호, 박훈주 | 필터 및 리셋 구현, 반응형 제작  |

## 배포 주소

https://estimate-board-page.herokuapp.com/

### 시작

```bash
npm start
```

## 사용 기술 및 스택

- Stack
  - React Hooks
  - styled-components
  - fetch / json-server
  - Deploy : Netilfy
  - Other : Git / GitHub
  - Build Tool (Create React App)
  - Code Quality Tool (Prettier)

## 기능 구현 목록

### API 데이터 가져와서 출력하기

- json-server로 만든 mock data(db.json)를 받아오기 위해 `fetcher` 함수 제작.
- `fetcher` 로 받아온 데이터를 state에 저장해서 관리. state type : `Estimate[]`
- API 데이터가 없거나 필터링 조건에 부합하지 않으면 빈 화면 노출

### 상담중 요청만 보기 토글 활성화

- state 값을 활용한 토글 스위치 버튼 on / off 기능 구현
- on / off에 따른 “상담중” status 포함된 카드 표현 기능 구현

### 필터링 기능 구현

1. new Set()을 활용하여 method, materials에 해당하는 카테고리들이 중복 없이 동적으로 리스트업 될 수 있도록 구현.
2. util 함수 getFilter()를 활용하여 선택된 카테고리에 해당하는 카드박스만 보여질 수 있도록 구현.

   필터링은 복수 선택이 가능. 필터 리셋 버튼 생성.

### 모바일 반응형 UI 제작

- 미디어 쿼리를 상수로 만들어 반응형을 제작하였습니다.

```jsx
const size = {
  small: '800px',
  medium: '900px',
  large: '1200px',
};

export const Device = {
  small: `(max-width: ${size.small})`,
  medium: `(max-width: ${size.medium})`,
  large: `(max-width: ${size.large})`,
};
```

## CRA 구조

```
│  App.tsx
│  index.tsx
│
├─components
│  │  Filter.tsx
│  │  FilterInput.tsx
│  │  Toggle.tsx
│  │
│  ├─EstimateList
│  │      Button.tsx
│  │      EstimateItem.tsx
│  │      EstimateList.tsx
│  │      index.ts
│  │
│  └─layout
│          Nav.tsx
│          SideNav.tsx
│
├─constants
│      index.ts
│
├─hooks
│      useData.tsx
│
├─images
│      building.png
│      BuildingBlack.png
│      ColorLogo.png
│      hamburger.png
│      index.ts
│      Logo.png
│      refresh.png
│
├─pages
│      mainPage.tsx
│
├─styles
│      GlobalStyles.js
│
├─types
│      card.ts
│      category.ts
│
└─utils
        fetcher.ts
        getFilter.ts
```

## 커밋 컨벤션

깃모지를 사용하여 직관성을 높이고, 기능이나 UI 설계에 따른 메세지를 커밋 메세지에 담는것을 컨벤션으로 결정했습니다. 깃모지로 인해 상대방이 어떤 작업을 수행했는지 한 눈에 확인할 수 있고, 메세지를 보며 조금 더 상세한 상황을 파악할 수 있습니다.

| 깃모지 | 사용 예시               |
| ------ | ----------------------- |
| 🎉     | init                    |
| 🚚     | 디렉토리 또는 파일 이동 |
| ✨     | 기능 구현               |
| 💄     | CSS 스타일링            |
| ♻️     | 리팩토링                |
| 📝     | Readme 수정             |
| ➕     | 모듈 추가               |
| 🐛     | 버그 해결               |
| 🚑️    | 치명적인 오류 해결      |

## 과제 후기

### **이현호** 😎

페어 프로그래밍으로 기능을 구현하며, 더 효율적이고 가독성 좋은 코드를 작성하기 위해 활발한 의사소통을 했습니다. 함께 설계하다 보니 복잡한 기능도 좀 더 쉽게 구현할 수 있었습니다. 평소 사용하던 코딩 스타일이 아닌 팀원의 스킬을 보며 조금 더 유연한 사고를 할 수 있었습니다.

### 윤창현 ✨

로직을 구현하는 것에 있어 하나의 방법만 생각하는 것이 아니라 다양한 방법으로 시도하고 구현해보는 과정을 경험할 수 있었던 시간이었습니다. 또한 4명이서 각자의 코드를 작성하는 것이 아닌, 팀을 위한 코드와 로직을 구현함으로써 그 과정에서 조금 더 깊은 소통과 고민을 함께 나눌 수 있었던 행복한 시간이었습니다.

### **박훈주** 🐯

짝 프로그래밍을 하며 코드 로직에 대한 고민을 함께 하고, 서로 짠 함수 알고리즘에 대한 피드백을 주고받는 과정이 굉장히 유익했습니다. 또한 모바일 반응형 UI를 제작하면서 조금 더 반응형 웹에 대한 이해도를 높일 수 있는 좋은 경험을 했습니다. 그리고 팀원들과의 소통을 통해 여러 코드 작성 방법 및 로직들에 대한 공부도 할 수 있어 시야도 더 넓어진 것 같습니다.

### **이주영 👩‍🦰**

이번 과제에서는 팀원들과 함께 코드를 작성하며 다양한 구현 방식을 배울 수 있었습니다. 같은 기능도 다르게 구현하는 걸 보면서 앞으로는 프로젝트를 진행할 때 하나의 방법을 고집하지 않고 다양하게 접근해보며 진행하는게 좋겠다고 생각했습니다.
