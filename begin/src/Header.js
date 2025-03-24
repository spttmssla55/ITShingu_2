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
  padding: 20px 700px; /* 좌우 여백을 500px로 변경 */
  background-color: #ffffff;
  color: black;
  width: 100%;
  box-sizing: border-box;
  margin-bottom: 40px;

  @media (max-width: 1400px) { 
    padding: 20px 300px; /* 뷰포트가 좁아질 때 여백 줄이기 */
  }

  @media (max-width: 1200px) {
    padding: 20px 100px;
  }

  @media (max-width: 768px) {
    padding: 20px;
  }
`;


const TopRow = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

const Logo = styled.div`
  h1 {
    font-size: 2rem;
    margin: 0;
  }
`;

const SearchInput = styled.input`
  padding: 8px;
  border: 1px solid black;
  border-radius: 4px;
  margin-left: 20px;
  width: 200px;

  &:focus {
    outline: none;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
  }
`;

const Nav = styled.nav`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const NavList = styled.ul`
  list-style: none;
  display: flex;
  gap: 30px;
  margin: 0;
  padding: 0;
`;

const NavItem = styled.li``;

const NavLink = styled.a`
  color: black;
  text-decoration: none;
  font-size: 1.2rem;
  padding: 10px;

  &:hover {
    text-decoration: underline;
  }
`;

export default Header;
