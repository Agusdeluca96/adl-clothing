import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CheckoutItem from '../../components/CheckoutItem';
import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selector';

import './Checkout.scss';
import StripeCheckoutButton from '../../components/StripeCheckoutButton/StripeCheckoutButton';

const Checkout = ({ cartItems, cartTotal }) => (
  <div className="checkout">
    <div className="checkout-header">
      <div className="header-block">
        <span>Product</span>
      </div>
      <div className="header-block">
        <span>Description</span>
      </div>
      <div className="header-block">
        <span>Quantity</span>
      </div>
      <div className="header-block">
        <span>Price</span>
      </div>
      <div className="header-block">
        <span></span>
      </div>
    </div>
    {
      cartItems.map(cartItem =>
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      )
    }
    <div className="checkout-footer">
      <div className="test-info">
        * Please use the following test credit card for payments *
      <br />
      Number: 4242 4242 4242 4242 - Exp: 04/20 - CVV: 123
    </div>
      <div className="total">
        <span>Total: ${cartTotal}</span>
        <StripeCheckoutButton price={cartTotal} />
      </div>
    </div>
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  cartTotal: selectCartTotal
});

export default connect(mapStateToProps)(Checkout);