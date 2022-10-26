import React from 'react';
import CartProduct from './CartProduct';
import styled from 'styled-components';

const CartUl = styled.ul``;

const CartProducts = () => {
  return (
    <CartUl>
      <CartProduct />
      <CartProduct />
      <CartProduct />
      <CartProduct />
    </CartUl>
  );
};

export default CartProducts;
