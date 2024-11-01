import React from "react";
import { OptionList, Option } from "../../../styles/CommonStyles";

const DiscriminationMessage = ({ onSelect }) => {
  return (
    <OptionList>
      <Option onClick={() => onSelect("인종이나 국적 차별")}>인종이나 국적 차별</Option>
      <Option onClick={() => onSelect("성별 또는 성 정체성 차별")}>성별 또는 성 정체성 차별</Option>
      <Option onClick={() => onSelect("종교 또는 신념에 따른 차별")}>종교 또는 신념에 따른 차별</Option>
      <Option onClick={() => onSelect("기타 (직접 입력)")}>기타 (직접 입력)</Option>
    </OptionList>
  );
};

export default DiscriminationMessage;
