import { Star, StarHalf, StarOutline } from '@mui/icons-material';
import React from 'react';
import styled from 'styled-components';

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

const Review = () => {
  return (
    <ReviewBox>
      <div className='reviewImgBox'>
        <img src='images/quote-img.png' />
      </div>
      <div className='detailBox'>
        <p>
          Best Coffee Beans and Good Flavors, Better Tasty. <br /> You can take
          a good time after having done with your works in here.
        </p>
        <div className='detailImgBox'>
          <img src='images/pic-1.png' alt='' />
        </div>
        <span>Black Rose</span>
        <div className='starBox'>
          <Star />
          <Star />
          <Star />
          <Star />
          <StarHalf />
        </div>
      </div>
    </ReviewBox>
  );
};

export default Review;
