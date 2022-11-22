import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Menuboxs from "../components/Menuboxs";
import Productboxs from "../components/Productboxs";
import Reviews from "../components/Reviews";
import { mobile } from "../utils/responsive";

const HomeSec = styled.section`
  width: 100%;
`;

const Wrapper = styled.div`
  position: relative;
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(lightcoral, #000000);
    mix-blend-mode: overlay;
  }
`;

const Img = styled.img``;

const TextBox = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 40%;
  left: 5%;
  background: transparent;
  display: flex;
  flex-direction: column;
  color: white;
  z-index: 999;
  ${mobile(1280, {
    textAlign: "center",
    left: "0",
  })}
  ${mobile(960, {
    top: "35%",
    left: "0",
  })}
  ${mobile(768, {
    top: "25%",
    left: "0",
  })}
`;

const TextSpan = styled.span`
  text-transform: uppercase;
  font-size: 7rem;
  font-weight: bolder;
`;

const TextP = styled.p`
  text-transform: capitalize;
  font-size: 1.6rem;
  font-weight: medium;
  letter-spacing: 0.3rem;
  margin: 0.4rem 0;
  position: relative;
  top: 1rem;
`;

const Sec = styled.section`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 8rem;
`;

const Header = styled.header`
  text-transform: capitalize;
  color: whitesmoke;
  font-size: 5rem;
  font-weight: bolder;
  text-align: center;
  height: 10%;
  padding-bottom: 1rem;
`;

const HeaderSpan = styled.span`
  color: goldenrod;
`;

const ExplainBox = styled.div`
  display: flex;
  flex-direction: row;
  color: white;
  background-color: #13131a;
  padding: 4rem;
  gap: 2rem;
  margin: 3rem 6rem;

  ${mobile(1024, {
    flexDirection: "column",
  })}
`;

const ImgBox = styled.div`
  width: 50%;
  flex: 1;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 1rem;
  }

  ${mobile(1024, {
    width: "100%",
  })}
`;

const CommBox = styled.div`
  width: 50%;
  flex: 1;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;

  ${mobile(1024, {
    width: "100%",
  })}

  span,
  button {
    display: inline-block;
    margin-bottom: 1.5rem;
  }

  span {
    font-size: 1.8rem;
    font-weight: bolder;
    text-transform: uppercase;
    margin-bottom: 2rem;
  }

  p {
    font-size: 1.4rem;
    display: inline-block;
    margin-bottom: 0.4rem;
  }

  button {
    width: fit-content;
    padding: 0.8rem 1.2rem;
    margin-top: 2rem;
    font-size: 1.2rem;
    cursor: pointer;
    background-color: goldenrod;
    color: white;
    border-radius: 0.4rem;
    position: relative;
  }

  button:hover {
    color: goldenrod;
    background-color: white;
  }

  button:active {
    transform: scale(0.8);
  }
`;

const GridBox = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
  width: 80%;
  gap: 2rem;
  margin-top: 2rem;
  ${mobile(1024, {
    width: "80%",
  })}

  &.productBoxs {
    grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
    ${mobile(1280, {
      gridTemplateColumns: "repeat(auto-fit, minmax(20rem, 1fr))",
    })}
    ${mobile(960, {
      gridTemplateColumns: "repeat(auto-fit, minmax(15rem, 1fr))",
    })}
  }
`;

const Row = styled.div`
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80vw;
  height: 30vh;
  overflow-x: hidden;
  animation: hueRotate 1s linear infinite;

  i {
    transform: scale(8);
    margin-right: 10rem;
    cursor: pointer;
    text-shadow: 1px 1px 1px gray;
    opacity: 0.8;
  }

  i:hover {
    transition: 0.2s;
    opacity: 1;
    color: #0f0;
  }

  .firstRow {
    display: flex;
    animation: move1 40s linear infinite;
    animation-delay: -40s;
  }

  .secondRow {
    display: flex;
    animation: move2 40s linear infinite;
    animation-delay: -20s;
  }

  @keyframes move1 {
    0% {
      transform: translateX(150%);
    }
    100% {
      transform: translateX(-50%);
    }
  }

  @keyframes move2 {
    0% {
      transform: translateX(50%);
    }
    100% {
      transform: translateX(-150%);
    }
  }

  @keyframes hueRotate {
    0% {
      filter: hue-rotate(0deg);
    }
    100% {
      filter: hue-rotate(360deg);
    }
  }
`;

