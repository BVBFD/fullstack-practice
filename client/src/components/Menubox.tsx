import React from "react";
import styled from "styled-components";
import { MenuType } from "../pages/Home";

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

interface MenuboxPropsType {
  m: MenuType;
}

const Menubox = ({ m }: MenuboxPropsType) => {
  return (
    <Box>
      <img src="images/menu-1.png" alt="" />
      <span className="name">{m.title}</span>
      <div className="priceBox">
        <span>${m.price - m.discount}</span>
        <span>{m.price}</span>
      </div>
      <button className="menuBoxBtn">Add To Cart</button>
    </Box>
  );
};

export default Menubox;
