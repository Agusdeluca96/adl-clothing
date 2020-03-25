import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import logo from '../../assets/images/logo.png'

import './Header.scss';

const Header = () => {

  // useEffect(() => {
  //   var header = document.getElementById('header');
  //   window.onscroll = function () {
  //     var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
  //     if (scrollTop > 0) {
  //       header.classList.add("scrolled");
  //     }
  //     else {
  //       header.classList.remove("scrolled");
  //     }
  //   };
  // })

  return (
    <div className="header" id="header">
      <Link className="logo-container" to="/">
        <span className="helper"></span>
        <img className="logo" alt="logo" src={logo} />
      </Link>
      <div className="options">
        <Link className="option" to="shop">SHOP</Link>
        <Link className="option" to="login">LOG IN</Link>
      </div>
    </div>
  )
}

export default Header;