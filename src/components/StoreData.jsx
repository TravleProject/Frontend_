/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
import { useState } from "react";
// libraries
import styled from "styled-components";

// img
import Info from "../assets/info.png";
import Pause from "../assets/pause-circle.png";
import SmartPhone from "../assets/smartphone-01.png";
import Clock from "../assets/clock.png";
import Edit from "../assets/edit-02.png";

const StoreData = ({ selectedData }) => {
  const [seemore, setSeemore] = useState(false);
  const [edit, setEdit] = useState(false);

  const handleExplanation = () => setSeemore(!seemore);

  const [Infos, setInfos] = useState();

  const editInfo = async () => {
    setEdit(!edit);
  };
  console.log(selectedData);
  return (
    <StoreConatiner seemore={seemore} edit={edit}>
      <div className="row">
        <Img src={SmartPhone} />
        <div className="phoneNumber">{/* {selectedData.storeNumber} */}</div>
      </div>
      <div className="row">
        <Img src={Clock} />
        <div className="phoneNumber">{/* {selectedData.openingHours} */}</div>
      </div>
      <div className="row">
        <Img src={Pause} />
        <div className="phoneNumber">{/* {selectedData.businessDay} */}</div>
      </div>
      <div className="column">
        <div className="rows">
          <Img src={Info} />
          <div className="phoneNumber">
            {/* {seemore === false
              ? `${selectedData}...`
              : `${selectedData.explanation}`} */}
          </div>
        </div>
        <span className="seemore" onClick={handleExplanation}>
          {seemore === false ? "더보기" : "간략히"}{" "}
        </span>
      </div>
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
  width: 22vw;
  overflow: "scroll";
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
`;
const Img = styled.img`
  width: 2.4vw;
  margin-right: 1rem;
`;
const Correctionimg = styled.img`
  width: 2vw;
`;
