import {
  Email,
  Facebook,
  Instagram,
  Phone,
  Pinterest,
  Room,
  Twitter,
} from "@mui/icons-material";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { axiosPublicReq } from "../axiosReqMethods";
import CartProducts, { CartType } from "../components/CartProducts";
import { mobile } from "../utils/responsive";

const CartSec = styled.section`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 8rem 5% 0 5%;
`;

const Header = styled.header`
  text-transform: capitalize;
  color: whitesmoke;
  font-size: 3rem;
  font-weight: bolder;
  text-align: center;
  height: 5vh;
  padding-bottom: 1rem;
  ${mobile(1024, {
    marginBottom: "1rem",
  })}
`;

const HeaderSpan = styled.span`
  color: goldenrod;
`;

const BtnBox = styled.div`
  width: 100%;
  ${mobile(1024, {
    display: "none",
  })}

  button {
    position: relative;
    bottom: 3vh;
    margin-left: 3%;
    padding: 0.8rem 1rem;
    background-color: goldenrod;
    color: whitesmoke;
    font-weight: bold;
    text-transform: uppercase;
    font-size: 0.8rem;
    cursor: pointer;

    &:hover {
      color: goldenrod;
      background-color: whitesmoke;
    }

    &:active {
      transform: scale(0.8);
    }
  }
`;

const Article = styled.article`
  width: 100%;
  height: 55vh;
  display: flex;
  ${mobile(1024, {
    flexDirection: "column",
    height: "90vh",
  })}
`;

const CartListBox = styled.div`
  flex: 2;
  overflow-y: scroll;
  border: 1px solid white;
  padding: 0 2rem;

  &::-webkit-scrollbar {
    width: 0.4rem;
  }

  &::-webkit-scrollbar-thumb {
    background-color: white;
  }

  &::-webkit-scrollbar-track {
    background-color: black;
    border: 1px solid white;
  }
`;

const PayBox = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 0 0 1rem;
  padding: 0 1rem;
  border: 1px solid white;
  color: white;
  ${mobile(1024, {
    margin: 0,
  })}

  h1 {
    text-align: center;
    margin-bottom: 2rem;
  }

  div {
    display: flex;
    width: 100%;
    justify-content: space-between;
    margin-bottom: 2rem;
    font-size: 1.2rem;

    p {
      font-weight: bolder;
    }

    span {
      font-weight: lighter;
    }
  }

  button {
    padding: 0.6rem 1rem;
    background-color: goldenrod;
    color: whitesmoke;
    margin-top: 1rem;
    cursor: pointer;

    &:hover {
      color: goldenrod;
      background-color: whitesmoke;
    }

    &:active {
      transform: scale(0.8);
    }
  }
`;

const Footer = styled.footer`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  ${mobile(768, {
    flexDirection: "column",
    justifyContent: "center",
    textAlign: "center",
  })}
`;

const FooterLeft = styled.div`
  width: 35%;
  ${mobile(768, {
    width: "100%",
    border: "1px solid white",
    padding: "1rem",
  })}
  p {
    margin-bottom: 1rem;
  }
`;

const FooterRight = styled.div`
  width: 35%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  ${mobile(768, {
    width: "100%",
    alignItems: "center",
    border: "1px solid white",
  })}

  div {
    display: flex;
    margin-bottom: 0.6rem;
    ${mobile(768, {
      marginBottom: "1.2rem",
    })}
  }

  svg {
    ${mobile(768, {
      marginRight: "0.4rem",
    })}
  }
`;

const Cart = () => {
  const [cart, setCart] = useState<Array<CartType>>();
  const [sum, setSum] = useState<number>();
  const [shipping, setShipping] = useState<number>();
  const [discount, setDiscount] = useState<number>();

  useEffect(() => {
    const getCart = async () => {
      try {
        const res = await axiosPublicReq("/cart");
        setCart(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    getCart();
  }, []);

  useEffect(() => {
    let sum = 0;
    cart?.forEach((c) => {
      console.log(c);
      sum += c.price;
    });
    setSum(sum);
  }, [cart]);

  useEffect(() => {
    setShipping(6);
    setDiscount(6);
  }, []);

  return (
    <CartSec>
      <Header>
        Your <HeaderSpan>Cart</HeaderSpan>
      </Header>
      <BtnBox>
        <Link to="/">
          <button>continue shopping</button>
        </Link>
      </BtnBox>
      <Article>
        <CartListBox>
          <CartProducts cart={cart} />
        </CartListBox>
        <PayBox>
          <h1>Order</h1>
          <div>
            <p>SubTotal</p>
            <span>${sum}</span>
          </div>
          <div>
            <p>Estimated Shipping</p>
            <span>${shipping}</span>
          </div>
          <div>
            <p>Shipping Discount</p>
            <span>-${discount}</span>
          </div>
          <div>
            <p>Total</p>
            <span>${sum! - (shipping! + discount!)}</span>
          </div>
          <button>Pay Now</button>
        </PayBox>
      </Article>
      <Footer>
        <FooterLeft>
          <h1>LEO</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
            facilis ut eius necessitatibus rerum veniam. Id eaque, ratione
            tempore esse quam eligendi quaerat dolores doloremque nostrum
            praesentium, necessitatibus reiciendis deleniti.
          </p>
          <div className="logoBox">
            <Facebook />
            <Instagram />
            <Twitter />
            <Pinterest />
          </div>
        </FooterLeft>
        <FooterRight>
          <h1>Contact</h1>
          <div>
            <Room /> <p>Geong-Ju Apt, South Korea</p>
          </div>
          <div>
            <Phone /> <p>+82-10-9141-6073</p>
          </div>
          <div>
            <Email /> <p>lsevina126@gmail.com</p>
          </div>
          <div>
            <img src="images/payment.png" alt="" />
          </div>
        </FooterRight>
      </Footer>
    </CartSec>
  );
};

export default Cart;
