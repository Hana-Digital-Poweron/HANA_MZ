import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Pretendard';
    font-weight: normal;
    src: url('/assets/fonts/PretendardVariable.ttf') format('truetype');
  }

  *, *::before, *::after {
    box-sizing: border-box;
    font-family: 'Pretendard', sans-serif; // 대체 폰트 추가
  }

  body {
    font-family: 'Pretendard', sans-serif; // 대체 폰트 추가
    display: flex;
    flex-direction: column;
    position: relative;
    text-align: center;
    margin: 0;
    min-height: 100vh;
  }

  .responsive-container {
    position: relative;
    margin: 0 auto;
    width: 100%; // 기본 너비를 100%로 설정
    max-width: 390px; // 최대 너비 설정
    background: var(--Gray-Mobileregular, #f6f7f9);
    overflow-y: scroll;
    
    // 스크롤바 숨기기
    ::-webkit-scrollbar {
      display: none;
    }
    -ms-overflow-style: none; 
    scrollbar-width: none; 

    /* 반응형 */
    @media (max-width: 768px) {
      margin: 0 16px; // 모바일에서의 여백 조정
      width: calc(100% - 32px); // 여백을 고려한 너비 조정
    }

    @media (max-width: 480px) {
      margin: 0 8px; // 더 작은 화면에서 여백 조정
      width: calc(100% - 16px); // 더 작은 화면에 맞춰 너비 조정
    }
  }
`;

export default GlobalStyle;
