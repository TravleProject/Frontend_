/* eslint-disable indent */
import React, { useState } from "react";

// libraries
import styled from "styled-components";

// img
import Plane from "../assets/plane.png";
import Cloud from "../assets/cloud1.png";
import Cloud2 from "../assets/cloud2.png";
import Cloud4 from "../assets/cloud4.png";
import Airplain from "../assets/airplain.png";
import HotAirBalloon from "../assets/hotAirBalloon.png";
import HotAirBalloon2 from "../assets/hotAirBalloon2.png";
import Searchimg from "../assets/search.png";

// constants
import { list } from "../constants/CategoriList";
import { useNavigate } from "react-router-dom";

const MainPage = () => {
  const navigation = useNavigate();
  const [search, setSearch] = useState("");

  const handleInput = (e) => {
    setSearch(e.target.value);
  };

  const goMap = () => navigation("/MapPage");
  return (
    <Container>
      <div className="Container">
        <div className="LogoColumn">
          <img className="Plane" src={Plane} />
          <div className="projectName">Travle Project</div>
        </div>
        <div className="imgContainer">
          <Airplainimg src={Airplain} />
          <Cloudimg4 src={Cloud4} />
          <Cloudimg2 src={Cloud2} />
          <Cloudimg src={Cloud} />
          <HotAirBalloonimg src={HotAirBalloon} />
          <Cloudimg3 src={Cloud2} />
          <Cloudimg5 src={Cloud4} />
          <HotAirBalloonimg2 src={HotAirBalloon2} />
        </div>
        <div className="inputContainer">
          <Selecter className="selecter" name="Category" id="카테고리">
            <option className="categoryText" value="travle">
              관광지
            </option>
            <option className="categoryText" value="accommodation">
              숙박
            </option>
            <option className="categoryText" value="travle_coures">
              여행지
            </option>
            <option className="categoryText" value="food_store">
              음식점
            </option>
            <option className="categoryText" value="festival">
              축제공연행사
            </option>
            <option className="categoryText" value="leports">
              레포츠
            </option>
          </Selecter>
          <div className="inputRow">
            <Searchinput value={search} onChange={handleInput} />
            <Search onClick={goMap} src={Searchimg} />
          </div>
        </div>
        <div className="categoriContainer">
          {list.map((item, i) => (
            <div key={i} className="categoriBox">
              <Listimg src={item.img} />
              <div className="categoriName">{item.category_id}</div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default MainPage;

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
  .imgContainer {
    margin: 1rem;
    position: relative;
    flex-direction: row;
    width: 100vw;
    height: 30vh;
  }
  .inputContainer {
    display: flex;
    width: 100vw;
    height: 30vh;
    align-items: center;
    justify-content: center;
  }
  .inputRow {
    display: flex;
    align-items: center;
    background-color: white;
    margin-left: 3rem;
    border-radius: 1rem;
  }
  .categoriContainer {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    border-radius: 1rem;
    height: 25vh;
    width: 100vw;
  }
  .categoriBox {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 13vw;
    height: 25vh;
    border-radius: 1rem;
    background-color: white;
    color: black;
    font-size: 1.3rem;
    margin-left: 1rem;
  }
  .categoriName {
    font-weight: 700;
  }
  .categoryText {
    font-size: 0.7em;
  }
`;

const Airplainimg = styled.img`
  position: absolute;
  top: -2rem;
  left: 3rem;
  width: 8vw;
  height: 14vh;
  transform: rotate(-20deg);
`;
const Cloudimg4 = styled.img`
  position: absolute;
  top: -3rem;
  left: 8rem;
  width: 22vw;
  height: 44vh;
`;
const Cloudimg2 = styled.img`
  position: absolute;
  top: -1rem;
  left: 17rem;
  width: 15vw;
  height: 30vh;
  opacity: 0.5;
  transform: scaleX(-1);
`;

const Cloudimg = styled.img`
  position: absolute;
  top: -5rem;
  left: 35rem;
  width: 20vw;
  height: 40vh;
  opacity: 0.5;
`;

const HotAirBalloonimg = styled.img`
  position: absolute;
  top: 6rem;
  left: 48rem;
  width: 10vw;
  height: 20vh;
`;

const Cloudimg3 = styled.img`
  position: absolute;
  top: -5rem;
  right: 15rem;
  width: 25vw;
  height: 50vh;
`;
const Cloudimg5 = styled.img`
  position: absolute;
  top: -5rem;
  right: 22rem;
  width: 20vw;
  height: 40vh;
  opacity: 0.5;
  transform: scaleX(-1);
`;

const HotAirBalloonimg2 = styled.img`
  position: absolute;
  top: 10rem;
  right: 4rem;
  width: 10vw;
  height: 20vh;
`;

const Selecter = styled.select`
  width: 11vw;
  height: 10vh;
  text-align: center;
  border-radius: 1rem;
  font-size: 1.5em;
  border: none;
  color: black;
  background-color: white;
  &:focus {
    outline: none;
  }
`;

const Searchinput = styled.input`
  width: 40vw;
  height: 10vh;
  font-size: 1.5em;
  padding: 1rem;
  border-radius: 1rem;
  border: none;
  color: black;
  background-color: white;
  &:focus {
    outline: none;
  }
`;

const Search = styled.img`
  width: 3vw;
  height: 6vh;
  margin-right: 0.5rem;
`;

const Listimg = styled.img`
  width: 8vw;
  height: 15vh;
  margin-bottom: 1vw;
`;