const Home = () => {
  const [test, setTest] = useState<string>();

  useEffect(() => {
    setTest("test");
  }, []);

  return (
    <>
      <HomeSec id="home">
        <Wrapper>
          <Img src="../images/home-img.jpeg" />
          <TextBox>
            <TextSpan>Best Coffee</TextSpan>
            <TextSpan>Served For You</TextSpan>
            <TextP>We are not selling only coffee</TextP>
            <TextP>But we are also serving comforts for you</TextP>
          </TextBox>
        </Wrapper>
      </HomeSec>
      <Sec id="about">
        <Header>
          About <HeaderSpan>Us</HeaderSpan>
        </Header>
        <ExplainBox>
          <ImgBox>
            <Img src="../images/about-img.jpeg" />
          </ImgBox>
          <CommBox>
            <span>What is the special things in our coffee</span>
            <p>We use the best coffee beans produced in various countries.</p>
            <p>
              The best beans scattered from Vietnam, Ethiopia, Vietam and
              Guatemala.
            </p>
            <p>
              We always use the best beans which is produced in Coffee Belt.
            </p>
            <p>And, We have very antic furnitures and interior design.</p>
            <p>
              You can feel comfortable with the best coffee at the coffee house.
            </p>
            <button>Learn More</button>
          </CommBox>
        </ExplainBox>
      </Sec>
      <Sec id="menu">
        <Header>
          Our <HeaderSpan>Menu</HeaderSpan>
        </Header>
        <GridBox>
          <Menuboxs />
        </GridBox>
      </Sec>
      <Sec id="products">
        <Header>
          Our <HeaderSpan>Products</HeaderSpan>
        </Header>
        <GridBox className="productBoxs">
          <Productboxs />
        </GridBox>
      </Sec>
      <Sec id="review" style={{ paddingBottom: "8rem" }}>
        <Header>
          Our <HeaderSpan>Review</HeaderSpan>
        </Header>
        <Reviews />
      </Sec>
      <Sec id="logo">
        <Header>
          We are <HeaderSpan>Supported By</HeaderSpan>
        </Header>
        <Row className="row">
          <div className="firstRow">
            <i className="fab fa-amazon"></i>
            <i className="fab fa-angular"></i>
            <i className="fas fa-archway"></i>
            <i className="fab fa-apple"></i>
            <i className="fas fa-audio-description"></i>
            <i className="fas fa-atlas"></i>
            <i className="fab fa-bluetooth"></i>
            <i className="fas fa-briefcase"></i>
            <i className="fab fa-cc-amazon-pay"></i>
            <i className="fab fa-cc-amex"></i>
            <i className="fab fa-cc-discover"></i>
            <i className="fab fa-cc-jcb"></i>
            <i className="fab fa-cc-mastercard"></i>
            <i className="fab fa-cc-paypal"></i>
            <i className="fab fa-cc-stripe"></i>
            <i className="fab fa-cc-visa"></i>
            <i className="fab fa-phoenix-framework"></i>
            <i className="fab fa-studiovinari"></i>
            <i className="fab fa-suse"></i>
            <i className="fab fa-wizards-of-the-coast"></i>
          </div>
          <div className="secondRow">
            <i className="fab fa-amazon"></i>
            <i className="fab fa-angular"></i>
            <i className="fas fa-archway"></i>
            <i className="fab fa-apple"></i>
            <i className="fas fa-audio-description"></i>
            <i className="fas fa-atlas"></i>
            <i className="fab fa-bluetooth"></i>
            <i className="fas fa-briefcase"></i>
            <i className="fab fa-cc-amazon-pay"></i>
            <i className="fab fa-cc-amex"></i>
            <i className="fab fa-cc-discover"></i>
            <i className="fab fa-cc-jcb"></i>
            <i className="fab fa-cc-mastercard"></i>
            <i className="fab fa-cc-paypal"></i>
            <i className="fab fa-cc-stripe"></i>
            <i className="fab fa-cc-visa"></i>
            <i className="fab fa-phoenix-framework"></i>
            <i className="fab fa-studiovinari"></i>
            <i className="fab fa-suse"></i>
            <i className="fab fa-wizards-of-the-coast"></i>
          </div>
        </Row>
      </Sec>
    </>
  );
};

export default Home;
