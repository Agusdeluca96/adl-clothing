import React from 'react';

import { connect } from 'react-redux';
import { addItem } from '../../redux/cart/cart.actions';

import { CollectionItemContainer, StyledCustomButton, Image, CollectionItemFooter, CollectionItemFooterName, CollectionItemFooterPrice } from './CollectionItem.styles';

export const CollectionItem = ({ item, addItem }) => (

  <CollectionItemContainer>
    <Image imageUrl={item.imageUrl} />

    <CollectionItemFooter>
      <CollectionItemFooterName>{item.name}</CollectionItemFooterName>
      <CollectionItemFooterPrice>${item.price}</CollectionItemFooterPrice>
    </CollectionItemFooter>
    <StyledCustomButton
      onClick={() => addItem(item)}>Add to cart</StyledCustomButton>
  </CollectionItemContainer>

)

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item))
});

export default connect(null, mapDispatchToProps)(CollectionItem);