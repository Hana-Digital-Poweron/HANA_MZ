import React from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";

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

const AccountHeader = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  margin-top: -20px;
  background-image: url(${process.env
    .PUBLIC_URL}/assets/images/account/gradientBackground.svg);
  background-size: cover;
  width: 100%;
  height: 300px;
  padding-top: 40px;
`;

const HeaderTitle = styled.div`
  color: #fff;
  text-align: center;
  font-size: 18px;
  font-weight: 600;
`;

const BackBtn = styled.div`
  position: absolute;
  top: 45px;
  left: 20px;
  background-image: url(${process.env.PUBLIC_URL}/assets/images/nav/back.svg);
  background-size: cover;
  width: 15px;
  height: 15px;
  cursor: pointer;
`;

const CloseBtn = styled.div`
  position: absolute;
  top: 45px;
  right: 20px;
  background-image: url(${process.env.PUBLIC_URL}/assets/images/nav/close.svg);
  background-size: cover;
  width: 14px;
  height: 15px;
  cursor: pointer;
`;

const AccountInfo = styled.div`
  position: relative;
  top: -10px;
  margin: auto;
  width: 310px;
  display: flex;
  justify-content: space-between;
  font-weight: 900;
  font-size: 21px;
  color: #fff;
  #account-title {
    text-align: left;
    font-size: 14px;
    font-weight: 500;
  }
  #account-number {
    font-size: 11.5px;
    font-weight: 500;
    margin-top: 10px;
    margin-bottom: 10px;
    text-align: left;
  }
  #currency {
    font-size: 12px;
  }
`;

const AboutIcon = styled.div`
  width: 23px;
  height: 23px;
  right: 10px;
  cursor: pointer;
  background-image: url(${process.env
    .PUBLIC_URL}/assets/images/account/about.svg);
  background-size: cover;
  margin-top: 5px;
`;

const TranHeader = styled.div`
  display: flex;
  justify-content: flex-end;
  color: var(--Gray-Font1, #8e9796);
  font-size: 11px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%;
  letter-spacing: -0.11px;
  margin-right: 20px;
  margin-top: 20px;
  margin-bottom: 30px;
`;

const TranItem = styled.div`
  height: 96px;
  border-bottom: 1px solid #d9d9d9;
  display: flex;
  padding-left: 33px;
  padding: 11px 0 0 33px;
  gap: 13px;
  position: relative;
  background: ${(props) =>
    props.isHighlight
      ? "linear-gradient(180deg, rgba(132, 211, 172, 0.50) 0%, rgba(39, 175, 163, 0.50) 100%)"
      : "transparent"};

  #date {
    color: var(--Gray-Font2, #677079);
    font-size: 12.5px;
    font-weight: 500;
    position: absolute;
    bottom: 10px;
  }
  #name {
    color: ${(props) => (props.isGrey ? "#21B8BF" : "#000000")};
    font-size: 15.5px;
    font-weight: 600;
    top: 22px;
    position: absolute;
  }
  #price {
    position: absolute;
    top: 23px;
    right: 34px;
    color: ${(props) => (props.isGrey ? "#089995" : "#f5803a")};
    text-align: right;
    font-size: 15.5px;
    font-weight: 600;
  }
  #balance {
    color: #000;
    font-size: 12px;
    font-weight: 400;
    position: absolute;
    bottom: 7px;
    right: 34px;
  }
`;
const FloatBtn = styled.div`
  position: fixed;
  margin-left: 330px;
  bottom: 30px;
  display: flex;
  flex-direction: column;
  cursor: pointer;
`;

const transactions = [
  {
    id: 1,
    date: "2024.12.03",
    name: "입금[월급]",
    price: "+ 216,883",
    balance: "KRW 1,000,186",
  },
  {
    id: 2,
    date: "2024.12.03",
    name: "출금",
    price: "- 10,000",
    balance: "KRW 793,303",
  },
  {
    id: 3,
    date: "2024.12.03",
    name: "출금",
    price: "- 30,000",
    balance: "KRW 823,303",
  },
  {
    id: 4,
    date: "2024.12.02",
    name: "출금",
    price: "- 1,000",
    balance: "KRW 824,303",
  },
  {
    id: 5,
    date: "2024.12.01",
    name: "출금",
    price: "- 13,450",
    balance: "KRW 837,753",
  },
];

const AccountDetailPage = () => {
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1);
  };
  const handleGoHome = () => {
    navigate("/");
  };
  return (
    <Container>
      <AccountHeader>
        <HeaderTitle>거래내역조회</HeaderTitle>
        <BackBtn onClick={handleGoBack} />
        <CloseBtn onClick={handleGoHome} />
        <AccountInfo>
          <div>
            <div id="account-title">저축예금</div>
            <div id="account-number">123-456789-0123</div>
            <div id="allbalance">
              <span id="currency">KRW &nbsp;</span>1,000,186
            </div>
          </div>
          <AboutIcon />
        </AccountInfo>
      </AccountHeader>
      <TranHeader>
        입출금 / 2024-09-03 ~ 2024-12-04 &nbsp;
        <img
          src={`${process.env.PUBLIC_URL}/assets/images/account/setting.svg`}
        />
      </TranHeader>
      {transactions.map((transaction) => (
        <TranItem
          key={transaction.id}
          isGrey={transaction.id === 1}
          isHighlight={transaction.id === 1}
        >
          <div id="name">{transaction.name}</div>
          <div id="date">{transaction.date}</div>
          <div id="price">{transaction.price}</div>
          <div id="balance">{transaction.balance}</div>
        </TranItem>
      ))}
      <FloatBtn>
        <img
          src={`${process.env.PUBLIC_URL}/assets/images/account/button.svg`}
        />
      </FloatBtn>
    </Container>
  );
};

export default AccountDetailPage;
