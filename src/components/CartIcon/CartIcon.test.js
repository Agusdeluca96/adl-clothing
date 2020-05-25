import React from 'react';
import { shallow } from 'enzyme';
import { CartIcon } from './CartIcon';

describe('CartIcon component', () => {
  let wrapper;
  let mockToggleCart;
  beforeEach(() => {
    mockToggleCart = jest.fn();

    const mockProps = {
      itemCount: 0,
      toggleCart: mockToggleCart
    };

    wrapper = shallow(<CartIcon {...mockProps} />);
  });

  it('should render CartIcon component', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should call toggleCart when icon is clicked', () => {
    wrapper.find('.cart-icon').simulate('click');
    expect(mockToggleCart).toHaveBeenCalled();
  });

  it('should render the itemCount as the text', () => {
    const itemCount = parseInt(wrapper.find('.item-count').text());
    expect(itemCount).toBe(0);
  });
});
