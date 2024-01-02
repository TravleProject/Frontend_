/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/prop-types */

import { useState } from "react";
// libraries
import styled from "styled-components";

import "../font.css";
// img
import Info from "../assets/info.png";
import Pause from "../assets/pause-circle.png";
import SmartPhone from "../assets/smartphone-01.png";
import Edit from "../assets/edit-02.png";
import House from "../assets/Accommodation-icon.png";

const StoreData = ({ selectedData }) => {
  // console.log("StoreData: ",selectedData);
  const [seemore, setSeemore] = useState(false);
  const [edit, setEdit] = useState(false);

  const handleExplanation = () => setSeemore(!seemore);

  const editInfo = () => {
    setEdit(!edit);
  };

  return (
    <StoreConatiner seemore={seemore} edit={edit}>
      <div className="row">
        <Img src={SmartPhone} />
        <div className="phoneNumber">010-1234-5678</div>
      </div>
      <div className="row">
        <Img src={House} />
        <div className="phoneNumber">{selectedData.address}</div>
      </div>
      <div className="row">
        <Img src={Pause} />
        <div className="phoneNumber">
          {selectedData.detail_info.slice(0, 20) + "..."}
        </div>
      </div>
      <div className="rows">
        <Img src={Info} />
        <div className="out_line">
          {seemore === false
            ? `${selectedData.out_line.slice(0, 20)}...`
            : `${selectedData.out_line}`}
        </div>
      </div>
      <span className="seemore" onClick={handleExplanation}>
        {seemore === false ? "더보기" : "간략히"}{" "}
      </span>
      <div className="correctionRow" onClick={editInfo}>
        <Correctionimg src={Edit} />
        <div className="correction">정보 수정 제안하기&gt;</div>
      </div>
    </StoreConatiner>
  );
};

export default StoreData;

const StoreConatiner = styled.div`
  color: black;
  width: 21vw;
  .row {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 1rem;
    margin-bottom: 0.5rem;
  }
  .rows {
    display: flex;
    flex-direction: row;
    align-items: ${(props) =>
      props.seemore === false ? "center" : "flex-start"};
    margin-top: 1rem;
    margin-bottom: 0.5rem;
  }
  .phoneNumber {
    font-size: 1.2rem;
    font-weight: 500;
    font-family: "GmarketSans-Medium";
  }
  .seemore {
    color: gray;
    font-size: 1rem;
    font-weight: 540;
    border-bottom: 2px solid gray;
    margin-left: 3.3rem;
  }
  .correctionRow {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 1rem;
    border-bottom: 2px solid #0385ff;
    width: 12vw;

    transition: ${(props) => (props.edit === true ? ".3s ease-out;" : null)};
  }
  .correction {
    color: #0385ff;
  }
  .out_line {
    font-size: 1rem;
    font-family: "GmarketSans-Medium";
  }
`;
const Img = styled.img`
  width: 2.4vw;
  margin-right: 1rem;
`;
const Correctionimg = styled.img`
  width: 2vw;
`;
