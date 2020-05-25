import CartActionTypes from './cart.types';
import cartReducer from './cart.reducer';

const initialState = {
  hidden: true,
  items: []
};

describe('cartReducer', () => {
  it('should return initial state', () => {
    expect(cartReducer(undefined, {})).toEqual(initialState);
  });

  it('should toggle hidden with toggleHidden action', () => {
    expect(
      cartReducer(initialState, { type: CartActionTypes.toggle_CART })
        .hidden
    ).toBe(false);
  });

  it('should increase quantity of matching item by 1 if addItem action fired with same item as payload', () => {
    const mockItem = {
      id: 1,
      quantity: 3
    };

    const mockPrevState = {
      hidden: true,
      items: [mockItem, { id: 2, quantity: 1 }]
    };

    expect(
      cartReducer(mockPrevState, {
        type: CartActionTypes.ADD_ITEM,
        payload: mockItem
      }).items[0].quantity
    ).toBe(4);
  });

  it('should decrease quantity of matching item by 1 if removeItem action fired with same item as payload', () => {
    const mockItem = {
      id: 1,
      quantity: 3
    };

    const mockPrevState = {
      hidden: true,
      items: [mockItem, { id: 2, quantity: 1 }]
    };

    expect(
      cartReducer(mockPrevState, {
        type: CartActionTypes.REMOVE_ITEM,
        payload: mockItem
      }).items[0].quantity
    ).toBe(2);
  });

  it('should remove item from cart if clearItem action fired with payload of existing item', () => {
    const mockItem = {
      id: 1,
      quantity: 3
    };

    const mockPrevState = {
      hidden: true,
      items: [mockItem, { id: 2, quantity: 1 }]
    };

    expect(
      cartReducer(mockPrevState, {
        type: CartActionTypes.CLEAR_ITEM,
        payload: mockItem
      }).items.includes(item => item.id === 1)
    ).toBe(false);
  });

  it('should clear cart if clearCart action fired', () => {
    const mockPrevState = {
      hidden: true,
      items: [{ id: 1, quantity: 3 }, { id: 2, quantity: 1 }]
    };

    expect(
      cartReducer(mockPrevState, {
        type: CartActionTypes.CLEAR_CART
      }).items.length
    ).toBe(0);
  });
});
