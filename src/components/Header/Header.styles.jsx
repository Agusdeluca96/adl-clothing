import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderContainer = styled.div`
  height: 70px;
  width: 100%;
  background-color: #bdbdbd;
  display: flex;
  justify-content: space-between;
  /* overflow: hidden; */
  position: relative;
  /* top: 0;
  z-index: 9999; */
`;

export const LogoContainer = styled(Link)`
  margin-left: 10px;
`;

export const LogoHelper = styled.span`
  display: inline-block;
  height: 100%;
  vertical-align: middle;
`;

export const Logo = styled.img`
  height: 60px;
  vertical-align: middle;
`;

export const OptionsContainer = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const OptionLink = styled(Link)`
  padding: 10px 15px;
  font-weight: 500;
  font-size: 16px;
  color: #000000;
  cursor: pointer;

  &:hover {
  color: #FFFFFF;
}
`;

OptionLink.displayName = 'OptionLink';
