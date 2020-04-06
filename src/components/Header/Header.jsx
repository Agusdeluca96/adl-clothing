import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { auth } from '../../utils/firebase';
import { selectCurrentUser } from '../../redux/user/user.selector';
import { selectCartHidden } from '../../redux/cart/cart.selector';

import logo from '../../assets/images/logo.png';

import CartIcon from '../CartIcon';
import CartDropdown from '../CartDropdown';

import { HeaderContainer, LogoContainer, LogoHelper, Logo, OptionsContainer, OptionLink } from './Header.styles';

const Header = ({ currentUser, cartHidden }) => {

  return (
    <HeaderContainer>
      <LogoContainer to="/">
        <LogoHelper />
        <Logo alt="logo" src={logo} />
      </LogoContainer>
      <OptionsContainer>
        <OptionLink to="/shop">SHOP</OptionLink>
        {
          currentUser ?
            <OptionLink as="div" onClick={() => auth.signOut()}>
              SIGN OUT
            </OptionLink>
            :
            <OptionLink to="/sign-in">SIGN IN</OptionLink>
        }
        <CartIcon />
      </OptionsContainer>
      {
        cartHidden ? null : <CartDropdown />
      }
    </HeaderContainer>
  )
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  cartHidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);