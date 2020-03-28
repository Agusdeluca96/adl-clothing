import { CartActionTypes } from './cart.types';

export const toogleCart = () => ({
  type: CartActionTypes.TOOGLE_CART
});

export const addItem = (item) => ({
  type: CartActionTypes.ADD_ITEM,
  payload: item
})