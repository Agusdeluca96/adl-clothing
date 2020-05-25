import { takeLatest, call, put } from 'redux-saga/effects';

import {
  firestore,
  convertCollectionsSnapshotToMap
} from '../../utils/firebase';

import {
  fetchCollectionsSuccess,
  fetchCollectionsFailure
} from './shop.actions';

import ShopActionTypes from './shop.types';

import { fetchCollections, onFetchCollectionsStart } from './shop.sagas';

describe('fetch collections start saga', () => {
  it('should trigger on FETCH_COLLECTIONS_START', () => {
    const generator = onFetchCollectionsStart();
    expect(generator.next().value).toEqual(
      takeLatest(ShopActionTypes.FETCH_COLLECTIONS_START, fetchCollections)
    );
  });
});

describe('fetch collections async saga', () => {
  const generator = fetchCollections();

  it('should call firestore collection ', () => {
    const getCollection = jest.spyOn(firestore, 'collection');
    generator.next();
    expect(getCollection).toHaveBeenCalled();
  });

  it('should call convertCollectionsSnapshot saga ', () => {
    const mockSnapshot = {};
    expect(generator.next(mockSnapshot).value).toEqual(
      call(convertCollectionsSnapshotToMap, mockSnapshot)
    );
  });

  it('should fire fetchCollectionsSuccess if collectionsMap is succesful', () => {
    const mockCollectionsMap = {
      hats: { id: 1 }
    };

    expect(generator.next(mockCollectionsMap).value).toEqual(
      put(fetchCollectionsSuccess(mockCollectionsMap))
    );
  });

  it('should fire fetchCollectionsFailure if get collection fails at any point', () => {
    const newGenerator = fetchCollections();
    newGenerator.next();
    expect(newGenerator.throw({ message: 'error' }).value).toEqual(
      put(fetchCollectionsFailure('error'))
    );
  });
});
