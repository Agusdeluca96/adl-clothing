import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../assets/images/logo.png'

import './Header.scss';

const Header = () => (
  <div className="header">
    <Link classname="logo-container" to="/">
      <span className="helper"></span>
      <img className="logo" alt="logo" src={logo} />
    </Link>
    <div className="options">
      <Link className="option" to="shop">SHOP</Link>
      <Link className="option" to="contact">CONTACT</Link>
    </div>
  </div>
)

export default Header;