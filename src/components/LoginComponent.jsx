/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable no-unused-vars */
/* eslint-disable indent */
/* eslint-disable react/prop-types */
import { useState } from "react";

// custom hooks
import useKakaoLogin from "../hooks/useKakaoLogin";

// libraries
import styled from "styled-components";

// img
import Login from "../assets/log-out-1.png";
import Showpwd from "../assets/eye-open.png";
import Lock from "../assets/lock.png";
import KakaoButton from "../assets/social_kakao_wide.png";
import Hidepwd from "../assets/eye-hidden.png";

const LoginComponent = ({ goMain, setUserData, id, pwd }) => {
  const [isShown, setIsShown] = useState(false);

  const showPWD = () => {
    setIsShown(!isShown);
  };

  const [kakao, Logins] = useKakaoLogin({
    rest_api_key: import.meta.env.VITE_REST_API,
    redirect_uri: import.meta.env.VITE_REDIRECT_URL,
  });

  return (
    <Container>
      <div className="account">Login to Account</div>
      <div className="row">
        <Logoutimg src={Login} />
        <IDInput
          name="id"
          value={id}
          onChange={setUserData}
          placeholder="ID  /  Email "
        />
      </div>
      <div className="row">
        <Lockimg src={Lock} />
        <PWDInput
          name="pwd"
          value={pwd}
          onChange={setUserData}
          placeholder="*********"
          type={isShown === false ? "password" : "text"}
        />
        <Showpwdimg
          onClick={showPWD}
          src={isShown === false ? Showpwd : Hidepwd}
        />
      </div>
      <div className="rows">
        <div className="pwd">Forgot Password?</div>
        <LoginButton onClick={goMain}>Login</LoginButton>
      </div>
      <div className="login">다른 계정으로 로그인하기</div>
      <SocialButton onClick={Logins} src={KakaoButton} />
    </Container>
  );
};

export default LoginComponent;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  .account {
    margin-top: 2em;
    width: 96%;
    font-size: 1.5em;
    color: black;
  }
  .row {
    display: flex;
    flex-direction: row;
    margin-top: 2em;
    margin-right: 2em;
    width: 90%;
    align-items: center;
    border: 2px solid gray;
  }
  .rows {
    display: flex;
    flex-direction: row;
    margin-top: 2em;
    margin-right: 2em;
    width: 90%;
    align-items: center;
    justify-content: flex-end;
  }
  .pwd {
    color: black;
  }
  .login {
    margin-top: 1em;
    color: black;
    font-weight: 600;
  }
`;

const Logoutimg = styled.img`
  margin-left: 0.8vw;
  width: 2vw;
  height: 4vh;
`;

const IDInput = styled.input`
  padding: 1rem;
  width: 90%;
  height: 5vh;
  border: none;
  background-color: white;
  color: black;
  &:focus {
    outline: none;
  }
  font-size: 1em;
`;
const PWDInput = styled.input`
  padding: 1rem;
  padding-left: 1.5rem;
  width: 90%;
  height: 5vh;
  border: none;
  background-color: white;
  color: black;
  &:focus {
    outline: none;
  }
  font-size: 1em;
`;

const Lockimg = styled.img`
  margin-left: 1vw;
  width: 1.5vw;
  height: 4vh;
`;

const Showpwdimg = styled.img`
  margin-right: 1vw;
  width: 1.8vw;
  height: 3vh;
`;

const LoginButton = styled.button`
  margin-left: 1em;
  background-color: #e6e6e6;
  color: black;
  font-size: 1.2em;
`;

const SocialButton = styled.img`
  margin: 1em;
  width: 25vw;
  height: 8vh;
`;
