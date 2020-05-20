import { all, call, takeLatest, put, select } from 'redux-saga/effects';

import { getUserCartRef } from '../../utils/firebase'
import UserActionTypes from '../user/user.types';
import { selectCurrentUser } from '../user/user.selector';
import CartActionTypes from './cart.types';
import { selectCartItems } from './cart.selector';
import { clearCart, setCartFromFirebase } from './cart.actions';

export function* clearCartOnSignOut() {
  yield put(clearCart());
};

export function* checkCartFromFirebase({ payload: user }) {
  const cartRef = yield getUserCartRef(user.id);
  const cartSnapshot = yield cartRef.get();
  yield put(setCartFromFirebase(cartSnapshot.data().items));
}

export function* updateCartInFirebase() {
  const currentUser = yield select(selectCurrentUser);
  if (currentUser) {
    try {
      const cartRef = yield getUserCartRef(currentUser.id);
      const cartItems = yield select(selectCartItems);
      yield cartRef.update({ items: cartItems });
    } catch (error) {
      console.log(error);
    }
  }
}

export function* onSignOutSuccess() {
  yield takeLatest(UserActionTypes.SIGN_OUT_SUCCESS, clearCartOnSignOut);
};

export function* onSignInSuccess() {
  yield takeLatest(UserActionTypes.SIGN_IN_SUCCESS, checkCartFromFirebase);
}

export function* onCartChange() {
  yield takeLatest(
    [
      CartActionTypes.ADD_ITEM,
      CartActionTypes.REMOVE_ITEM,
      CartActionTypes.CLEAR_ITEM
    ],
    updateCartInFirebase
  );
}


export function* cartSagas() {
  yield all([
    call(onSignOutSuccess),
    call(onSignInSuccess),
    call(onCartChange)
  ])
};