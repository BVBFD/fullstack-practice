import axios from "axios";

const BASE_URL = "http://localhost:8080/api";
const USER = JSON.parse(localStorage?.getItem("persist:root") as string)?.user;
// 단 쿠키세션을 쓰게된다면 이렇게 안 써줘도 토큰이 저장된 세션파일 고유 아이디가 자동적으로 전달되게됨.
const TOKEN = USER
  ? JSON.parse(USER).currentUser?.accessToken.toString()
  : null;
// 단 쿠키세션을 쓰게된다면 이렇게 안 써줘도 토큰이 저장된 세션파일 고유 아이디가 자동적으로 전달되게됨.
const HOST = window.location.host;

export const axiosPublicReq = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
  headers: {
    origin: `http://${HOST}`,
  },
});

export const axiosPrivateReq = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
  headers: {
    token: `Bearer ${TOKEN}`, // 토큰 쿠키만 사용할 시에, 헤더에 정보를 이렇게 기입해서 전달해야함.
    // 단 쿠키세션을 쓰게된다면 이렇게 안 써줘도 토큰이 저장된 세션파일 고유 아이디가 자동적으로 전달되게됨.
    origin: `http://${HOST}`,
  },
});
