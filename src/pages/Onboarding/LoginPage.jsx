import React, { useState } from "react";
import styled from "styled-components";
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
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  &::-webkit-scrollbar {
    display: none;
  }
`;

/* 인증서 이미지 */
const CertificateIcon = styled.div`
  width: 80px;
  height: 80px;
  background-color: #E6F4F1;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;

  &::before {
    content: "🔒";
    font-size: 36px;
    color: #0D9488;
  }
`;

/* 타이틀 텍스트 */
const Title = styled.h1`
  font-size: 20px;
  font-weight: bold;
  color: #333333;
  margin-bottom: 10px;
`;

/* 비밀번호 입력 텍스트 */
const PasswordPrompt = styled.p`
  font-size: 16px;
  color: #666666;
  margin-bottom: 20px;
`;

/* 비밀번호 입력창 */
const PasswordInput = styled.div`
  display: flex;
  justify-content: space-between;
  width: 200px;
  margin-bottom: 30px;
`;

/* 비밀번호 도트 */
const PasswordDot = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== "isFilled"
})`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${(props) => (props.isFilled ? "#0D9488" : "#CCCCCC")};
`;

/* 숫자 키패드 */
const Keypad = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  width: 200px;
`;

const Key = styled.button`
  width: 60px;
  height: 60px;
  font-size: 24px;
  color: #333333;
  border: none;
  background-color: #F2F2F2;
  border-radius: 50%;
  cursor: pointer;
  
  &:active {
    background-color: #E0E0E0;
  }
`;

/* 삭제 버튼 */
const DeleteButton = styled(Key)`
  color: #FF6B6B;
`;

const Login = () => {
  const navigate = useNavigate();
  const [password, setPassword] = useState("");

  const handleKeyPress = (value) => {
    if (password.length < 6) {
      const newPassword = password + value;
      setPassword(newPassword);
  
      // 비밀번호가 6자리가 되면 자동으로 다음 페이지로 이동
      if (newPassword.length === 6) {
        navigate("/main");
      }
    }
  };

  const handleDelete = () => {
    setPassword(password.slice(0, -1));
  };

  return (
    <Container>
      <Content>
        <Title>로그인</Title>
        <CertificateIcon />
        <PasswordPrompt>하나인증서 비밀번호 입력</PasswordPrompt>

        <PasswordInput>
          {Array.from({ length: 6 }).map((_, index) => (
            <PasswordDot key={index} isFilled={index < password.length} />
          ))}
        </PasswordInput>

        <Keypad>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, "", 0, "삭제"].map((value, index) =>
            value === "삭제" ? (
              <DeleteButton key={index} onClick={handleDelete}>
                {value}
              </DeleteButton>
            ) : (
              <Key key={index} onClick={() => handleKeyPress(value.toString())}>
                {value}
              </Key>
            )
          )}
        </Keypad>
      </Content>
      <Nav />
    </Container>
  );
};

export default Login;
