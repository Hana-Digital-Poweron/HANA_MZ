import React, { useState, useEffect } from "react";
import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";

import Nav from "../../../components/Nav";
import Message from "./Message";
import ChatBox from "./ChatBox";
import Date from "./Date";
import SecondMessage from "./SecondMessage";

import { AIMessageComponent, AISpeechBubble } from "../../../styles/commonStyles";

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
  first-child {
    padding-top: 62px;
}
  img {
    position: absolute;
    top: 0px;
    left: 0px;
  }
`;

/* 사용자가 전송한 메시지 영역 */
const UserMessageComponent = styled.div`
   display: flex; 
  justify-content: flex-end;
  margin: 0;
`;

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

const Consult = () => {
    const navigate = useNavigate();
    const [showSecondMessage, setShowSecondMessage] = useState(false);

    // 1초 후에 메시지를 표시
    useEffect(() => {
        const timer = setTimeout(() => {
            setShowSecondMessage(true);
        }, 1000); 

        return () => clearTimeout(timer);
    }, []);

  
    
    return (
        <Container>
            <Content>
                <MessageSection>
                <Date />
                    <AIMessageComponent>
                      <img src={`${process.env.PUBLIC_URL}/assets/images/logos/chatbotOwlLogo.svg`} alt="logo" width="61px" />
                      <AISpeechBubble>저는 여러분의 유학 생활을 돕는 챗봇입니다. 
                      궁금한 부분이 있으시면 얼마든지 물어보세요!</AISpeechBubble>
                    </AIMessageComponent>
                     <UserMessageComponent>
                      <UserSpeechBubble>근로 중 부당한 일을 겪어서 상담하고 싶어</UserSpeechBubble>
                    </UserMessageComponent> 
                    {showSecondMessage && <SecondMessage />}
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

export default Consult;
