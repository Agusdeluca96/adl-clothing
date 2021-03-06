import React from 'react';
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectShopCollectionsAsArray } from '../../redux/shop/shop.selectors';

import CollectionPreview from '../CollectionPreview';

import './CollectionsOverview.scss';

export const CollectionsOverview = ({ collections }) => (
  <div className="collections-overview">
    {collections.map(({ id, ...otherCollectionProps }) => (
      <CollectionPreview key={id} {...otherCollectionProps} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  collections: selectShopCollectionsAsArray
})

export default connect(mapStateToProps)(CollectionsOverview);