import styled from "styled-components";

export const UserSpeechBubble = styled.div`
  background-color: #21B8BF;
  width: 253px;
  padding: 10px;
  border-radius: 10px;
  margin-bottom: 10px;
  align-self: flex-end;
  position: relative;
  height: auto;
  color: #FFF;
  font-size: 13px;
  font-weight: 500;
  line-height: 150%;
  letter-spacing: -0.91px;
  text-align: left;

  &:after {
    content: ""; // 삼각형을 생성
    position: absolute;
    top: 10px;
    left: 100%; 
    margin-top: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: transparent transparent transparent #21B8BF;
  }
`;
