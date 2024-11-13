import React from "react";
import { styled } from "styled-components";

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

const Date = () => {
  return (
    <DateDisplay>
      <img
        src={`${process.env.PUBLIC_URL}/assets/images/chat/date.svg`}
        alt="date"
      />
      <p>2024.12.04</p>
    </DateDisplay>
  );
};

export default Date;
