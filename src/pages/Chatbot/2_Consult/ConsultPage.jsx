import React, { useState, useEffect } from "react";
import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";
import Nav from "../../../components/Nav";
import Message from "./Message";
import ChatBox from "./ChatBox";
import Date from "./Date";
import SecondMessage from "./SecondMessage";
import DiscriminationMessage from "./DiscriminationMessage";
import { AISpeechBubble, UserSpeechBubble } from "../../../styles/CommonStyles";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: calc(100vh - 77px);  
  overflow-y: scroll; 
  &::-webkit-scrollbar {
      display: none;
    }
  @media (hover: hover) {
    width: 390px; 
    margin: 0 auto;
  }
`;

const Content = styled.div`
  flex: 1;
  overflow-y: auto;
  padding-bottom: 32px;
  height: 100%; 
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const AIMessageComponent = styled.div`
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

const MessageSection = styled.div`
  height: calc(100% - 38px);
  padding: 39px 23px 0;
`;

const UserMessageComponent = styled.div`
   display: flex; 
  justify-content: flex-end;
  margin: 0;
`;

const ChatSendSection = styled.div`
  width: 340px;
  height: 47px;
  border-radius: 10px;
  border: 2px solid ${({ theme }) => theme.color.Font3}; 
  background: #FFF;
  margin: 0 auto;
  position: relative;
`;

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

const MessageInputContainer = styled.div`
  display: flex;
  height: 100%;
`;

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

const FileUploadButtonComponent = styled.button`
   background: transparent;
  border: none;
  padding: 0;
  cursor: pointer; 
`;

const Consult = () => {
  const navigate = useNavigate();
  const [showSecondMessage, setShowSecondMessage] = useState(false);
  const [userMessage, setUserMessage] = useState("");
  const [optionSelected, setOptionSelected] = useState(false);
  const [isDiscrimination, setIsDiscrimination] = useState(false); 

  useEffect(() => {
      const timer = setTimeout(() => {
          setShowSecondMessage(true);
      }, 1000); 

      return () => clearTimeout(timer);
  }, []);

  const handleOptionSelect = (optionText) => {
      setUserMessage(optionText);
      setOptionSelected(true);
      if (optionText === "직장에서 차별을 당했어") {
          setIsDiscrimination(true); 
      }
  };

  const handleDiscriminationSelect = (discriminationType) => {
      setUserMessage(discriminationType);
      setIsDiscrimination(true);
    //   if (discriminationType === "인종이나 국적 차별") {
    //     진술서입력해주세요(true); 
    // }
  };

  return (
      <Container>
          <Content>
              <MessageSection>
                  <Date />
                  <AIMessageComponent id="first">
                    <img src={`${process.env.PUBLIC_URL}/assets/images/logos/chatbotOwlLogo.svg`} alt="logo" width="61px" />
                    <AISpeechBubble>저는 여러분의 유학 생활을 돕는 챗봇입니다. 
                    궁금한 부분이 있으시면 얼마든지 물어보세요!</AISpeechBubble>
                  </AIMessageComponent>
                  <UserMessageComponent>
                    <UserSpeechBubble>근로 중 부당한 일을 겪어서 상담하고 싶어</UserSpeechBubble>
                  </UserMessageComponent>
                  {showSecondMessage && (
                    <AIMessageComponent id="second">
                        <AISpeechBubble>근로 중 부당한 일을 경험하셨군요😢. 어떤 상황인지 자세히 알려주세요.</AISpeechBubble>
                    </AIMessageComponent>
                  )}
                  {!optionSelected && showSecondMessage && <SecondMessage onSelect={handleOptionSelect} />}

                  {userMessage && (
                      <UserMessageComponent>
                          <UserSpeechBubble>{userMessage}</UserSpeechBubble>
                      </UserMessageComponent>
                  )}
                  {isDiscrimination && ( 
                      <AIMessageComponent id="discrimination">
                          <AISpeechBubble>직장에서 차별을 경험하셨군요. 어떤 종류의 차별을 당하셨는지 알려주실 수 있을까요?</AISpeechBubble>
                      </AIMessageComponent>
                  )}
                  {isDiscrimination && 
                      <DiscriminationMessage onSelect={handleDiscriminationSelect} />
                  }

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