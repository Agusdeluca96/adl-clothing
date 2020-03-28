import React from 'react';

import CustomButtom from '../CustomButton';

import './CartDropdown.scss';

const CartDropdown = () => (
  <div className="cart-dropdown">
    <div className="cart-items">
      <CustomButtom>GO TO CHECKOUT</CustomButtom>
    </div>
  </div>
);

export default CartDropdown;