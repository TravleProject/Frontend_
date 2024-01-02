/* eslint-disable react/prop-types */
import React from "react";

// libraries
import styled from "styled-components";

// img
import Avatarimg from "../assets/Avatar_etc.png";
import Edits from "../assets/edit-02.png";

const Review = ({ review }) => {
  console.log("review: ", review);
  return (
    // 리뷰 작성
    <ReviewContainer>
      {review.map((item, i) => (
        <div className="row" key={i}>
          <div className="column">
            <div className="tinyRow">
              <AvatarImg src={Avatarimg} />
              <div className="id">{item.id}</div>
            </div>
            <div className="contents">{item.contents}</div>
          </div>
          <FoodFicture src={item.img} />
        </div>
      ))}
      <div className="writeReviewRow">
        <ReviewButton src={Edits} />
      </div>
    </ReviewContainer>
  );
};

export default Review;

const ReviewContainer = styled.div`
  color: black;
  width: 22vw;

  .row {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 1rem;
    margin-bottom: 0.5rem;
    padding-right: 0.2rem;
    height: 15vh;

    border-bottom: 2px solid gray;
    box-shadow: 0 2px 3px 2px rgba(0, 0, 0, 0.2);
    border-radius: 1rem;
  }
  .tinyRow {
    width: 10vw;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
  }
  .column {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0.5rem;
  }
  .id {
    font-size: 0.9rem;
    font-weight: 600;
  }
  .contents {
    width: 10vw;
    margin-top: 0.5rem;
    margin-bottom: 0.4rem;
    font-size: 0.6rem;
    font-weight: 400;
  }
  .writeReviewRow {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
  }
  .writeReview {
    display: flex;
    align-items: center;
    width: 7.4vw;
    border-bottom: 3px solid #5ea6e1;
    position: relative;
  }
`;

const AvatarImg = styled.img`
  width: 3vw;
  transform: scaleX(180deg);
`;

const ReviewButton = styled.img`
  position: absolute;
  right: 2rem;
  bottom: 1rem;
  width: 2vw;
  margin-left: 0.5rem;
  background-color: #0385ff;
  border-radius: 0.5rem;
`;

const FoodFicture = styled.img`
  width: 15vw;
  height: 10vh;
  border-radius: 1rem;
`;
