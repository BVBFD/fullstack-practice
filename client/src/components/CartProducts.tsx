import React from "react";
import CartProduct from "./CartProduct";
import styled from "styled-components";

const CartUl = styled.ul``;

export interface CartType {
  _id: string;
  title: string;
  quantity: number;
  price: number;
  productId: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

interface CartProductsPropsType {
  cart?: Array<CartType>;
}

const CartProducts = ({ cart }: CartProductsPropsType) => {
  return (
    <CartUl>
      {cart?.map((c) => (
        <CartProduct c={c} />
      ))}
    </CartUl>
  );
};

export default CartProducts;
