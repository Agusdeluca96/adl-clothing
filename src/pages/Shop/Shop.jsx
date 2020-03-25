import React, { useState } from 'react';

import './Shop.scss'
import SHOP_DATA from './Shop.data'
import CollectionPreview from '../../components/CollectionPreview';

const Shop = () => {

  const [collections] = useState(SHOP_DATA);

  return (
    <div className="shop">
      {collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </div>
  )
}

export default Shop;