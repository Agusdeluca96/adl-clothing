import { CartActionTypes } from './cart.types';
import { addItemToCart, removeItemFromCart, clearItemFromCart } from './cart.utils'

const INITIAL_STATE = {
  hidden: true,
  items: []
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartActionTypes.TOOGLE_CART:
      return {
        ...state,
        hidden: !state.hidden
      }
    case CartActionTypes.ADD_ITEM:
      return {
        ...state,
        items: addItemToCart(state.items, action.payload)
      }
    case CartActionTypes.REMOVE_ACTION:
      return {
        ...state,
        items: removeItemFromCart(state.items, action.payload)
      }
    case CartActionTypes.CLEAR_ITEM:
      return {
        ...state,
        items: clearItemFromCart(state.items, action.payload)
      }
    default:
      return state;
  }
}

export default cartReducer;