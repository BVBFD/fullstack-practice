import React, { useEffect, useState } from "react";
import { CancelPresentation } from "@mui/icons-material";
import styled from "styled-components";
import { CartType } from "./CartProducts";
import { axiosPublicReq } from "../axiosReqMethods";

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

interface CartProductPropsType {
  c: CartType;
}

const CartProduct = ({ c }: CartProductPropsType) => {
  const [img, setImg] = useState<string>();

  useEffect(() => {
    const getImg = async () => {
      try {
        const res = await axiosPublicReq(`product/${c.productId}`);
        setImg(res.data.image);
      } catch (error) {
        console.log(error);
      }
    };

    getImg();
  }, []);

  return (
    <CartLi>
      <ImgBox>
        <Img src={`${img}`} />
      </ImgBox>
      <Detail>
        <p>
          Product : <span>{c.title}</span>
        </p>
        <p>
          ID : <span>{c.productId}</span>
        </p>
        <p>
          Quantity : <span>{c.quantity}</span>
        </p>
        <p>
          Price : <span>${c.price}</span>
        </p>
      </Detail>
      <CancelPresentation />
    </CartLi>
  );
};

export default CartProduct;
