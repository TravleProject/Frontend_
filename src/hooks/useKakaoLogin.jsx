import { useState } from "react";

const useKakaoLogin = (initialState) => {
  const [data, setData] = useState(initialState);

  const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${initialState.rest_api_key}&redirect_uri=${initialState.redirect_uri}&response_type=code`;
  const handleLogin = () => {
    window.location.href = kakaoURL;
  };

  const code = new URL(window.location.href).searchParams.get("code");

  return [data, handleLogin];
};

export default useKakaoLogin;
