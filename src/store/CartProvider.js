import React, { useReducer } from 'react';
import CartContext from './cart-context';

//reducer function, because it does not need to be re-evaluated each time therefore outside the main function

const defualtCartState = {
  items: [],
  totalAmount: 0,
};
const cartReducer = (state, action) => {
  if (action.type === 'ADD') {
    const updatedItems = state.items.concat(action.item);
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;
    return { items: updatedItems, totalAmount: updatedTotalAmount };
  }
  return defualtCartState;
};

const CartProvider = (props) => {
  const [cartState, dispatchedCartAction] = useReducer(
    cartReducer,
    defualtCartState
  );

  const addItemToCartHandler = (item) => {
    dispatchedCartAction({ type: 'ADD', item: item });
  };
  const removeItemFromCartHandler = (id) => {
    dispatchedCartAction({ type: 'REMOVE', id: id });
  };
  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
