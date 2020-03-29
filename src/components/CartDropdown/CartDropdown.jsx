import React from 'react';
import { connect } from 'react-redux';

import CustomButtom from '../CustomButton';
import CartItem from '../CartItem';
import { selectCartItems } from '../../redux/cart/cart.selector';

import './CartDropdown.scss';

const CartDropdown = ({ cartItems }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItems.map(cartItem => (
        <CartItem key={cartItem.id} item={cartItem} />
      ))
      }
    </div>
    <CustomButtom>GO TO CHECKOUT</CustomButtom>
  </div>
);

const mapStateToProps = (state) => ({
  cartItems: selectCartItems(state)
})

export default connect(mapStateToProps)(CartDropdown);