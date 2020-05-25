import React from 'react';
import { shallow } from 'enzyme';

import CustomFormInput from './CustomFormInput';

describe('CustomFormInput component', () => {
  let wrapper;
  let mockHandleChange;

  beforeEach(() => {
    mockHandleChange = jest.fn();

    const mockProps = {
      label: 'email',
      value: 'test@gmail.com',
      handleChange: mockHandleChange
    };

    wrapper = shallow(<CustomFormInput {...mockProps} />);
  });

  it('should render CustomFormInput component', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should call handleChange method when input changes', () => {
    wrapper.find('.form-input').simulate('change');

    expect(mockHandleChange).toHaveBeenCalled();
  });

  it('should render form input if there is a label', () => {
    expect(wrapper.exists('.form-input-label')).toBe(true);
  });

  it('should not render form input if there is no label', () => {
    const mockNewProps = {
      label: '',
      value: 'test@gmail.com',
      handleChange: mockHandleChange
    };

    const newWrapper = shallow(<CustomFormInput {...mockNewProps} />);

    expect(newWrapper.exists('.form-input-label')).toBe(false);
  });
});
