import { ShoppingBag, Login, Logout } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { RootState } from "../redux/store";
import { logOut } from "../redux/userReducer";
import { mobile } from "../utils/responsive";

const Container = styled.div`
  width: 100%;
  height: 10vh;
  background: black;
  color: white;
  display: flex;
  flex-direction: row;
  align-items: center;
  position: fixed;
  top: 0;
  z-index: 999999;
`;

const LogoBox = styled.div`
  flex: 2;
  display: flex;
  justify-content: center;
  ${mobile(1280, {
    flex: "1.5",
  })}
`;

const LogoImg = styled.img`
  height: 8vh;
  border-radius: 50%;
  cursor: pointer;
  ${mobile(1280, {
    height: "8vh",
  })}
  ${mobile(960, {
    height: "6vh",
  })}
   ${mobile("SurfacePro", {
    height: "5.6vh",
  })}
`;

const MenuBox = styled.div`
  flex: 2;
  display: flex;
  justify-content: center;

  a {
    font-size: 1.5rem;
    cursor: pointer;
    ${mobile(1280, {
      fontSize: "1.4rem",
      fontWeight: "bolder",
    })}
    ${mobile(960, {
      fontSize: "1.45rem",
      fontWeight: "bolder",
    })}
    ${mobile(768, {
      fontSize: "1.3rem",
      fontWeight: "bolder",
    })}
    ${mobile("SurfacePro", {
      fontSize: "1.5rem",
      fontWeight: "bolder",
    })}
    ${mobile("IpadAir", {
      fontSize: "1.4rem",
      fontWeight: "bolder",
    })}
    ${mobile("IpadMini", {
      fontSize: "1.3rem",
      fontWeight: "bolder",
    })}

    &:hover {
      color: goldenrod;
    }
  }
`;

const MenuText = styled.span`
  margin: 0 1rem;
  ${mobile(1280, {
    margin: "0 1rem",
  })}
  ${mobile(1024, {
    margin: "0 0.8rem",
  })}
  ${mobile(960, {
    margin: "0 0.6rem",
  })}
`;

const CartSearchBox = styled.div`
  flex: 2;
  display: flex;
  justify-content: center;

  svg {
    font-size: 2.2rem;
    margin: 0 1rem;
    cursor: pointer;
    ${mobile(1280, {
      margin: "0 0.6rem",
    })}
    ${mobile(960, {
      fontSize: "1.8rem",
      margin: "0 0.6rem",
    })}
    ${mobile(768, {
      fontSize: "1.6rem",
      margin: "0 0.4rem",
    })}
    ${mobile("IpadAir", {
      fontSize: "1.6rem",
      margin: "0 0.3rem",
    })}
    &:hover {
      color: goldenrod;
    }
  }
`;

const Navbar = () => {
  const user = useSelector((state: RootState) => state.user.user);
  const dispatch = useDispatch();
  const address = `${window.location.protocol}//${window.location.host}/#`;

  const handleNavbarClick = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    let target = `${e.currentTarget.innerText}`;
    switch (target.toString()) {
      case `Home`:
        window.scroll(0, 0);
        return;
      case `About`:
        window.location.href = `${address}about`;
        return;
      case `Menu`:
        window.location.href = `${address}menu`;
        return;
      case `Products`:
        window.location.href = `${address}products`;
        return;
      case `Review`:
        window.location.href = `${address}review`;
        return;
      case `Contact`:
        window.location.href = `${address}contact`;
        return;
      case `Blogs`:
        window.location.href = `${address}blogs`;
        return;
    }
  };

  const onLogout = () => {
    dispatch(logOut());
  };

  return (
    <Container>
      <LogoBox>
        <Link to={"/"}>
          <LogoImg src="../images/logo.png" />
        </Link>
      </LogoBox>
      <MenuBox>
        <Link to="/#" onClick={handleNavbarClick}>
          <MenuText>Home</MenuText>
        </Link>
        <Link to="/#about" onClick={handleNavbarClick}>
          <MenuText>About</MenuText>
        </Link>
        <Link to="/#menu" onClick={handleNavbarClick}>
          <MenuText>Menu</MenuText>
        </Link>
        <Link to="/#products" onClick={handleNavbarClick}>
          <MenuText>Products</MenuText>
        </Link>
        <Link to="/#review" onClick={handleNavbarClick}>
          <MenuText>Review</MenuText>
        </Link>
        <Link to="/#contact" onClick={handleNavbarClick}>
          <MenuText>Contact</MenuText>
        </Link>
        <Link to="/#blogs" onClick={handleNavbarClick}>
          <MenuText>Blogs</MenuText>
        </Link>
      </MenuBox>
      <CartSearchBox>
        {user === null ? (
          <Link to="/login">
            <Login />
          </Link>
        ) : (
          <>
            <Link to="/cart">
              <ShoppingBag />
            </Link>
            <Logout onClick={onLogout} />
          </>
        )}
      </CartSearchBox>
    </Container>
  );
};

export default Navbar;
