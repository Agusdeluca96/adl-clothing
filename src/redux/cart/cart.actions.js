import { CartActionTypes } from './cart.types';

export const toogleCart = () => ({
  type: CartActionTypes.TOOGLE_CART
});

export const addItem = (item) => ({
  type: CartActionTypes.ADD_ITEM,
  payload: item
});

export const removeItem = (item) => ({
  type: CartActionTypes.REMOVE_ACTION,
  payload: item
});

export const clearItem = (item) => ({
  type: CartActionTypes.CLEAR_ITEM,
  payload: item
});