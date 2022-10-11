import { Favorite, ShoppingCart, Visibility } from '@mui/icons-material';
import React from 'react';
import styled from 'styled-components';
import { mobile } from '../utils/responsive';

const HomeSec = styled.section`
  width: 100%;
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
    textAlign: 'center',
    left: '0',
  })}
  ${mobile(960, {
    top: '35%',
    left: '0',
  })}
  ${mobile(768, {
    top: '25%',
    left: '0',
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
    flexDirection: 'column',
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
    width: '100%',
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
    width: '100%',
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
    width: '60%',
  })}

  .box {
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 1px solid white;
    border-radius: 1rem;

    /* products */
    &.productsBox {
      height: 95%;

      .productLogoBox {
        display: flex;
        margin-bottom: 1.4rem;

        .productLogo {
          border: 1px solid white;
          width: 2.8rem;
          height: 2.8rem;
          display: flex;
          justify-content: center;
          align-items: center;
          cursor: pointer;

          svg {
            transform: scale(1.2);
          }

          &:hover {
            color: goldenrod;
            background-color: white;
          }

          &:active {
            transform: scale(0.8);
          }
        }
      }
    }

    /* menu */
    img {
      width: 100%;
      border-top-left-radius: 1rem;
      border-top-right-radius: 1rem;
    }

    /* products */
    .productsImg {
      width: 50%;
      height: 45%;
    }

    /* menu */
    .name {
      font-size: 1.6rem;
      font-weight: bolder;
      margin: 1rem 0;
    }

    /* products */
    .productsName {
      font-size: 1.6rem;
      font-weight: bolder;
      margin: 1rem 0;
    }

    /* menu */
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

    /* products */
    .productsPriceBox {
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

    /* menu */
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

    /* products */
    .productsPriceBoxBtn {
      margin-top: 0.4rem;
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
      <Sec id='menu'>
        <Header>
          Our <HeaderSpan>Menu</HeaderSpan>
        </Header>
        <GridBox>
          <div className='box'>
            <img src='../images/menu-1.png' alt='' />
            <span className='name'>Americano</span>
            <div className='priceBox'>
              <span>$4.99</span>
              <span>5.99</span>
            </div>
            <button className='menuBoxBtn'>Add To Cart</button>
          </div>
          <div className='box'>
            <img src='../images/menu-1.png' alt='' />
            <span className='name'>Americano</span>
            <div className='priceBox'>
              <span>$4.99</span>
              <span>5.99</span>
            </div>
            <button className='menuBoxBtn'>Add To Cart</button>
          </div>
          <div className='box'>
            <img src='../images/menu-1.png' alt='' />
            <span className='name'>Americano</span>
            <div className='priceBox'>
              <span>$4.99</span>
              <span>5.99</span>
            </div>
            <button className='menuBoxBtn'>Add To Cart</button>
          </div>
          <div className='box'>
            <img src='../images/menu-1.png' alt='' />
            <span className='name'>Americano</span>
            <div className='priceBox'>
              <span>$4.99</span>
              <span>5.99</span>
            </div>
            <button className='menuBoxBtn'>Add To Cart</button>
          </div>
          <div className='box'>
            <img src='../images/menu-1.png' alt='' />
            <span className='name'>Americano</span>
            <div className='priceBox'>
              <span>$4.99</span>
              <span>5.99</span>
            </div>
            <button className='menuBoxBtn'>Add To Cart</button>
          </div>
          <div className='box'>
            <img src='../images/menu-1.png' alt='' />
            <span className='name'>Americano</span>
            <div className='priceBox'>
              <span>$4.99</span>
              <span>5.99</span>
            </div>
            <button className='menuBoxBtn'>Add To Cart</button>
          </div>
        </GridBox>
      </Sec>
      <Sec id='products'>
        <Header>
          Our <HeaderSpan>Products</HeaderSpan>
        </Header>
        <GridBox>
          <div className='box productsBox'>
            <div className='productLogoBox'>
              <div className='productLogo'>
                <ShoppingCart />
              </div>
              <div className='productLogo'>
                <Favorite />
              </div>
              <div className='productLogo'>
                <Visibility />
              </div>
            </div>
            <img className='productsImg' src='../images/product-2.png' alt='' />
            <span className='productsName'>Americano</span>
            <div className='productsPriceBox'>
              <span>$4.99</span>
              <span>5.99</span>
            </div>
            <button className='productsPriceBoxBtn'>Add To Cart</button>
          </div>

          <div className='box productsBox'>
            <div className='productLogoBox'>
              <div className='productLogo'>
                <ShoppingCart />
              </div>
              <div className='productLogo'>
                <Favorite />
              </div>
              <div className='productLogo'>
                <Visibility />
              </div>
            </div>
            <img className='productsImg' src='../images/product-2.png' alt='' />
            <span className='productsName'>Americano</span>
            <div className='productsPriceBox'>
              <span>$4.99</span>
              <span>5.99</span>
            </div>
            <button className='productsPriceBoxBtn'>Add To Cart</button>
          </div>

          <div className='box productsBox'>
            <div className='productLogoBox'>
              <div className='productLogo'>
                <ShoppingCart />
              </div>
              <div className='productLogo'>
                <Favorite />
              </div>
              <div className='productLogo'>
                <Visibility />
              </div>
            </div>
            <img className='productsImg' src='../images/product-2.png' alt='' />
            <span className='productsName'>Americano</span>
            <div className='productsPriceBox'>
              <span>$4.99</span>
              <span>5.99</span>
            </div>
            <button className='productsPriceBoxBtn'>Add To Cart</button>
          </div>

          <div className='box productsBox'>
            <div className='productLogoBox'>
              <div className='productLogo'>
                <ShoppingCart />
              </div>
              <div className='productLogo'>
                <Favorite />
              </div>
              <div className='productLogo'>
                <Visibility />
              </div>
            </div>
            <img className='productsImg' src='../images/product-2.png' alt='' />
            <span className='productsName'>Americano</span>
            <div className='productsPriceBox'>
              <span>$4.99</span>
              <span>5.99</span>
            </div>
            <button className='productsPriceBoxBtn'>Add To Cart</button>
          </div>

          <div className='box productsBox'>
            <div className='productLogoBox'>
              <div className='productLogo'>
                <ShoppingCart />
              </div>
              <div className='productLogo'>
                <Favorite />
              </div>
              <div className='productLogo'>
                <Visibility />
              </div>
            </div>
            <img className='productsImg' src='../images/product-2.png' alt='' />
            <span className='productsName'>Americano</span>
            <div className='productsPriceBox'>
              <span>$4.99</span>
              <span>5.99</span>
            </div>
            <button className='productsPriceBoxBtn'>Add To Cart</button>
          </div>

          <div className='box productsBox'>
            <div className='productLogoBox'>
              <div className='productLogo'>
                <ShoppingCart />
              </div>
              <div className='productLogo'>
                <Favorite />
              </div>
              <div className='productLogo'>
                <Visibility />
              </div>
            </div>
            <img className='productsImg' src='../images/product-2.png' alt='' />
            <span className='productsName'>Americano</span>
            <div className='productsPriceBox'>
              <span>$4.99</span>
              <span>5.99</span>
            </div>
            <button className='productsPriceBoxBtn'>Add To Cart</button>
          </div>
        </GridBox>
      </Sec>
    </>
  );
};

export default Home;
