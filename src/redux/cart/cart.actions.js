import { CartActionTypes } from './cart.types';

export const toogleCart = () => ({
  type: CartActionTypes.TOOGLE_CART
});

export const addItem = (item) => ({
  type: CartActionTypes.ADD_ITEM,
  payload: item
})

export const removeItem = (item) => ({
  type: CartActionTypes.REMOVE_ITEM,
  payload: item
})