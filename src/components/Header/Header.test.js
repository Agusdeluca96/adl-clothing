import React from 'react';
import { shallow } from 'enzyme';

import { Header } from './Header';
import CartDropdown from '../CartDropdown';

describe('Header component', () => {
  let wrapper;
  let mockSignOutStart;

  beforeEach(() => {
    mockSignOutStart = jest.fn();

    const mockProps = {
      cartHidden: true,
      currentUser: {
        uid: '123'
      },
      signOutStart: mockSignOutStart
    };

    wrapper = shallow(<Header {...mockProps} />);
  });

  it('should render Header component', () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe('if currentUser is present', () => {
    it('should render sign out link', () => {
      expect(
        wrapper
          .find('OptionLink')
          .at(1)
          .text()
      ).toBe('SIGN OUT');
    });

    it('should call signOutStart method when link is clicked', () => {
      wrapper
        .find('OptionLink')
        .at(1)
        .simulate('click');

      expect(mockSignOutStart).toHaveBeenCalled();
    });
  });

  describe('if currentUser is null', () => {
    it('should render sign in link', () => {
      const mockProps = {
        cartHidden: true,
        currentUser: null,
        signOutStart: mockSignOutStart
      };

      const newWrapper = shallow(<Header {...mockProps} />);

      expect(
        newWrapper
          .find('OptionLink')
          .at(1)
          .text()
      ).toBe('SIGN IN');
    });
  });

  describe('if cartHidden is true', () => {
    it('should not render CartDropdown', () => {
      expect(wrapper.exists(CartDropdown)).toBe(false);
    });
  });

  describe('if currentUser is null', () => {
    it('should render CartDropdown', () => {
      const mockProps = {
        cartHidden: false,
        currentUser: null,
        signOutStart: mockSignOutStart
      };

      const newWrapper = shallow(<Header {...mockProps} />);

      expect(newWrapper.exists(CartDropdown)).toBe(true);
    });
  });
});
