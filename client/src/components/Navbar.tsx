import { Search, ShoppingBag } from '@mui/icons-material';
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 10vh;
  background-color: black;
  color: white;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const LogoBox = styled.div`
  flex: 2;
  display: flex;
  justify-content: center;
`;

const LogoImg = styled.img`
  height: 8vh;
  border-radius: 50%;
  cursor: pointer;
`;

const MenuBox = styled.div`
  flex: 4;
  display: flex;
  justify-content: center;

  a {
    margin: 0 1rem;
    font-size: 1.5rem;
    cursor: pointer;

    &:hover {
      color: goldenrod;
    }
  }
`;

const MenuText = styled.span``;

const CartSearchBox = styled.div`
  flex: 2;
  display: flex;
  justify-content: center;

  svg {
    font-size: 2.2rem;
    margin: 0 1rem;
    cursor: pointer;

    &:hover {
      color: goldenrod;
    }
  }
`;

const Navbar = () => {
  return (
    <Container>
      <LogoBox>
        <Link to={'/'}>
          <LogoImg src='../images/logo.png' />
        </Link>
      </LogoBox>
      <MenuBox>
        <Link to={'/'}>
          <MenuText>Home</MenuText>
        </Link>
        <Link to={'/about'}>
          <MenuText>About</MenuText>
        </Link>
        <Link to={'/menu'}>
          <MenuText>Menu</MenuText>
        </Link>
        <Link to={'/products'}>
          <MenuText>Products</MenuText>
        </Link>
        <Link to={'/review'}>
          <MenuText>Review</MenuText>
        </Link>
        <Link to={'/contact'}>
          <MenuText>Contact</MenuText>
        </Link>
        <Link to={'/blogs'}>
          <MenuText>Blogs</MenuText>
        </Link>
      </MenuBox>
      <CartSearchBox>
        <Search />
        <ShoppingBag />
      </CartSearchBox>
    </Container>
  );
};

export default Navbar;
