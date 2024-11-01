import React from "react";
import { OptionList, Option } from "../../../styles/CommonStyles";

const SecondMessage = ({ onSelect }) => {
  return (
    <>
      <OptionList>
        <Option onClick={() => onSelect("월급을 받지 못했어")}>월급을 받지 못했어</Option>
        <Option onClick={() => onSelect("부당하게 해고되었어")}>부당하게 해고되었어</Option>
        <Option onClick={() => onSelect("직장에서 차별을 당했어")}>직장에서 차별을 당했어</Option>
        <Option onClick={() => onSelect("언어적 / 신체적 학대를 당했어")}>언어적 / 신체적 학대를 당했어</Option>
        <Option onClick={() => onSelect("기타 (직접 입력)")}>기타 (직접 입력)</Option>
      </OptionList>
    </>
  );
};

export default SecondMessage;