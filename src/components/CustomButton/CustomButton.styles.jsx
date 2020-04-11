import styled, { css } from 'styled-components';

const baseStyles = css`
  background-color: #2c3e50;
  color: #ecf0f1;
  border: none;

  &:hover {
    background-color: #1e2a35;
  }
`;

const invertedStyles = css`
  background-color: #ecf0f1;
  color: #2c3e50;
  border: 1px solid #2c3e50;

  &:hover {
    background-color: #2c3e50;
    color: #ecf0f1;
    border: none;
  }
`;

const googleSignInStyles = css`
  background-color: #4285f4;
  color: #ecf0f1;
  border: none;

  &:hover {
    background-color: #357ae8;
  }
`;

const getCustomButtonStyles = (props) => {
  switch (props.customClass) {
    case 'google-sign-in':
      return googleSignInStyles;
    case 'inverted':
      return invertedStyles;
    default:
      return baseStyles;
  }
}

export const CustomButtonContainer = styled.button`
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  padding: 0 35px 0 35px;
  font-size: 15px;
  text-transform: uppercase;
  font-family: "Open Sans Condensed";
  font-weight: bolder;
  cursor: pointer;
  display: flex;
  justify-content: center;

  ${getCustomButtonStyles}
`;