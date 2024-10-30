import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const NavContainer = styled.nav`
  border-radius: 12px 12px 0px 0px;
  box-shadow: 0px 0px 20px 4px rgba(0, 0, 0, 0.10);
  height: 77px;
  padding: 18px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: fixed;
  bottom: 0;
  width: 100%;
  max-width: 390px;
  margin: 0 auto;
`;

const NavLink = styled(Link)`
  color: ${(props) => props.theme.color.Font3};
  text-align: center;
  font-size: 0.6875rem;
  font-style: normal;
  font-weight: 500;
  line-height: 150%;
  text-decoration: none;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const NavIcon = styled.img`
  width: ${(props) => (props.home ? '33.135px' : '25px')};
  height: ${(props) => (props.home ? '33px' : '25px')};
  margin-bottom: 4px;
`;

const NavText = styled.div`
  ${(props) => props.home && 'margin-right: 7px;'}
`;

const Nav = () => {
  return (
    <NavContainer>
      <NavLink to="">
        <NavIcon src={`${process.env.PUBLIC_URL}/assets/images/nav/home.svg`} alt="Home" home />
        <NavText home>홈</NavText>
      </NavLink>
      <NavLink to="">
        <NavIcon src={`${process.env.PUBLIC_URL}/assets/images/nav/check.svg`} alt="Inquiry" />
        <div>조회</div>
      </NavLink>
      <NavLink to="">
        <NavIcon src={`${process.env.PUBLIC_URL}/assets/images/nav/transfer.svg`} alt="Transfer" />
        <div>이체</div>
      </NavLink>
      <NavLink to="">
        <NavIcon src={`${process.env.PUBLIC_URL}/assets/images/nav/sendMoney.svg`} alt="Remittance" />
        <div>송금</div>
      </NavLink>
      <NavLink to="">
        <NavIcon src={`${process.env.PUBLIC_URL}/assets/images/nav/menu.svg`} alt="Menu" />
        <div>메뉴</div>
      </NavLink>
    </NavContainer>
  );
};

export default Nav;
