import React, { useState, useCallback, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { axiosPublicReq } from "../axiosReqMethods";
import { loginFailure, loginStart, loginSuccess } from "../redux/userReducer";

const LoginSec = styled.section`
  width: 100%;
  margin-top: 10vh;
  height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow-y: hidden;
  background: linear-gradient(
    to bottom,
    rgba(1, 1, 1, 0.6),
    rgba(1, 1, 1, 0.3)
  );

  video {
    position: absolute;
    width: 100%;
    z-index: -1;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Header = styled.header`
  text-transform: capitalize;
  font-size: 5rem;
  font-weight: bolder;
  text-align: center;
  color: whitesmoke;

  span {
    color: goldenrod;
  }
`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 15%;
`;

const LoginPwdInput = styled.input`
  width: 130%;
  padding: 0 1rem;
  height: 5vh;
  margin: 5% 0;
`;

const LoginBtn = styled.button`
  margin-top: 10%;
  width: fit-content;
  padding: 0.8rem 1.2rem;
  font-size: 1.2rem;
  cursor: pointer;
  background-color: goldenrod;
  color: white;
  border: none;
  border-radius: 0.4rem;

  &:hover {
    background-color: white;
    color: goldenrod;
  }

  &:active {
    transform: scale(0.8);
  }
`;

const Login = () => {
  const [email, setEmail] = useState<string>();
  const [pwd, setPwd] = useState<string>();

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const loginBtn = async (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    dispatch(loginStart());
    try {
      const res = await axiosPublicReq.post("/auth/login", {
        email: `${email}`,
        password: `${pwd}`,
      });
      dispatch(loginSuccess(res.data.data));
      navigate("/");
    } catch (error) {
      dispatch(loginFailure());
    }
  };

  return (
    <LoginSec>
      <video src="/videos/Coffee-low.mp4" autoPlay muted loop></video>
      <Wrapper>
        <Header>
          Log <span>In</span>
        </Header>
        <LoginForm>
          <LoginPwdInput
            placeholder="Input your Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <LoginPwdInput
            placeholder="Input your Password"
            onChange={(e) => setPwd(e.target.value)}
            type="password"
          />
          <LoginBtn onClick={loginBtn}>Log-In</LoginBtn>
        </LoginForm>
      </Wrapper>
    </LoginSec>
  );
};

export default Login;
