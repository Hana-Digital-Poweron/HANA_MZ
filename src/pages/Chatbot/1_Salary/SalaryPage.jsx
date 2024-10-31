import { React, useState, useEffect, useRef } from "react";
import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";

import Nav from "../../../components/Nav";
import Message from "./Message";
import ChatBox from "./ChatBox";
import Date from "./Date";
import { AISpeechBubble } from "../../../styles/commonStyles/AISpeechBubble";

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
  padding-bottom: 32px;
  height: 100%;
`;

/* 입력창 제외한 메시지 영역 */
const MessageSection = styled.div`
  height: calc(100% - 38px); //전체 높이 - 입력창 높이
  padding: 39px 23px 0;
  overflow-y: auto;

  &::-webkit-scrollbar {
    display: none;
  }
`;

/* AI가 전송한 메시지 영역 */
const AIMessageComponent = styled.div`
  position: relative;
  padding-top: 62px;
  img {
    position: absolute;
    top: 0px;
    left: 0px;
  }
`;

/* 언어 설정 */
const LanguageSettingComponent = styled.div`
  width: 67px;
  height: 22px;
  padding-top: 2px;
  border-radius: 11px;
  background: #d7f0ed;
  color: #07928d;
  text-align: center;
  font-size: 10px;
  font-weight: 800;
  line-height: 150%;
  position: absolute;
  top: -29px;
  right: 0px;
`;

const Salary = () => {
  const navigate = useNavigate();

  const handleOptionClick = (path) => {
    navigate(path);
  };

  const [messages, setMessages] = useState([]);

  const messageEndRef = useRef(null);

  // 메시지가 업데이트될 때마다 스크롤을 가장 하단으로 이동
  useEffect(() => {
    if (messages.length > 0) {
      messageEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  const predefinedResponses = {
    안녕: "안녕하세요! 무엇을 도와드릴까요?",
    날씨: "오늘 날씨는 맑음입니다!",
    시간: "현재 시간은 로컬 시간으로 보여집니다.",
  };

  const handleSendMessage = (userMessage) => {
    const newMessages = [...messages, { sender: "user", text: userMessage }];
    const response =
      predefinedResponses[userMessage] || "죄송해요, 이해하지 못했어요.";

    setMessages([...newMessages, { sender: "bot", text: response }]);
  };

  return (
    <Container>
      <Content>
        <MessageSection>
          <Date />
          <AIMessageComponent>
            <img
              src={`${process.env.PUBLIC_URL}/assets/images/logos/chatbotOwlLogo.svg`}
              alt="logo"
              width="61px"
            />
            <AISpeechBubble>
              저는 여러분의 유학 생활을 돕는 챗봇입니다. 궁금한 부분이 있으시면
              얼마든지 물어보세요!
            </AISpeechBubble>
          </AIMessageComponent>
          {messages.map((msg, index) => (
            <Message key={index} sender={msg.sender} text={msg.text} />
          ))}
          <div ref={messageEndRef} /> {/* 마지막 메시지 참조를 위한 div */}
        </MessageSection>
        <LanguageSettingComponent>Language</LanguageSettingComponent>
        <ChatBox onSendMessage={handleSendMessage} />
      </Content>
      <Nav />
    </Container>
  );
};

export default Salary;
