import React from 'react';
import { connect } from "react-redux";

import { selectShopCollection } from "../../redux/shop/shop.selectors";

import './Collection.scss';
import CollectionItem from '../../components/CollectionItem/CollectionItem';

const Collection = ({ collection }) => (
  <div className="collection">
    <h1 className="title">{collection.title.toUpperCase()}</h1>
    <div className="items">
      {
        collection.items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))
      }
    </div>
  </div>
);

const mapStateToProps = (state, ownProps) => ({
  collection: selectShopCollection(ownProps.match.params.collectionId)(state)
});

export default connect(mapStateToProps)(Collection);