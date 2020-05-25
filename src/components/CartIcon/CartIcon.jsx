import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { toggleCart } from '../../redux/cart/cart.actions';
import { selectCartItemsCount } from '../../redux/cart/cart.selector';

import { ReactComponent as ShoppingBagIcon } from '../../assets/icons/shopping-bag.svg';

import './CartIcon.scss';

export const CartIcon = ({ toggleCart, itemCount }) => (
  <div className="cart-icon" onClick={toggleCart}>
    <ShoppingBagIcon className="shopping-icon" />
    <span className="item-count">{itemCount}</span>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  toggleCart: () => dispatch(toggleCart())
});

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);