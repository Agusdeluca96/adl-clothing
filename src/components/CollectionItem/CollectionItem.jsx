import React from 'react';

import { connect } from 'react-redux';
import { addItem } from '../../redux/cart/cart.actions';

import CustomButton from '../CustomButton/CustomButton';

import './CollectionItem.scss'

const CollectionItem = ({ item, addItem }) => (

  <div className="collection-item">
    <div className="image"
      style={{ backgroundImage: `url(${item.imageUrl})` }} />

    <div className="collection-footer">
      <span className="name">{item.name}</span>
      <span className="price">${item.price}</span>
    </div>
    <CustomButton
      customClass="inverted"
      onClick={() => addItem(item)}>Add to cart</CustomButton>
  </div>

)

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item))
});

export default connect(null, mapDispatchToProps)(CollectionItem);