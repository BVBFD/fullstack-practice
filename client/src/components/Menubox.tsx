import React from 'react';
import styled from 'styled-components';

const Box = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid white;
  border-radius: 1rem;

  img {
    width: 100%;
    border-top-left-radius: 1rem;
    border-top-right-radius: 1rem;
  }

  .name {
    font-size: 1.6rem;
    font-weight: bolder;
    margin: 1rem 0;
  }

  .priceBox {
    margin-bottom: 1rem;

    span:first-child {
      font-size: 1.6rem;
      margin-right: 0.8rem;
    }

    span:last-child {
      font-size: 1.2rem;
      text-decoration: line-through;
    }
  }

  .menuBoxBtn {
    margin-top: 1rem;
    margin-bottom: 2rem;
    padding: 0.5rem 1.3rem;
    color: white;
    background-color: goldenrod;
    cursor: pointer;

    &:hover {
      color: goldenrod;
      background-color: white;
    }

    &:active {
      transform: scale(0.8);
    }
  }
`;

const Menubox = () => {
  return (
    <Box>
      <img src='images/menu-1.png' alt='' />
      <span className='name'>Americano</span>
      <div className='priceBox'>
        <span>$4.99</span>
        <span>5.99</span>
      </div>
      <button className='menuBoxBtn'>Add To Cart</button>
    </Box>
  );
};

export default Menubox;
