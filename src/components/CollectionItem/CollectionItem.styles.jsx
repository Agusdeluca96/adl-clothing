import styled from 'styled-components';

import CustomButton from '../CustomButton';


export const StyledCustomButton = styled(CustomButton)`
  width: 80%;
  opacity: 0, 7;
  position: absolute;
  top: 335px;
  display: none;
`;

export const Image = styled.img`
  width: 100%;
  height: 95%;
  background-image: url(${(props) => props.imageUrl});
  background-size: cover;
  background-position: center;
  margin-bottom: 5px;
`;

export const CollectionItemFooterName = styled.span`
  width: 90%;
  margin-bottom: 15px;
`;

export const CollectionItemFooterPrice = styled.span`
  width: 90%;
  margin-bottom: 15px;
`;

export const CollectionItemFooter = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
  color: #ecf0f1;
`;

export const CollectionItemContainer = styled.div`
  width: 22vw;
  display: flex;
  flex-direction: column;
  height: 430px;
  align-items: center;
  position: relative;

  &:hover {
    .${Image} {
      opacity: 0.8;
    }

    ${StyledCustomButton} {
      opacity: 0.95;
      display: flex;
    }
  }
`;