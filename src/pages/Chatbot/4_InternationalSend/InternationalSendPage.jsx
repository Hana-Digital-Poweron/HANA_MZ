import React from "react";
import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";

import Nav from "../../../components/Nav";

/* 전체 컨테이너 */
const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: calc(100vh - 77px);
  overflow-y: scroll;

  // 스크롤바 숨기기
  &::-webkit-scrollbar {
    display: none;
  }
  // 모바일 반응형
  @media (hover: hover) {
    width: 390px;
    margin: 0 auto;
  }
`;

/* Back 버튼 */
const BackButton = styled.button`
  position: absolute;
  top: 16px;
  left: 16px;
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  z-index: 1;

  &:hover {
    color: #007bff;
  }
`;

/* Nav 제외 컨테이너 */
const Content = styled.div`
  flex: 1;
  overflow-y: auto;
  padding-bottom: 32px;
  height: 100%;

  &::-webkit-scrollbar {
    display: none;
  }
`;

/* 이미지 스타일 */
const StyledImage = styled.img`
  width: 100%;
  height: 135%;
`;

const InternationalSend = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1); // 이전 페이지로 이동
  };

  return (
    <Container>
      <BackButton onClick={handleBackClick}
                src={`${process.env.PUBLIC_URL}/assets/images/nav/back.svg`}
                alt="International Send"

></BackButton> {/* 좌측 상단에 배치된 뒤로 가기 버튼 */}
      <Content>
        <StyledImage
          src={`${process.env.PUBLIC_URL}/assets/images/InternationalSend/internationalSending_img.svg`}
          alt="International Send"
        />
      </Content>
      <Nav />
    </Container>
  );
};

export default InternationalSend;
