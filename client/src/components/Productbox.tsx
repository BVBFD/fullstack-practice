import React from 'react';
import { ShoppingCart, Favorite, Visibility } from '@mui/icons-material';

const ProductBox = () => {
  return (
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
  );
};

export default ProductBox;
