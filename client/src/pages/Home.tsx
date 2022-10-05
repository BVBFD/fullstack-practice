import React from 'react';
import styled from 'styled-components';

const HomeSec = styled.section`
  width: 100%;
  height: 100vh;
`;

const Wrapper = styled.div`
  position: relative;
  &::after {
    content: '';
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
  top: 30vh;
  left: 10vh;
  background: transparent;
  display: flex;
  flex-direction: column;
  color: white;
  z-index: 999;
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
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
`;

const CommBox = styled.div`
  width: 50%;
  flex: 1;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;

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

const Home = () => {
  return (
    <>
      <HomeSec id='home'>
        <Wrapper>
          <Img src='../images/home-img.jpeg' />
          <TextBox>
            <TextSpan>Best Coffee</TextSpan>
            <TextSpan>Served For You</TextSpan>
            <TextP>We are not selling only coffee</TextP>
            <TextP>But we are also serving comforts for you</TextP>
          </TextBox>
        </Wrapper>
      </HomeSec>
      <Sec id='about'>
        <Header>
          About <HeaderSpan>Us</HeaderSpan>
        </Header>
        <ExplainBox>
          <ImgBox>
            <Img src='../images/about-img.jpeg' />
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
    </>
  );
};

export default Home;
