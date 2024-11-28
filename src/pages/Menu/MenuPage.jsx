import React from "react";
import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";

import Nav from "../../components/Nav";

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
  overflow-y: auto;
  padding-bottom: 32px;
  height: 100%;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 18px;

  #logout {
    width: 72px;
    height: 20px;
    cursor: pointer;
    background-image: url(${process.env
      .PUBLIC_URL}/assets/images/mypage/logout.svg);
    background-size: cover;
  }

  #setting {
    width: 16px;
    height: 16px;
    cursor: pointer;
    background-image: url(${process.env
      .PUBLIC_URL}/assets/images/mypage/setting.svg);
    background-size: cover;
  }
`;

const GreetingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const Greeting = styled.div`
  color: var(--Gray-Font3, #021615);
  text-align: center;
  font-size: 30px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%;
  margin: 16px;
`;

const SubText = styled.div`
  margin-left: 20px;
  color: #021615;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
`;

const IconContainer = styled.div`
  margin: auto;
  display: flex;
  width: 390px;
  height: 94px;
  cursor: pointer;
  background-image: url(${process.env
    .PUBLIC_URL}/assets/images/mypage/myEZ.svg);
  background-size: cover;
  margin-bottom: 20px;
  margin-top: 20px;
`;

const Line = styled.div`
  margin: auto;
  width: 100%;
  height: 20.178px;
  background-image: url(${process.env
    .PUBLIC_URL}/assets/images/mypage/line.svg);
  background-size: cover;
`;

const Section = styled.div`
  margin-top: 10px;
  padding: 16px;
  border-bottom: 1px solid #eee;
`;

const SectionTitle = styled.div`
  font-size: 14px;
  color: #888;
  margin-bottom: 8px;
  width: 100%;
  text-align: left;
`;

const Item = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 8px 0;
  font-size: 16px;
`;

const InsideIcon = styled.span`
  width: 7px;
  height: 13px;
  cursor: pointer;
  background-image: url(${process.env
    .PUBLIC_URL}/assets/images/mypage/inside.svg);
  background-size: cover;
`;

const Menu = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/main");
  };

  return (
    <Container>
      <Content>
        <Header>
          <div id="logout" onClick={handleLogout}></div>
          <div id="setting"></div>
        </Header>
        <GreetingContainer>
          <Greeting>안녕하세요.</Greeting>
          <SubText>김하나_마이페이지</SubText>
        </GreetingContainer>
        <IconContainer></IconContainer>
        <Line />
        <Section>
          <SectionTitle>근로계약</SectionTitle>
          <Item>
            <span>나의 근로계약서</span>
            <InsideIcon />
          </Item>
        </Section>

        <Section>
          <SectionTitle>신고(조회)</SectionTitle>
          <Item>
            <span>나의 신고내역</span>
            <InsideIcon />
          </Item>
        </Section>

        <Section>
          <SectionTitle>국내이체(조회)</SectionTitle>
          <Item>
            <span>보유계좌조회</span>
            <InsideIcon />
          </Item>
          <Item>
            <span>계좌이체(국내)</span>
            <InsideIcon />
          </Item>
          <Item>
            <span>계좌이체(외화)</span>
            <InsideIcon />
          </Item>
          <Item>
            <span>다른은행 이체내역조회</span>
            <InsideIcon />
          </Item>
        </Section>

        <Section>
          <SectionTitle>해외송금</SectionTitle>
          <Item>
            <span>해외유학생/체재자 송금</span>
            <InsideIcon />
          </Item>
          <Item>
            <span>Convera대학등록금송금</span>
            <InsideIcon />
          </Item>
          <Item>
            <span>해외송금 보내기</span>
            <InsideIcon />
          </Item>
          <Item>
            <span>송금진행상태 조회</span>
            <InsideIcon />
          </Item>
        </Section>
      </Content>
      <Nav />
    </Container>
  );
};

export default Menu;
