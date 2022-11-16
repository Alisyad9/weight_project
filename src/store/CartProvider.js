import React, { useReducer } from 'react';
import CartContext from './cart-context';

//reducer function, because it does not need to be re-evaluated each time therefore outside the main function

const defualtCartState = (params) => {
  items: [], (totalAmount = 0);
};
const cartReducer = (state, action) => {
  return defualtCartState;
};

const CartProvider = (props) => {
  const [cartState, dispatched] = useReducer(cartReducer, defualtCartState);

  const addItemToCartHandler = (item) => {};
  const removeItemFromCartHandler = (id) => {};
  const cartContext = {
    items: [],
    totalAmount: 0,
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
