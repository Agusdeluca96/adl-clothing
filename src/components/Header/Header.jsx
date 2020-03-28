import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { auth } from '../../utils/firebase';

import logo from '../../assets/images/logo.png';

import './Header.scss';

const Header = ({ currentUser }) => {

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
            <a href="/" className="option" onClick={() => auth.signOut()}>SIGN OUT</a>
            :
            <Link className="option" to="sign-in">SIGN IN</Link>
        }
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  currentUser: state.user.currentUser
})

export default connect(mapStateToProps)(Header);