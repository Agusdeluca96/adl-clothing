import { takeLatest, call, put } from "redux-saga/effects";

import { firestore, convertCollectionsSnapshotToMap } from '../../utils/firebase';

import ShopActionTypes from './shop.types';
import { fetchCollectionsSuccess, fetchCollectionsFailure } from './shop.actions';

export function* fetchCollectionsAsync() {
  try {
    const collectionRef = firestore.collection('collections');
    const collectionsSnapshot = yield collectionRef.get();

    const collectionsMap = yield call(convertCollectionsSnapshotToMap, collectionsSnapshot);

    yield put(fetchCollectionsSuccess(collectionsMap));
  } catch (error) {
    yield put(fetchCollectionsFailure(error.message));
  }
};

export function* fetchCollectionsStart() {
  yield takeLatest(
    ShopActionTypes.FETCH_COLLECTIONS_START,
    fetchCollectionsAsync
  );
}