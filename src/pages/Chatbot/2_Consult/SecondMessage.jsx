import React from "react";
import { AISpeechBubble, OptionList, Option } from "../../../styles/CommonStyles";
import { AIMessageComponent } from "./ConsultPage";

const SecondMessage = () => {
  return (
    <>
      <AIMessageComponent id="second">
        <AISpeechBubble>근로 중 부당한 일을 경험하셨군요😢. 어떤 상황인지 자세히 알려주세요.</AISpeechBubble>
      </AIMessageComponent>
      
      <OptionList>
        <Option>월급을 받지 못했어</Option>
        <Option>부당하게 해고되었어</Option>
        <Option>직장에서 차별을 당했어</Option>
        <Option>언어적 / 신체적 학대를 당했어</Option>
        <Option>기타 (직접 입력)</Option>
      </OptionList>
    </>
  );
};

export default SecondMessage;
