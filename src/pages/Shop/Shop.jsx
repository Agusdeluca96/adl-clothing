import React, { useEffect, lazy, Suspense } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { fetchCollectionsStart } from '../../redux/shop/shop.actions.js';
import Spinner from '../../components/Spinner/Spinner.jsx';

const CollectionContainer = lazy(() => import('../../components/Collection/Collection.container'));
const CollectionsOverviewContainer = lazy(() => import('../../components/CollectionsOverview/CollectionsOverview.container'));

const Shop = ({ fetchCollectionsStart, match }) => {
  useEffect(() => {
    fetchCollectionsStart();
  }, [fetchCollectionsStart])

  return (
    <div className="shop">
      <Suspense fallback={< Spinner />}>
        <Route
          exact
          path={`${match.path}`}
          component={CollectionsOverviewContainer}
        />
        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionContainer}
        />
      </Suspense>
    </div>
  )
};

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
})

export default connect(null, mapDispatchToProps)(Shop);