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

  //스크롤바 숨기기
  &::-webkit-scrollbar {
      display: none;
    }
  // 모바일 반응형
    @media (hover: hover) {
    width: 390px; 
    margin: 0 auto;
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


const Contract = () => {
    const navigate = useNavigate();

    const handleOptionClick = (path) => {
      navigate(path);
  };

    return (
        <Container>
            <Content>
                
            </Content>
            <Nav />
        </Container>
    );
};

export default Contract;
