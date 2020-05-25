import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCurrentUser } from '../../redux/user/user.selector';
import { selectCartHidden } from '../../redux/cart/cart.selector';
import { signOutStart } from '../../redux/user/user.actions'

import logo from '../../assets/images/logo-white.png';

import CartIcon from '../CartIcon';
import CartDropdown from '../CartDropdown';

import { HeaderContainer, LogoContainer, LogoHelper, Logo, OptionsContainer, OptionLink } from './Header.styles';

export const Header = ({ currentUser, cartHidden, signOutStart }) => (
  <HeaderContainer>
    <LogoContainer to="/">
      <LogoHelper />
      <Logo alt="logo" src={logo} />
    </LogoContainer>
    <OptionsContainer>
      <OptionLink to="/shop">SHOP</OptionLink>
      {
        currentUser ?
          <OptionLink as="div" onClick={signOutStart}>
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
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  cartHidden: selectCartHidden
});

const mapDispatchToProps = (dispatch) => ({
  signOutStart: () => dispatch(signOutStart())
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);