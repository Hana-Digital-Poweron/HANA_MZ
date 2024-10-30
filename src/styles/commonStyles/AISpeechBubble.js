import styled from "styled-components";

export const AISpeechBubble = styled.div`
  background-color: ${({ theme }) => theme.color.Gray}; 
  width: 253px;
  padding: 10px;
  border-radius: 10px;
  margin-bottom: 10px;
  align-self: flex-start;
  position: relative;
  height: auto;
  color: ${({ theme }) => theme.color.Font3}; 
  font-size: 13px;
  font-weight: 500;
  line-height: 150%
  letter-spacing: -0.91px;
  
  &:after {
    content: ""; // 삼각형을 생성
    position: absolute;
    top: 10px;
    right: 100%;
    margin-top: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: transparent ${({ theme }) => theme.color.Gray} transparent transparent; // 삼각형 색상 수정
  }
`;
