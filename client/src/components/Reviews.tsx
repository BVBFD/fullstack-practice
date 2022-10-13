import React, { useEffect, useLayoutEffect, useState } from 'react';
import Review from './Review';
import styled from 'styled-components';
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { mobile } from '../utils/responsive';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';

const ReviewsBox = styled.div`
  display: flex;
  margin-top: 1.6rem;

  .swiper {
    width: 85vw;
    padding: 2rem;
  }

  .swiper-slide {
    text-align: center;
    background-color: black;

    /* Center slide text vertically */
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
  }

  .swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .swiper-pagination {
    width: 5rem;
    height: 5rem;
  }

  .swiper-button-disabled {
    display: none;
  }

  .swiper-button-prev,
  .swiper-button-next {
    background-color: white;
    color: black;
    padding: 2rem;
    border-radius: 50%;
    opacity: 0.6;
    transform: scale(0.8);

    &:active {
      opacity: 1;
      transform: scale(0.6);
    }
  }
`;

const Reviews = () => {
  const [initBodyWid, setInitBodyWid] = useState<number>();
  const body = document.querySelector('body');

  window.addEventListener('resize', () => {
    setInitBodyWid(body?.getBoundingClientRect().width);
  });

  return (
    <ReviewsBox>
      <Swiper
        modules={[Navigation]}
        spaceBetween={30}
        slidesPerView={initBodyWid! < 1024 ? 1 : 3}
        navigation={true}
      >
        <SwiperSlide>
          <Review />
        </SwiperSlide>
        <SwiperSlide>
          <Review />
        </SwiperSlide>
        <SwiperSlide>
          <Review />
        </SwiperSlide>
        <SwiperSlide>
          <Review />
        </SwiperSlide>
        <SwiperSlide>
          <Review />
        </SwiperSlide>
        <SwiperSlide>
          <Review />
        </SwiperSlide>
        <SwiperSlide>
          <Review />
        </SwiperSlide>
        <SwiperSlide>
          <Review />
        </SwiperSlide>
        <SwiperSlide>
          <Review />
        </SwiperSlide>
        <SwiperSlide>
          <Review />
        </SwiperSlide>
        <SwiperSlide>
          <Review />
        </SwiperSlide>
        <SwiperSlide>
          <Review />
        </SwiperSlide>
        <SwiperSlide>
          <Review />
        </SwiperSlide>
        <SwiperSlide>
          <Review />
        </SwiperSlide>
        <SwiperSlide>
          <Review />
        </SwiperSlide>
        <SwiperSlide>
          <Review />
        </SwiperSlide>
      </Swiper>
    </ReviewsBox>
  );
};

export default Reviews;
