// Message.js
import React from "react";
import { AISpeechBubble, UserSpeechBubble } from "../../../styles/CommonStyles";

const BotMessage = ({ text }) => <AISpeechBubble>{text}</AISpeechBubble>;

const UserMessage = ({ text }) => (
  <div style={{ display: "flex", justifyContent: "flex-end", margin: "5px 0" }}>
    <UserSpeechBubble>{text}</UserSpeechBubble>
  </div>
);

const Message = ({ sender, text }) => {
  return sender === "user" ? (
    <UserMessage text={text} />
  ) : (
    <BotMessage text={text} />
  );
};

export default Message;
