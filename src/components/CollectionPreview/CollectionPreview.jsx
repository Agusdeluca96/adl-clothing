import React from 'react';

import { withRouter } from 'react-router-dom'

import './CollectionPreview.scss'

import CollectionItem from '../CollectionItem';

export const CollectionPreview = ({ title, items, routeName, history, match }) => (
  <div className="collection-preview">
    <div className="title pointer" onClick={() => history.push(`${match.path}/${routeName}`)}>
      <h1>{title.toUpperCase()}</h1>
    </div>
    <div className="preview">
      {
        items
          .filter((item, index) => index < 4)
          .map((item) => (
            <CollectionItem key={item.id} item={item} />
          ))
      }
    </div>
  </div>
);

export default withRouter(CollectionPreview);