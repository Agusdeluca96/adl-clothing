import React from 'react';
import { connect } from 'react-redux';

import { removeItem } from "../../redux/cart/cart.actions";

import './CheckoutItem.scss';

const CheckoutItem = ({ cartItem, removeItem }) => (
  <div className="checkout-item">
    <div className="image-container">
      <img alt="item" src={cartItem.imageUrl} />
    </div>
    <span className="name">{cartItem.name}</span>
    <span className="quantity">{cartItem.quantity}</span>
    <span className="price">${cartItem.price}</span>
    <span
      className="remove-button"
      onClick={() => removeItem(cartItem)}
    >&#10007;</span>
  </div>
);


const mapDispatchToProps = (dispatch) => ({
  removeItem: item => dispatch(removeItem(item))
});

export default connect(null, mapDispatchToProps)(CheckoutItem);