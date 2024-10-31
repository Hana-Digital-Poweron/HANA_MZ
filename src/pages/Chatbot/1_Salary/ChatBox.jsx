// ChatBox.js
import React, { useState } from "react";
import { styled } from "styled-components";

const ChatSendSection = styled.form`
  width: 340px;
  height: 47px;
  border-radius: 10px;
  border: 2px solid ${({ theme }) => theme.color.Font3};
  background: #fff;
  margin: 0 auto;
  position: relative;
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

const ChatBox = ({ onSendMessage }) => {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      onSendMessage(input.trim());
      setInput("");
    }
  };

  return (
    <ChatSendSection onSubmit={handleSubmit} style={{ marginTop: "10px" }}>
      <LanguageSettingComponent>Language</LanguageSettingComponent>
      <MessageInputContainer>
        <MessageTypingInput
          placeholder="궁금하거나 필요한 것을 말씀해주세요"
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <FileUploadButtonComponent>
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/chat/clip.svg`}
            alt="fileUpload"
            width="16px"
          />
        </FileUploadButtonComponent>
      </MessageInputContainer>
    </ChatSendSection>
  );
};

export default ChatBox;
