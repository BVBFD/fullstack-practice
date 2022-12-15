import { Star, StarHalf } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { ReviewType } from "../pages/Home";

const ReviewBox = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid white;
  padding: 2rem;
  height: 40vh;

  .reviewImgBox {
    flex: 1;
  }

  .detailBox {
    flex: 4;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin-top: 1.6rem;
    font-size: 1.2rem;

    .detailImgBox {
      width: 5rem;
      height: 5rem;
      margin: 1.4rem 0;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 50%;
      }
    }

    span {
      margin-bottom: 1rem;
    }
  }
`;

interface ReviewPropsType {
  r: ReviewType;
}

const Review = ({ r }: ReviewPropsType) => {
  const [detail, setDetail] = useState<string>();

  const makeArrayByNum = (n: number) => {
    const int = Math.floor(n);
    const decimal = n % int;
    let newArray = [0, 0, 0, 0, 0];
    try {
      for (let i = 0; i < int; i++) {
        newArray[i] = 1;
      }
      const firstZeroIndex = newArray.indexOf(0);
      newArray[firstZeroIndex] = decimal;
      return newArray;
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setDetail(r.content);
  }, [r]);

  return (
    <ReviewBox>
      <div className="reviewImgBox">
        <img src="images/quote-img.png" />
      </div>
      <div className="detailBox">
        <p dangerouslySetInnerHTML={{ __html: `${detail}` }}></p>
        <div className="detailImgBox">
          <img src="images/pic-1.png" alt="" />
        </div>
        <span>{r.name}</span>
        <div className="starBox">
          {makeArrayByNum(r.stars)?.map((star) => {
            if (star === 1) {
              return <Star />;
            } else {
              return <StarHalf />;
            }
          })}
        </div>
      </div>
    </ReviewBox>
  );
};

export default Review;
