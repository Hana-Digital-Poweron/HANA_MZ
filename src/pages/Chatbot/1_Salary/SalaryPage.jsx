import { React, useState, useEffect, useRef } from "react";
import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";

import Nav from "../../../components/Nav";
import Message from "./Message";
import ChatBox from "./ChatBox";
import Date from "./Date";
import { AISpeechBubble , Option} from "../../../styles/CommonStyles";
import { predefinedResponses, buttonActions } from "./response";

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
  padding-bottom: 32px;
  height: 100%;
`;

const MessageSection = styled.div`
  height: calc(100% - 38px);
  padding: 39px 23px 0;
  overflow-y: auto;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const AIMessageComponent = styled.div`
  position: relative;
  padding-top: 62px;

  img {
    position: absolute;
    top: 0;
    left: 0;
  }
`;

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
  right: 0;
`;

const Salary = () => {
  const navigate = useNavigate();

  const [buttonsToShow, setButtonsToShow] = useState([]);
  const [messages, setMessages] = useState([]);
  const messageEndRef = useRef(null);

  // 메시지 업데이트마다 스크롤 가장 하단으로 이동
  useEffect(() => {
    if (messages.length > 0) {
      messageEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  const handleSendMessage = (userMessage) => {
    const newMessages = [...messages, { sender: "user", text: userMessage }];
    const response =
      Object.entries(predefinedResponses).find(([keyword]) =>
        userMessage.includes(keyword)
      )?.[1] || "죄송해요, 이해하지 못했어요.";

    // 버튼 표시 조건
    const buttons = buttonActions.filter((action) =>
      response.includes(action.keyword)
    );
    setButtonsToShow(buttons);

    setMessages([...newMessages, { sender: "bot", text: response }]);
  };

  // 버튼 클릭 동작
  const buttonActionsMap = {
    "내 계좌 확인": () => navigate("/accounts-overview"),
    "거래 내역 확인": () => console.log("거래 내역 확인 클릭됨"),
  };
  const handleButtonClick = (buttonText) => {
    const action = buttonActionsMap[buttonText];
    if (action) {
      action();
    }
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
          {buttonsToShow.map((button, index) => (
            <Option key={index} onClick={() => handleButtonClick(button.text)}>
              {button.text}
            </Option>
          ))}
          <div ref={messageEndRef} />
        </MessageSection>
        <LanguageSettingComponent>Language</LanguageSettingComponent>
        <ChatBox onSendMessage={handleSendMessage} />
      </Content>
      <Nav />
    </Container>
  );
};

export default Salary;
