import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
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

const AccountHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
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
  font-style: normal;
  font-weight: 600;
  line-height: 150%;
  letter-spacing: -0.18px;
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

const ToggleContainer = styled.div`
  margin-top: 35px;
  width: 370px;
  height: 43px;
  padding: 5px;
  border-radius: 22px;
  background-color: #a7d8c9;
  position: relative;
  .wrapper {
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 300px;
    height: 40px;
    margin-top: -3px;
  }
`;

const ToggleButton = styled.div`
  width: 100px;
  padding: 10px;
  text-align: center;
  color: ${({ isSelected }) => (isSelected ? "#00a99d" : "#ffffff")};
  font-weight: bold;
  cursor: pointer;
  transition: color 0.3s;
  z-index: 2;
`;

const Slider = styled.div`
  position: absolute;
  top: 4px;
  left: ${({ active }) => (active ? "183px" : "3px")};
  width: 183px;
  height: 35px;
  border-radius: 22px;
  background-color: #ffffff;
  transition: left 0.3s ease;
  z-index: 1;
`;

const Notification = styled.div`
  margin-top: 40px;
`;

const CardContainer = styled.div`
  width: 85%;
  height: 200px;
  padding-top: 20px;
  border-radius: 22px;
  background: #fff;
  box-shadow: 0px 4px 6.8px 4px rgba(0, 0, 0, 0.15);
`;

const AccountInfo = styled.div`
  margin: auto;
  width: 250px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  #account-title {
    font-size: 16px;
    font-weight: bold;
    text-align: left;
  }
  #account-number {
    font-size: 14px;
    color: #666;
  }
`;

const CopyIcon = styled.div`
  width: 18px;
  height: 21px;
  right: 30%;
  cursor: pointer;
  background-image: url(${process.env
    .PUBLIC_URL}/assets/images/account/copy.svg);
  background-size: cover;
`;

const BalanceSection = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 30px 30px 31px 0;
  font-size: 24px;
  font-weight: 900;
  color: #000;
  letter-spacing: -0.21px;
`;

const Currency = styled.span`
  font-size: 12px;
  font-weight: 900;
  margin-right: 7px;
`;

const ButtonContainer = styled.div`
  display: flex;
  border-top: 1px solid #e0e0e0;
`;

const ActionButton = styled.div`
  flex: 1;
  padding: 10px;
  text-align: center;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  &:not(:last-child) {
    border-right: 1px solid #e0e0e0;
  }
`;

const SlideToggleButton = ({ active, setActive }) => {
  return (
    <ToggleContainer>
      <Slider active={active} />
      <div className="wrapper">
        <ToggleButton isSelected={!active} onClick={() => setActive(false)}>
          하나은행
        </ToggleButton>
        <ToggleButton isSelected={active} onClick={() => setActive(true)}>
          다른은행
        </ToggleButton>
      </div>
    </ToggleContainer>
  );
};

const AccountCard = () => {
  const navigate = useNavigate();
  const navigateAccountdetail = () => {
    navigate("/account-detail");
  };

  // 계좌 복사
  const copyToClipboard = () => {
    const accountNumberElement = document.getElementById("account-number");
    if (accountNumberElement) {
      const accountNumber = accountNumberElement.textContent;
      navigator.clipboard.writeText(accountNumber).then(
        () => alert("계좌번호가 복사되었습니다."),
        (err) => console.error("다시 한 번 시도해주세요.", err)
      );
    }
  };

  return (
    <CardContainer>
      <AccountInfo>
        <div style={{ cursor: "pointer" }} onClick={navigateAccountdetail}>
          <div id="account-title">
            저축예금 &nbsp;
            <img
              src={`${process.env.PUBLIC_URL}/assets/images/account/inside.svg`}
            />
          </div>
          <div id="account-number">123-456789-0123</div>
        </div>
        <CopyIcon onClick={copyToClipboard} />
      </AccountInfo>
      <BalanceSection>
        <Currency>KRW</Currency>1,000,186
      </BalanceSection>
      <ButtonContainer>
        <ActionButton onClick={navigateAccountdetail}>이체</ActionButton>
        <ActionButton onClick={navigateAccountdetail}>송금</ActionButton>
      </ButtonContainer>
    </CardContainer>
  );
};

const AccountsOverviewPage = () => {
  const navigate = useNavigate();
  const handleGoHome = () => {
    navigate("/");
  };

  const [active, setActive] = useState(false);

  return (
    <Container>
      <AccountHeader>
        <HeaderTitle>보유계좌조회</HeaderTitle>
        <CloseBtn onClick={handleGoHome}></CloseBtn>
        <SlideToggleButton active={active} setActive={setActive} />
        <Notification>
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/account/notice.svg`}
            alt="notice"
          />
        </Notification>
      </AccountHeader>
      {!active && <AccountCard />}
    </Container>
  );
};

export default AccountsOverviewPage;
