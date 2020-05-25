import styled from 'styled-components';

import CustomButton from '../CustomButton';


export const StyledCustomButton = styled(CustomButton)`
  width: 80%;
  opacity: 0, 7;
  position: absolute;
  top: 335px;
  display: none;

  @media screen and (max-width: 800px) {
    display: block;
    opacity: 0.9;
    min-width: unset;
    padding: 0 10px 0 10px;
  }
`;

StyledCustomButton.displayName = 'AddButton';


export const Image = styled.img`
  width: 100%;
  height: 95%;
  background-image: url(${(props) => props.imageUrl});
  background-size: cover;
  background-position: center;
  margin-bottom: 5px;
`;

Image.displayName = 'BackgroundImage';

export const CollectionItemFooterName = styled.span`
  width: 90%;
  margin-bottom: 15px;
`;

CollectionItemFooterName.displayName = 'NameContainer';

export const CollectionItemFooterPrice = styled.span`
  width: 90%;
  margin-bottom: 15px;
  text-align: end;

  @media screen and (max-width: 800px) {
  }
`;

CollectionItemFooterPrice.displayName = 'PriceContainer';

export const CollectionItemFooter = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
  color: #ecf0f1;
`;

CollectionItemFooter.displayName = 'CollectionFooterContainer';

export const CollectionItemContainer = styled.div`
  width: 22vw;
  display: flex;
  flex-direction: column;
  height: 430px;
  align-items: center;
  position: relative;
  margin-bottom: 3rem;

  &:hover {
    .${Image} {
      opacity: 0.8;
    }

    ${StyledCustomButton} {
      opacity: 0.95;
      display: flex;
    }
  }

  @media screen and (max-width: 800px) {
    width: 40vw;

    &:hover {
      .${Image} {
        opacity: unset;
      }

      ${StyledCustomButton} {
        opacity: unset;
      }
    }
  }
`;