/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable indent */
import { useState } from "react";
import { useNavigate } from "react-router-dom";

// libraries

// custom hooks
import useInput from "../hooks/useInput";

// component
import LoginComponent from "../components/LoginComponent";
import SignupComponent from "../components/SignupComponent";

// img
import styled from "styled-components";
import Plane from "../assets/plane.png";
import Cloud from "../assets/cloud.png";
import Cloud2 from "../assets/cloud2.png";
import Cloud4 from "../assets/cloud4.png";
import Wood from "../assets/wood.png";

const Login = () => {
  const navigation = useNavigate();

  const [isclicked, setIsClicked] = useState("1");
  const [userData, setUserData] = useInput({
    id: "",
    pwd: "",
  });

  const [signupUser, setSignupUser] = useInput({
    signupID: "",
    signupPWD: "",
    signupNickname: "",
    signupPhoneNumber: "",
  });

  const { id, pwd } = userData;
  const { signupID, signupPWD, signupNickname, signupPhoneNumber } = signupUser;

  const handleTab = (e) => {
    setIsClicked(e.target.name);
  };

  const goMain = async () => {
    navigation("/MapPage");
  };

  // KaKao인가코드 넘겨주는 부분
  // useEffect(() => {
  //   const code = new URL(window.location.href).searchParams.get("code");
  //   if (code === null) {
  //     console.log("retry KaKaoAuth");
  //   } else {
  //     axios
  //       .post(`/Signup`, { authcode: code })
  //       .then((response) => console.log(response.data))
  //       .catch((err) => console.log(err));
  //   }
  // }, []);

  return (
    <Container>
      <div className="Container">
        <div className="LogoColumn">
          <img className="Plane" src={Plane} />
          <div className="projectName">Travle Project</div>
        </div>
        <div className="imgContainer">
          <div>
            <img src={Cloud2} className="cloud2" />
            <img src={Cloud4} className="cloud4" />
            <img src={Cloud} className="cloud" />
          </div>
          <div>
            <img src={Wood} className="wood" />
            <img src={Wood} className="wood2" />
          </div>
          <div className="loginColumn">
            <div className="whiteBox">
              <LoginButton value={isclicked} name="1" onClick={handleTab}>
                로그인
              </LoginButton>
              <SignupButton value={isclicked} name="2" onClick={handleTab}>
                회원가입
              </SignupButton>
              {isclicked === "1" ? (
                <LoginComponent
                  id={id}
                  pwd={pwd}
                  setUserData={setUserData}
                  goMain={goMain}
                />
              ) : (
                <SignupComponent
                  signupID={signupID}
                  signupPWD={signupPWD}
                  signupNickname={signupNickname}
                  signupPhoneNumber={signupPhoneNumber}
                  setSignupUser={setSignupUser}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Login;

const Container = styled.div`
  background-color: #c5e4fe;
  .Container {
    width: 100vw;
    height: 100vh;
  }
  .LogoColumn {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
  }
  .Plane {
    width: 3rem;
  }
  .projectName {
    //추 후 폰트 적용
    display: inline;
    font-size: 1.5em;
    color: black;
    margin-right: 5rem;
  }
  //--------------------imgSections--------------------------------
  .imgContainer {
    margin: 1rem;
    position: relative;
    flex-direction: row;
    width: 50vw;
    height: 60vh;
  }
  .cloud {
    position: absolute;
    right: 1em;
    width: 15vw;
    height: 30vh;
    transform: scaleX(-1);
  }
  .cloud2 {
    position: absolute;
    bottom: 14rem;
    width: 20vw;
    height: 40vh;
  }
  .cloud4 {
    position: absolute;
    left: 10rem;
    bottom: 17em;
    width: 15vw;
    height: 30vh;
    opacity: 0.4;
  }
  .wood {
    position: absolute;
    top: 7em;
    left: -8em;
    width: 40vw;
    height: 75vh;
  }
  .wood2 {
    position: absolute;
    top: 4em;
    left: 15em;
    width: 25vw;
    height: 65vh;
  }
  //--------------------imgSections--------------------------------
  //--------------------logInSections--------------------------------
  .loginColumn {
    display: flex;
    justify-content: flex-end;
  }
  .whiteBox {
    position: absolute;
    left: 55vw;
    background-color: white;
    width: 40vw;
    height: 80vh;
    padding: 2em;
    border-radius: 1em;
  }
`;

const LoginButton = styled.button`
  background-color: white;
  color: ${(props) => (props.value === "1" ? "#c1c1c1" : "#000000")};
  border-radius: 0;
  border-bottom: 2px solid
    ${(props) => (props.value === "1" ? "#c1c1c1" : "#000000")};
  width: 17.7vw;
  font-size: 1.3em;
  &:focus {
    outline: none;
  }
`;

const SignupButton = styled.button`
  background-color: white;
  color: ${(props) => (props.value === "2" ? "#c1c1c1" : "#000000")};
  border-radius: 0;
  border-bottom: 2px solid
    ${(props) => (props.value === "2" ? "#c1c1c1" : "#000000")};
  width: 17.7vw;
  font-size: 1.3em;
  &:focus {
    outline: none;
  }
`;
