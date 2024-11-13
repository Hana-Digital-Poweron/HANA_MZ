import React, { useState } from "react";
import { styled, keyframes } from "styled-components";
import { useNavigate } from "react-router-dom";

import Nav from "../../components/Nav";
import { AISpeechBubble } from "../../styles/commonStyles/AISpeechBubble";
import { Option } from "../../styles/commonStyles/OptionStyle";

/* 채팅 메시지 나타나는 애니메이션 */
const fadeIn = keyframes`
  0% {
    opacity: 0;
    transform: translateY(10px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

/* 로딩 애니메이션 */
const dots = keyframes`
  0% { content: ''; }
  33% { content: '.'; }
  66% { content: '..'; }
  100% { content: '...'; }
`;

/* 전체 컨테이너 */
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
  height: calc(100% - 38px);
  padding: 39px 23px 0;
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
const UserMessageComponent = styled.div`
  display: inline-block;
  background-color: #E0F7FA;
  color: #00796B;
  padding: 12px 16px;
  border-radius: 15px;
  margin: 10px 0;
  align-self: flex-end; /* 사용자 메시지를 오른쪽으로 정렬 */
  font-size: 14px;
  line-height: 1.5;
  animation: ${fadeIn} 0.4s ease-out;
  
  /* 메시지 길이에 따라 유동적으로 조절 */
  max-width: 70%; /* 최대 폭을 설정 */
  word-wrap: break-word; /* 텍스트가 너무 길 때 줄바꿈 */
  white-space: pre-wrap; /* 연속 공백이나 줄바꿈을 유지 */
`;

/* 로딩 메시지 */
const LoadingMessage = styled.div`
  color: #00796B;
  font-size: 14px;
  font-weight: 500;
  align-self: flex-end; /* 로딩 메시지도 사용자 메시지처럼 오른쪽 정렬 */
  margin: 10px 0;
  animation: ${fadeIn} 0.4s ease-out;

  &::after {
    animation: ${dots} 1s steps(4, end) infinite;
  }
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

const Main = () => {
    const navigate = useNavigate();
    const [userMessages, setUserMessages] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const handleOptionClick = (message, path) => {
        setUserMessages([...userMessages, message]); // 사용자가 클릭한 메시지 추가
        setIsLoading(true); // 로딩 상태 활성화

        // 3초 후에 페이지 이동
        setTimeout(() => {
            setIsLoading(false); // 로딩 상태 비활성화
            navigate(path);
        }, 3000);
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
                    
                    {/* 사용자 메시지 출력 */}
                    {userMessages.map((msg, index) => (
                        <UserMessageComponent key={index}>{msg}</UserMessageComponent>
                    ))}

                    {/* 로딩 중 메시지 출력 */}
                    {isLoading && <LoadingMessage>Loading</LoadingMessage>}

                    {/* 로딩 중이 아닐 때만 옵션 목록 표시 */}
                    {!isLoading && (
                      <OptionList>
                          <Option onClick={() => handleOptionClick("월급(근로비)이 들어왔는지 확인하고 싶어", '/salary')}>
                            월급(근로비)이 들어왔는지 확인하고 싶어</Option>
                          <Option onClick={() => handleOptionClick("근로 중 부당한 일을 겪어서 상담하고 싶어", '/consult')}>
                            근로 중 부당한 일을 겪어서 상담하고 싶어</Option>
                          <Option onClick={() => handleOptionClick("근로계약서를 번역해줘", '/contract')}>
                            근로계약서를 번역해줘</Option>
                          <Option onClick={() => handleOptionClick("해외로 송금하고 싶어", '/international-send')}>
                            해외로 송금하고 싶어</Option>
                      </OptionList>
                    )}
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
