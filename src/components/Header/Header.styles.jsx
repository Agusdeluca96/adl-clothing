import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  overflow: hidden;
  background-color: #2c3e50;
  position: fixed;
  top: 0;
  z-index: 1;
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
  font-weight: 600;
  font-size: 18px;
  color: #ecf0f1;
  cursor: pointer;

  &:hover {
  color: #2bd6b4;
}
`;

OptionLink.displayName = 'OptionLink';
