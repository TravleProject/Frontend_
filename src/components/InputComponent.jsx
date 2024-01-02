/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
import { useState } from "react";
import { useNavigate } from "react-router-dom";

// libraries
import styled from "styled-components";

// img
import Searchimg from "../assets/search.png";

const InputComponent = ({ checkbox, handleCheckbox }) => {
  const navigation = useNavigate();
  const [search, setSearch] = useState("");
  // console.log("inputComponent: ", checkbox)
  const handleInput = (e) => {
    setSearch(e.target.value);
  };

  return (
    <DrawerContainer>
      <div className="inputRow">
        <Searchinput value={search} onChange={handleInput} />
        <Search src={Searchimg} />
      </div>
      <fieldset className="checkboxRow">
        <Checkbox
          type="checkbox"
          name="attraction"
          value="관광지"
          onClick={handleCheckbox}
        />
        <span style={{ color: "black" }}>관광지</span>
        <Checkbox
          type="checkbox"
          name="accommodation"
          value="숙박"
          onClick={handleCheckbox}
        />
        <span style={{ color: "black" }}>숙박</span>
        <Checkbox
          type="checkbox"
          name="theme"
          value="여행지"
          onClick={handleCheckbox}
        />
        <span style={{ color: "black" }}>여행지</span>
        <Checkbox
          type="checkbox"
          name="food"
          value="음식점"
          onClick={handleCheckbox}
        />
        <span style={{ color: "black" }}>음식점</span>
        <Checkbox
          type="checkbox"
          name="festival"
          value="축제공연행사"
          onClick={handleCheckbox}
        />
        <span style={{ color: "black" }}>축제공연행사</span>
        <Checkbox
          type="checkbox"
          name="leports"
          value="레포츠"
          onClick={handleCheckbox}
        />
        <span style={{ color: "black" }}>레포츠</span>
      </fieldset>
    </DrawerContainer>
  );
};

export default InputComponent;

const DrawerContainer = styled.div`
  position: absolute;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 2px solid gray;
  top: 0;
  width: 35vw;
  height: 20vh;
  margin-top: 1rem;
  margin-left: 1rem;

  .inputRow {
    display: flex;
    align-items: center;
    background-color: white;
    margin-top: 1rem;
    border-radius: 1rem;
  }
  .checkboxRow {
    display: flex;
    align-items: center;
    background-color: white;
    margin-top: 0.5rem;
  }
`;

const Searchinput = styled.input`
  width: 30vw;
  height: 6vh;
  font-size: 1.5em;
  padding: 1rem;
  border-radius: 1rem 0 0 1rem;
  border: 1px solid #5ea6e1;
  color: black;
  background-color: white;
  &:focus {
    outline: none;
  }
`;
const Search = styled.img`
  width: 3vw;
  height: 6vh;
  padding: 0.3rem;
  background-color: #5ea6e1;
  border-radius: 0 1rem 1rem 0;
`;

const Checkbox = styled.input`
  width: 1vw;
  height: 2vh;
  margin-right: 0.2rem;
  margin-left: 0.2rem;
`;
