import React from "react";
import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";

import Nav from "../../components/Nav";
import { AISpeechBubble } from "../../styles/commonStyles/AISpeechBubble";
// import { UserSpeechBubble } from "../../styles/commonStyles/UserSpeechBubble";
import { Option } from "../../styles/commonStyles/OptionStyle";

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

/* 입력창 제외한 메시지 영역 */
const MessageSection = styled.div`
  height: calc(100% - 38px); //전체 높이 - 입력창 높이
  padding : 39px 23px 0;
`;

/* 날짜 바 */
const DateDisplay = styled.div`
  position: relative;
  text-align: center;
  height: 111px;

  img {
    position: absolute;
    top: 39px; 
    left: 50%; 
    transform: translateX(-50%);
    width: 100%; 
    height: auto; 
  }
  
  p {
    position: absolute;
    top: 30px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 1;
    color: ${(props) => props.theme.color.Font1};
    font-size: 11px;
  }
`;

/* AI가 전송한 메시지 영역 */
const AIMessageComponent = styled.div`
  position: relative;
  padding-top: 62px;
  img{
    position: absolute;
    top: 0px;
    left: 0px;
  }
`;

/* 선택지 */
const OptionList = styled.div`
  margin: 18px 0;
  display: flex;
  flex-direction: column;
  gap: 9px;
`;

/* 사용자가 전송한 메시지 영역 */
// const UserMessageComponent = styled.div`
//   display: flex; 
//   justify-content: flex-end;
//   margin: 0;
// `;

/* 입력창 */
const ChatSendSection = styled.div`
  width: 340px;
  height: 47px;
  border-radius: 10px;
  border: 2px solid ${({ theme }) => theme.color.Font3}; 
  background: #FFF;
  margin: 0 auto;
  position: relative;
`;

/* 언어 설정 */
const LanguageSettingComponent = styled.div`
    width: 67px;
    height: 22px;
    padding-top: 2px;
    border-radius: 11px;
    background: #D7F0ED;
    color: #07928D;
    text-align: center;
    font-size: 10px;
    font-weight: 800;
    line-height: 150%;
    position: absolute;
    top: -29px;
    right: 0px;
`;

/* input창, 파일 업로드 버튼 가로 정렬하기 위한 컴포넌트 */
const MessageInputContainer = styled.div`
  display: flex;
  height: 100%;
`;

/* input창 */
const MessageTypingInput = styled.input`
  width: 307px;
  height: 100%;
  border-radius: 11px;
  padding-left: 18px;
  color: ${({ theme }) => theme.color.Font1}; 
  font-size: 14px;
  font-weight: 500;
  line-height: 150%;
  letter-spacing: -0.98px;
  border: none;
`;

/* 파일 업로드 버튼 */
const FileUploadButtonComponent = styled.button`
   background: transparent;
  border: none;
  padding: 0;
  cursor: pointer; 
`;

const Main = () => {
    const navigate = useNavigate();

    const handleOptionClick = (path) => {
      navigate(path);
  };

    return (
        <Container>
            <Content>
                <MessageSection>
                    <DateDisplay>
                      <img src={`${process.env.PUBLIC_URL}/assets/images/chat/date.svg`} alt="date" />
                      <p>2024.12.04</p>
                    </DateDisplay>
                    <AIMessageComponent>
                      <img src={`${process.env.PUBLIC_URL}/assets/images/logos/chatbotOwlLogo.svg`} alt="logo" width="61px" />
                      <AISpeechBubble>저는 여러분의 유학 생활을 돕는 챗봇입니다. 
                      궁금한 부분이 있으시면 얼마든지 물어보세요!</AISpeechBubble>
                    </AIMessageComponent>
                    <OptionList>
                        <Option onClick={() => handleOptionClick('/salary')}>
                          월급(근로비)이 들어왔는지 확인하고 싶어</Option>
                        <Option onClick={() => handleOptionClick('/consult')}>
                          근로 중 부당한 일을 겪어서 상담하고 싶어</Option>
                        <Option onClick={() => handleOptionClick('/contract')}>
                          근로계약서를 번역해줘</Option>
                        <Option onClick={() => handleOptionClick('/international-send')}>
                          해외로 송금하고 싶어</Option>
                    </OptionList>
                    {/* <UserMessageComponent>
                      <UserSpeechBubble>월급(근로비)이 들어왔는지 확인하고 싶어</UserSpeechBubble>
                    </UserMessageComponent> */}
                </MessageSection>
                <ChatSendSection>
                    <LanguageSettingComponent>
                        Language
                    </LanguageSettingComponent>
                    <MessageInputContainer>
                        <MessageTypingInput placeholder="궁금하거나 필요한 것을 말씀해주세요" />
                        <FileUploadButtonComponent>
                        <img src={`${process.env.PUBLIC_URL}/assets/images/chat/clip.svg`} alt="fileUpload" width="16px" />
                        </FileUploadButtonComponent>
                    </MessageInputContainer>
                </ChatSendSection>
            </Content>
            <Nav />
        </Container>
    );
};

export default Main;
