import React from 'react';


import './CollectionItem.scss'
import CustomButton from '../CustomButton/CustomButton';

const CollectionItem = ({ id, name, price, imageUrl }) => (

  <div className="collection-item">
    <div className="image"
      style={{ backgroundImage: `url(${imageUrl})` }} />

    <div className="collection-footer">
      <span className="name">{name}</span>
      <span className="price">${price}</span>
    </div>
    <CustomButton customClass="inverted">Add to cart</CustomButton>
  </div>

)

export default CollectionItem;