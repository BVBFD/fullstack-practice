import React from 'react';

const Menubox = () => {
  return (
    <div className='box'>
      <img src='images/menu-1.png' alt='' />
      <span className='name'>Americano</span>
      <div className='priceBox'>
        <span>$4.99</span>
        <span>5.99</span>
      </div>
      <button className='menuBoxBtn'>Add To Cart</button>
    </div>
  );
};

export default Menubox;
