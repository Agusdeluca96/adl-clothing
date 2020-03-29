import React from 'react';
import { connect } from 'react-redux';

import { toogleCart } from '../../redux/cart/cart.actions';
import { selectCartItemsCount } from '../../redux/cart/cart.selector';

import { ReactComponent as ShoppingBagIcon } from '../../assets/icons/shopping-bag.svg';

import './CartIcon.scss';

const CartIcon = ({ toogleCart, itemCount }) => (
  <div className="cart-icon" onClick={toogleCart}>
    <ShoppingBagIcon className="shopping-icon" />
    <span className="item-count">{itemCount}</span>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  toogleCart: () => dispatch(toogleCart())
});

const mapStateToProps = (state) => ({
  itemCount: selectCartItemsCount(state)
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);