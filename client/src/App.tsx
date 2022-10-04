import React, { useState, useEffect } from 'react';
import './App.css';
import { darkTheme, lightTheme } from './utils/Theme';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';
import { mobile } from './utils/responsive';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Video from './pages/Video';
import Navbar from './components/Navbar';
import { useSelector } from 'react-redux';
import { RootState } from './redux/store';
import Socket from 'socket.io-client';
import { useDispatch } from 'react-redux';
import { socketConnect } from './redux/socketReducer';

// styled-components 전역 설정
// theme을 전달하려면 react-app-env.d.ts에서 관련 타입을 정의해야함
const GlobalStyle = createGlobalStyle`
  body {
    &::-webkit-scrollbar {
      width: 0.4rem;
    }

    &::-webkit-scrollbar-thumb {
      background: ${(props) => props.theme.scrollbarThumb};
    }

    &::-webkit-scrollbar-track {
      background:  ${(props) => props.theme.scrollbarTrack};
    }
  }
`;

const Container = styled.div`
  display: flex;
  position: relative;
  top: 2rem;
  flex-direction: column;
  width: 100%;
  height: 700vh;
  overflow-x: hidden;
`;

const Wrapper = styled.div`
  padding: 1rem 2rem;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.bg};
  ${mobile(1300, {
    padding: '22px 22px',
    paddingLeft: '14px',
  })};
  ${mobile(800, { padding: '0' })};
  ${mobile(500, { padding: '0' })};
`;

export type PropType = {
  test: string;
};

function App() {
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const [prop, setProp] = useState<PropType>();
  const state = useSelector((state: RootState) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    setProp({ test: `${process.env.REACT_APP_TEST}` });
    // SocketIO 연결시 client socket 객체 생성
    // const socket = Socket(`server url`).connect();
    // dispatch(socketConnect(socket));
  }, []);

  console.log(state);

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Container>
        <GlobalStyle theme={darkMode ? darkTheme : lightTheme} />
        <Navbar />
        <Wrapper>
          <Routes>
            <Route path={'/'}>
              <Route index element={<Home />} />
              <Route path={'video'}>
                <Route path={':id'} element={<Video prop={prop} />} />
              </Route>
            </Route>
          </Routes>
        </Wrapper>
      </Container>
    </ThemeProvider>
  );
}

export default App;
