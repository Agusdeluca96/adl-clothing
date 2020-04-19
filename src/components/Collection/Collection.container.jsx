import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import { selectIsCollectionLoaded } from '../../redux/shop/shop.selectors';

import WidhSpinner from '../WithSpinner';
import Collection from './Collection';

const mapStateToProps = createStructuredSelector({
  isLoading: (state) => !selectIsCollectionLoaded(state)
});

const CollectionContainer = compose(
  connect(mapStateToProps),
  WidhSpinner
)(Collection);

export default CollectionContainer;