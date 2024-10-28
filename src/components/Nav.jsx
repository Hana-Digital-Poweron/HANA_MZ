import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const NavContainer = styled.nav`
  background-color: var(--Gray-Mobileregular, #f6f7f9);
  padding: 16px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: relative;
  width: 100%;
  max-width: 390px;
  margin: 0 auto;
`;

const NavLink = styled(Link)`
  color: #007bff;
  text-decoration: none;
  font-weight: bold;

  &:hover {
    text-decoration: underline;
  }
`;

const Nav = () => {
  return (
    <NavContainer>
      <NavLink to="">홈</NavLink>
      <NavLink to="">소개</NavLink>
      <NavLink to="">서비스</NavLink>
      <NavLink to="">연락처</NavLink>
    </NavContainer>
  );
};

export default Nav;
