import React from 'react';
import {
  ShoppingCart,
  Favorite,
  Visibility,
  Star,
  StarOutline,
} from '@mui/icons-material';
import styled from 'styled-components';

const Box = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid white;
  border-radius: 1rem;

  &.productsBox {
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

  .productsImg {
    width: 35%;
    height: 35%;
    margin: 1rem 0;
  }

  .productsName {
    font-size: 2rem;
    font-weight: bolder;
    margin: 1rem 0;
  }

  /* table */
  .tg {
    /* border-collapse: collapse; */
    border-color: white;
    border-spacing: 1;
    margin: 1rem 0;
    text-shadow: -2px 2px 0.6rem white;
  }

  .tg td:nth-child(1) {
    font-size: 1.2rem;
    font-weight: bolder;
    padding: 0.4rem 1rem;
  }

  .tg td {
    border: 1px solid white;
    text-align: center;
    padding: 0.4rem 0.8rem;
    font-size: 1.6rem;

    svg {
      color: gold;
      filter: drop-shadow(-1px 1px 0.1rem gold);
    }
  }
  /* table */

  .productsPriceBox {
    margin: 1rem 0;

    span:first-child {
      font-size: 1.8rem;
      margin-right: 0.8rem;
    }

    span:last-child {
      font-size: 1.4rem;
      text-decoration: line-through;
    }
  }

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
`;

const Productbox = () => {
  return (
    <Box className='productsBox'>
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
      <table className='tg'>
        <tbody>
          <tr>
            <td className='tg-td-data' style={{ color: 'lightcoral' }}>
              Flavor
            </td>
            <td className='tg-td-data'>
              <Star />
              <Star />
              <Star />
              <Star />
              <StarOutline />
            </td>
          </tr>
          <tr>
            <td className='tg-td-data' style={{ color: 'lightblue' }}>
              Acidity
            </td>
            <td className='tg-td-data'>
              <Star />
              <StarOutline />
              <StarOutline />
              <StarOutline />
              <StarOutline />
            </td>
          </tr>
          <tr>
            <td className='tg-td-data' style={{ color: 'lightGreen' }}>
              Body
            </td>
            <td className='tg-td-data'>
              <Star />
              <Star />
              <Star />
              <Star />
              <Star />
            </td>
          </tr>
          <tr>
            <td className='tg-td-data' style={{ color: 'orange' }}>
              Sweetness
            </td>
            <td className='tg-td-data'>
              <Star />
              <Star />
              <Star />
              <Star />
              <StarOutline />
            </td>
          </tr>
          <tr>
            <td className='tg-td-data' style={{ color: 'yellow' }}>
              Aftertaste
            </td>
            <td className='tg-td-data'>
              <Star />
              <Star />
              <Star />
              <Star />
              <Star />
            </td>
          </tr>
        </tbody>
      </table>
      <div className='productsPriceBox'>
        <span>$4.99</span>
        <span>5.99</span>
      </div>
      <button className='productsPriceBoxBtn'>Add To Cart</button>
    </Box>
  );
};

export default Productbox;
