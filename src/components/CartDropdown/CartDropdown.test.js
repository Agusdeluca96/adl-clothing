import React from 'react';
import { shallow } from 'enzyme';

import { CartDropdown } from './CartDropdown';
import CustomButton from '../CustomButton';
import CartItem from '../CartItem';

import { toggleCart } from '../../redux/cart/cart.actions';

describe('CartDropdown component', () => {
  let wrapper;
  let mockHistory;
  let mockDispatch;
  const mockCartItems = [{ id: 1 }, { id: 2 }, { id: 3 }];

  beforeEach(() => {
    mockHistory = {
      push: jest.fn()
    };

    mockDispatch = jest.fn();

    const mockProps = {
      cartItems: mockCartItems,
      history: mockHistory,
      dispatch: mockDispatch
    };

    wrapper = shallow(<CartDropdown {...mockProps} />);
  });

  it('should render CartDropdown component', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should call history.push when button is clicked', () => {
    wrapper.find(CustomButton).simulate('click');
    expect(mockHistory.push).toHaveBeenCalled();
    expect(mockDispatch).toHaveBeenCalledWith(toggleCart());
  });

  it('should render an equal number of CartItem components as the cartItems prop', () => {
    expect(wrapper.find(CartItem).length).toEqual(mockCartItems.length);
  });

  it('should render EmptyMessageContainer if cartItems is empty', () => {
    const mockProps = {
      cartItems: [],
      history: mockHistory,
      dispatch: mockDispatch
    };

    const newWrapper = shallow(<CartDropdown {...mockProps} />);
    expect(newWrapper.exists('.empty-message')).toBe(true);
  });
});
