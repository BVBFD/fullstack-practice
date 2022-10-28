import { CancelPresentation } from '@mui/icons-material';
import React from 'react';
import styled from 'styled-components';

const CartLi = styled.li`
  display: flex;
  border: 1px solid white;
  margin: 2rem 0;

  svg {
    color: white;
    margin-top: 0.2rem;
    margin-right: 0.2rem;
    cursor: pointer;
    transform: scale(1.2);
  }

  svg:hover {
    color: goldenrod;
  }

  svg:active {
    transform: scale(1);
  }
`;

const ImgBox = styled.div`
  flex: 1.2;
  height: 12rem;
  border-right: 1px solid white;
  padding: 0.8rem;
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const Detail = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: white;
  padding: 1.4rem;

  p {
    margin-bottom: 1.2rem;
    font-weight: bolder;

    span {
      font-weight: 500;
    }
  }
`;

const CartProduct = () => {
  return (
    <CartLi>
      <ImgBox>
        <Img src='images/product-1.png' />
      </ImgBox>
      <Detail>
        <p>
          Product : <span>Coffee Beans</span>
        </p>
        <p>
          ID : <span>123456</span>
        </p>
        <p>
          Quantity : <span>1</span>
        </p>
        <p>
          Price : <span>$200</span>
        </p>
      </Detail>
      <CancelPresentation />
    </CartLi>
  );
};

export default CartProduct;
