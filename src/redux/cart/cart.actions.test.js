import CartActionTypes from './cart.types';
import {
  toggleCart,
  addItem,
  removeItem,
  clearItem,
  clearCart
} from './cart.actions';

describe('toggleCart action', () => {
  it('should create the toggleCart action', () => {
    expect(toggleCart().type).toEqual(CartActionTypes.toggle_CART);
  });
});

describe('addItem action', () => {
  it('should create the addItem action', () => {
    const mockItem = {
      id: 1
    };

    const action = addItem(mockItem);

    expect(action.type).toEqual(CartActionTypes.ADD_ITEM);
    expect(action.payload).toEqual(mockItem);
  });
});

describe('removeItem action', () => {
  it('should create the removeItem action', () => {
    const mockItem = {
      id: 1
    };

    const action = removeItem(mockItem);

    expect(action.type).toEqual(CartActionTypes.REMOVE_ITEM);
    expect(action.payload).toEqual(mockItem);
  });
});

describe('clearItem action', () => {
  it('should create the clearItem action', () => {
    const mockItem = {
      id: 1
    };

    const action = clearItem(mockItem);

    expect(action.type).toEqual(CartActionTypes.CLEAR_ITEM);
    expect(action.payload).toEqual(mockItem);
  });
});

describe('clearCart action', () => {
  it('should create the clearCart action', () => {
    expect(clearCart().type).toEqual(CartActionTypes.CLEAR_CART);
  });
});
