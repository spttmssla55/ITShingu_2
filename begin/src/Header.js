import React from 'react';
import styled from 'styled-components';

const Header = () => {
  return (
    <HeaderContainer>
      <TopRow>
        <Logo>
          <h1>여가</h1>
        </Logo>
        
        <SearchInput type="text" placeholder="검색..." />
        
        <LoginText>로그인</LoginText> {/* 로그인 텍스트 추가 */}
      </TopRow>
      <Nav>
        <NavList>
          <NavItem><NavLink href="/">홈</NavLink></NavItem>
          <NavItem><NavLink href="/city">City</NavLink></NavItem>
          <NavItem><NavLink href="/about">로그인</NavLink></NavItem>
          <NavItem><NavLink href="/contact">연락처</NavLink></NavItem>
        </NavList>
      </Nav>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 40px;
  background-color: #ffffff;
  color: black;
  width: 100%;
  box-sizing: border-box;
  margin-bottom: 40px;
  max-width: 100%;

  @media (max-width: 1400px) { 
    padding: 20px 20px;
  }

  @media (max-width: 1200px) {
    padding: 20px 20px;
  }

  @media (max-width: 768px) {
    padding: 15px 10px;
  }
`;

const TopRow = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between; /* 로고와 검색창, 로그인 텍스트를 양쪽 끝에 배치 */
  gap: 20px;
  max-width: 1200px;
`;

const Logo = styled.div`
  h1 {
    font-size: 2.5rem;
    margin: 0;
    font-weight: bold;
    color: #ff5722;
  }
`;

const SearchInput = styled.input`
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  width: 250px;
  font-size: 1rem;

  &:focus {
    outline: none;
    border-color: #ff5722;
    box-shadow: 0 0 5px rgba(255, 87, 34, 0.5);
  }

  @media (max-width: 768px) {
    width: 180px;
  }
`;

const LoginText = styled.span`
  font-size: 1.2rem;
  color: black;
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover {
    color: #ff5722; /* hover 시 색상 변경 */
  }

  @media (max-width: 768px) {
    font-size: 1rem; /* 작은 화면에서 폰트 크기 줄이기 */
  }
`;

const Nav = styled.nav`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const NavList = styled.ul`
  list-style: none;
  display: flex;
  gap: 40px;
  margin: 0;
  padding: 0;

  @media (max-width: 768px) {
    gap: 20px;
  }
`;

const NavItem = styled.li``;

const NavLink = styled.a`
  color: black;
  text-decoration: none;
  font-size: 1.2rem;
  padding: 10px;
  transition: color 0.3s ease;

  &:hover {
    text-decoration: underline;
    color: #ff5722;
  }
`;

export default Header;
