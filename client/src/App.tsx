import React, { useEffect, useState } from "react";
import "./App.css";
import { darkTheme, lightTheme } from "./utils/Theme";
import styled, { ThemeProvider, createGlobalStyle } from "styled-components";
import { mobile } from "./utils/responsive";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Login from "./pages/Login";

// styled-components 전역 설정
// theme을 전달하려면 react-app-env.d.ts에서 관련 타입을 정의해야함
const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
    list-style: none;
    transition: all 0.2s linear;
    user-select: none;
    scroll-behavior: smooth;
  }

  a {
    text-decoration: none;
    list-style-type: none;
    color: inherit;
  }

  html {
    &::-webkit-scrollbar {
      width: 0.4rem;
    }

    &::-webkit-scrollbar-thumb {
      background: ${(props) => props.theme.scrollbarThumb};
    }

    &::-webkit-scrollbar-track {
      background: ${(props) => props.theme.scrollbarTrack};
    }

    background-color: black;
  }

  #root {
    overflow-x: hidden;
  }
`;

const Container = styled.div`
  width: 100vw;
`;

function App() {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Container>
        <GlobalStyle theme={darkMode ? darkTheme : lightTheme} />
        <Routes>
          <Route path={"/"}>
            <Route index element={<Home />} />
            <Route path={"cart"} element={<Cart />} />
            <Route path={"login"} element={<Login />} />
          </Route>
        </Routes>
      </Container>
    </ThemeProvider>
  );
}

export default App;
