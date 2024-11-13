import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Nav from "../../components/Nav";
import React, { useEffect, useState } from "react";

/* 전체 컨테이너 */
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  justify-content: center;
  background-color: #f0f4f8;
  overflow: hidden;
`;

/* 콘텐츠 컨테이너 */
const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  opacity: ${({ startAnimationStage }) => (startAnimationStage >= 0 ? 1 : 0)};
  transform: translateY(${({ startAnimationStage }) => (startAnimationStage >= 0 ? "0" : "20px")});
  transition: opacity 1s ease-in-out, transform 1s ease-in-out;
`;

/* 로고 및 부엉이 이미지 컨테이너 */
const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
  opacity: ${({ startAnimationStage }) => (startAnimationStage >= 0 ? 1 : 0)};
  transform: translateY(${({ startAnimationStage }) => (startAnimationStage >= 0 ? "0" : "20px")});
  transition: opacity 1s ease-in-out, transform 1s ease-in-out;
`;

/* 부엉이 이미지 */
const Owl = styled.img`
  width: 100px;
  height: 100px;
  margin-bottom: 10px;
  opacity: ${({ startAnimationStage }) => (startAnimationStage >= 1 ? 0 : 1)};
  transition: opacity 1s ease-in-out;
`;

/* 로고 이미지 */
const NameLogo = styled.img`
  width: 200px;
  height: auto;
  margin-top: 10px;
  transform: translateY(${({ startAnimationStage }) => (startAnimationStage === 1 ? "-40px" : "0")});
  transition: transform 1s ease-in-out;
`;

/* 서브타이틀 텍스트 */
const Subtitle = styled.p`
  font-size: 18px;
  font-weight: bold; /* 볼드체 적용 */
  color: #333; /* 더 진한 검정색 */
  opacity: 1; /* 서브타이틀은 항상 보이게 설정 */
  margin-top: 5px;
  transform: translateY(${({ startAnimationStage }) => (startAnimationStage === 1 ? "-40px" : "0")});
  transition: opacity 1s ease-in-out, transform 1s ease-in-out;
`;

/* 로그인 버튼 */
const LoginButton = styled.button`
  width: 16.8125rem;
  height: 3.0625rem;
  flex-shrink: 0;
  display: block;
  margin-top: 30px;
  padding: 10px 20px;
  font-size: 16px;
  font-weight: bold;
  border: none;
  border-radius: 2.03125rem;
  background: var(--Green-Button, #21B8BF);
  color: white;
  cursor: pointer;
  position: relative; /* 버튼 내에서 부엉이를 위치시키기 위해 상대 위치 설정 */
  opacity: ${({ startAnimationStage }) => (startAnimationStage === 1 ? 1 : 0)};
  transition: opacity 1s ease-in-out, transform 1s ease-in-out;
  transform: ${({ startAnimationStage }) => (startAnimationStage === 1 ? "scale(1)" : "scale(0.95)")};
`;

/* 부엉이 이미지 위치 설정 */
const OwlOnButton = styled.img`
  position: absolute; /* 버튼 내에서 절대 위치 설정 */
  top: -35px;  /* 버튼의 위쪽으로 부엉이를 위치 */
  right: 15px; /* 버튼의 오른쪽으로 부엉이를 위치 */
  width: 40px;
  height: 40px;
`;

const Onboarding = () => {
  const navigate = useNavigate();
  const [startAnimationStage, setStartAnimationStage] = useState(-1); // 초기 상태 -1로 설정

  useEffect(() => {
    // 0.5초 후 첫 번째 애니메이션 트리거
    const stage0Timer = setTimeout(() => {
      setStartAnimationStage(0); // 부엉이와 로고, 서브타이틀이 등장하도록 설정
    }, 500);

    // 2초 후 부엉이가 사라지고 로고와 서브타이틀이 위로 올라가며 로그인 버튼 등장
    const stage1Timer = setTimeout(() => {
      setStartAnimationStage(1); // 부엉이 사라짐과 로그인 버튼 등장
    }, 2000);

    return () => {
      clearTimeout(stage0Timer);
      clearTimeout(stage1Timer);
    };
  }, []);

  const handleLoginClick = () => {
    navigate("/login"); // 로그인 페이지로 이동하는 경로 설정
  };

  return (
    <Container>
      <Content startAnimationStage={startAnimationStage}>
        <LogoContainer startAnimationStage={startAnimationStage}>
          <Owl
            src={`${process.env.PUBLIC_URL}/assets/images/logos/owlLogo.svg`}
            alt="Owl Logo"
            startAnimationStage={startAnimationStage}
          />
          <NameLogo
            src={`${process.env.PUBLIC_URL}/assets/images/logos/nameLogo.svg`}
            alt="Hana MZ Logo"
            startAnimationStage={startAnimationStage}
          />
        </LogoContainer>
        <Subtitle startAnimationStage={startAnimationStage}>
          ‘하나’로 관리하는 유학 생활, 쉽고 스마트하게
        </Subtitle>
        <LoginButton
          startAnimationStage={startAnimationStage}
          onClick={handleLoginClick}
        >
          로그인 하기
          {/* 부엉이를 버튼 우측 상단에 배치 */}
          <OwlOnButton
            src={`${process.env.PUBLIC_URL}/assets/images/logos/owlLogo.svg`}
            alt="Owl Logo"
          />
        </LoginButton>
      </Content>
      <Nav />
    </Container>
  );
};

export default Onboarding;
