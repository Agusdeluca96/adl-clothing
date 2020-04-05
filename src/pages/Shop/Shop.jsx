import React from 'react';
import { Route } from 'react-router-dom';

import Collection from '../Collection/Collection';
import CollectionsOverview from '../../components/CollectionsOverview';

import './Shop.scss'

const Shop = ({ match }) => {
  return (
    <div className="shop">
      <Route exact path={`${match.path}`} component={CollectionsOverview} />
      <Route path={`${match.path}/:collectionId`} component={Collection} />
    </div>
  )
};

export default Shop;