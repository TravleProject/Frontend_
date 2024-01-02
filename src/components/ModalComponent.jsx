/* eslint-disable react/prop-types */
import React, { useRef, useEffect, useState } from "react";

// libraries
import styled from "styled-components";

// components
import StoreData from "./StoreData";
import ReviewPage from "./Review";

const ModalComponent = ({ selectedData, isvisible, setIsvisible, review }) => {
  // console.log("ModalComponent: ",selectedData);
  const [isclicked, setIsClicked] = useState("1");
  const handleTab = (e) => {
    setIsClicked(e.target.name);
  };
  const containerRef = useRef(null);
  useEffect(() => {
    const container = containerRef.current;
    if (container.scrollHeight > container.clientHeight) {
      container.style.overflow = "scroll";
    } else {
      container.style.overflow = "hidden";
    }
  }, [selectedData]);

  return (
    <div ref={containerRef}>
      <Container>
        <div className="headerRow">
          <CloseButton onClick={() => setIsvisible(!isvisible)}>
            &lt;
          </CloseButton>
          {selectedData.title.length > 7 ? (
            <div className="longStoreName">{selectedData.title}</div>
          ) : (
            <div className="storeName">{selectedData.title}</div>
          )}
        </div>
        <SaveButton>저장</SaveButton>
        <div className="tabRow">
          <Info value={isclicked} name="1" onClick={handleTab}>
            가게정보
          </Info>
          <Review value={isclicked} name="2" onClick={handleTab}>
            리뷰
          </Review>
        </div>
        <div className="body">
          {isclicked === "1" ? (
            <StoreData selectedData={selectedData} />
          ) : (
            <ReviewPage review={review} />
          )}
        </div>
        <div className="bottomRow"></div>
      </Container>
    </div>
  );
};

export default ModalComponent;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 1rem;
  right: 3vw;
  width: 26vw;
  height: 90vh;
  background-color: white;
  border-radius: 1rem;
  overflow: scroll;

  .headerRow {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 1rem;
    margin-bottom: 0.5rem;
  }
  .storeName {
    text-align: center;
    width: 20vw;
    color: black;
    font-weight: 700;
    font-size: 1.5rem;
    margin-bottom: 0.9rem;
  }
  .longStoreName {
    text-align: center;
    width: 22vw;
    color: black;
    font-weight: 700;
    font-size: 1.2rem;
    margin-bottom: 0.9rem;
  }
  .storeItem {
    text-align: center;
    width: 20vw;
    color: gray;
    font-size: 1rem;
    font-weight: 550;
    margin-bottom: 0.5rem;
  }
  .longStoreItem {
    text-align: center;
    width: 22vw;
    color: gray;
    font-size: 0.8rem;
    font-weight: 550;
    margin-bottom: 0.5rem;
  }
  .tabRow {
    width: 21vw;
    margin-left: 1rem;
    margin-right: 1rem;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
  .body {
    display: flex;
    overflow: auto;
    justify-content: center;
    margin-top: 0.5rem;
    width: 30vw;
    height: 80vh;
  }
  .bottomRow {
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
`;

const CloseButton = styled.div`
  display: flex;
  top: 0.9rem;
  left: 0;
  align-items: center;
  color: black;
  width: 22vw;
  height: 6vh;
  margin-bottom: 2rem;
  margin-right: 0.5rem;
  font-size: 2rem;
`;
const Info = styled.button`
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

const Review = styled.button`
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

const SaveButton = styled.button`
  width: 22vw;
  margin-bottom: 1rem;
  background-color: #0385ff;
  border: none;
  &:focus {
    outline: none;
  }
`;
