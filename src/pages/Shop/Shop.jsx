import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { firestore, convertCollectionsSnapshotToMap } from '../../utils/firebase';

import { updateCollections } from '../../redux/shop/shop.actions.js';

import WithSpinner from '../../components/WithSpinner';
import Collection from '../Collection/Collection';
import CollectionsOverview from '../../components/CollectionsOverview';

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionWithSpinner = WithSpinner(Collection);

class Shop extends React.Component {
  state = {
    loading: true
  };

  unsuscribeFromSnapshot = null;

  componentDidMount() {
    const { updateCollections } = this.props;
    const collectionRef = firestore.collection('collections');

    collectionRef.get().then((collectionsSnapshot) => {
      const collectionMap = convertCollectionsSnapshotToMap(collectionsSnapshot)
      updateCollections(collectionMap);
      this.setState({ loading: false });
    });

  }
  render() {
    const { match } = this.props;
    const { loading } = this.state;
    return (
      <div className="shop">
        <Route
          exact
          path={`${match.path}`}
          render={(props) => (
            <CollectionsOverviewWithSpinner isLoading={loading} {...props} />
          )}
        />
        <Route
          path={`${match.path}/:collectionId`}
          render={(props) => (
            <CollectionWithSpinner isLoading={loading} {...props} />
          )}
        />
      </div>
    )
  }
};

const mapDispatchToProps = (dispatch) => ({
  updateCollections: collectionsMap => dispatch(updateCollections(collectionsMap))
})

export default connect(null, mapDispatchToProps)(Shop);