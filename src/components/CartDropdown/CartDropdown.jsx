import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';

import CustomButtom from '../CustomButton';
import CartItem from '../CartItem';
import { selectCartItems } from '../../redux/cart/cart.selector';
import { toogleCart } from "../../redux/cart/cart.actions";

import './CartDropdown.scss';

const CartDropdown = ({ cartItems, history, dispatch }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {
        cartItems.length ?
          cartItems.map(cartItem => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
          :
          <span className="empty-message">Your cart is empty</span>
      }
    </div>
    <CustomButtom onClick={() => {
      history.push('/checkout');
      dispatch(toogleCart());
    }}>GO TO CHECKOUT</CustomButtom>
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
})

export default withRouter(connect(mapStateToProps)(CartDropdown));