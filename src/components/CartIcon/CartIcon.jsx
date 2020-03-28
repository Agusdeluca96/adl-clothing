import React from 'react';
import { connect } from "react-redux";

import { toogleCart } from "../../redux/cart/cart.actions";

import { ReactComponent as ShoppingBagIcon } from '../../assets/icons/shopping-bag.svg';

import './CartIcon.scss';

const CartIcon = ({ toogleCart }) => (
  <div className="cart-icon" onClick={toogleCart}>
    <ShoppingBagIcon className="shopping-icon" />
    <span className="item-count">0</span>
  </div>
);

const mapDispatchToProps = dispatch => ({
  toogleCart: () => dispatch(toogleCart())
});

export default connect(null, mapDispatchToProps)(CartIcon);