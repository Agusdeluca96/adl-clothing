import React from 'react';

import { CustomButtonContainer } from './CustomButton.styles';

export const CustomButton = ({ children, ...otherProps }) => (
  <CustomButtonContainer {...otherProps}
  >
    {children}
  </CustomButtonContainer>
);

export default CustomButton;