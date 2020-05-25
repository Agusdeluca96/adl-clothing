import styled, { css } from 'styled-components';

const baseStyles = css`
  background-color: #BDBDBD;
  color: #000000;
  border: none;

  &:hover {
    background-color: #616060;
    color: #FFFFFF;
    border: 1px solid #BDBDBD;
  }
`;

const invertedStyles = css`
  background-color: #000000;
  color: #BDBDBD;
  border: 1px solid #BDBDBD;

  &:hover {
    background-color: #BDBDBD;
    color: #000000;
    border: none;
  }
`;

const googleSignInStyles = css`
  background-color: #4285f4;
  color: #000000;
  border: none;

  &:hover {
    background-color: #357ae8;
    color: #FFFFFF;
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
  font-weight: bolder;
  cursor: pointer;
  display: flex;
  justify-content: center;

  @media screen and (max-width: 800px) {
    font-size: 12px;
    font-weight: bold;
  }

  ${getCustomButtonStyles}
`;