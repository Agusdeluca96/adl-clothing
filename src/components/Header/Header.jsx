import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { auth } from '../../utils/firebase';
import CartIcon from '../CartIcon';
import CartDropdown from '../CartDropdown';
import { selectCurrentUser } from '../../redux/user/user.selector';
import { selectCartHidden } from '../../redux/cart/cart.selector';

import logo from '../../assets/images/logo.png';

import './Header.scss';

const Header = ({ currentUser, cartHidden }) => {

  return (
    <div className="header" id="header">
      <Link className="logo-container" to="/">
        <span className="helper"></span>
        <img className="logo" alt="logo" src={logo} />
      </Link>
      <div className="options">
        <Link className="option" to="shop">SHOP</Link>
        {
          currentUser ?
            <a href="/" className="option" onClick={() => auth.signOut()}>
              SIGN OUT
            </a>
            :
            <Link className="option" to="sign-in">SIGN IN</Link>
        }
        <CartIcon />
      </div>
      {
        cartHidden ? null : <CartDropdown />
      }

    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  cartHidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);