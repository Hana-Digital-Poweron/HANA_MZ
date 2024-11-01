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
  line-height: 150%;
  letter-spacing: -0.91px;
  text-align: left;

  &:after {
    content: "";
    position: absolute;
    top: 10px;
    right: 100%;
    margin-top: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: transparent ${({ theme }) => theme.color.Gray} transparent transparent;
  }
`;

export const OptionList = styled.div`
  margin: 18px 0;
  display: flex;
  flex-direction: column;
  gap: 9px;
`;

export const Option = styled.div`
  width: 214px;
  height: 32px;
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.color.Font1}; 
  background: #FFF;
  color: ${({ theme }) => theme.color.Font3}; 
  font-size: 11px;
  font-weight: 500;
  line-height: 150%;
  letter-spacing: -0.77px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const UserSpeechBubble = styled.div`
  background-color: #21B8BF;
  width: 220px;
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
    content: "";
    position: absolute;
    top: 10px;
    left: 100%;
    margin-top: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: transparent transparent transparent #21B8BF;
  }
`;


