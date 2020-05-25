import React from 'react';
import { shallow } from 'enzyme';
import Home from './Home';

it('should render Home page component', () => {
  expect(shallow(<Home />)).toMatchSnapshot();
});
