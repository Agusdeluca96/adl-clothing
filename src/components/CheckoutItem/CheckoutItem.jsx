import React from 'react';
import { connect } from 'react-redux';

import { addItem, removeItem, clearItem } from "../../redux/cart/cart.actions";

import './CheckoutItem.scss';

export const CheckoutItem = ({ cartItem, addItem, removeItem, clearItem }) => (
  <div className="checkout-item">
    <div className="image-container">
      <img alt="item" src={cartItem.imageUrl} />
    </div>
    <span className="name">{cartItem.name}</span>
    <span className="quantity">
      <div
        className="quantity-arrow"
        onClick={() => removeItem(cartItem)}
      >&#10094;</div>
      <div className="quantity-value">{cartItem.quantity}</div>
      <div
        className="quantity-arrow"
        onClick={() => addItem(cartItem)}
      >&#10095;</div>
    </span>
    <span className="price">${cartItem.price}</span>
    <span
      className="remove-button"
      onClick={() => clearItem(cartItem)}
    >&#10007;</span>
  </div>
);


const mapDispatchToProps = (dispatch) => ({
  addItem: item => dispatch(addItem(item)),
  removeItem: item => dispatch(removeItem(item)),
  clearItem: item => dispatch(clearItem(item))
});

export default connect(null, mapDispatchToProps)(CheckoutItem);