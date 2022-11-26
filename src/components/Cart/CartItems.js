import React, { useContext } from 'react';
import CartContext from '../../store/cart-context';
import Modal from '../UI/Modal';

import classes from './CartItems.module.css';

const CartItems = (props) => {
  const cartCtx = useContext(CartContext);

  const cartItems = (
    <ul className={classes['cart-items']}>
      {cartCtx.items.map((item) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );
  return (
    <Modal onClosed={props.onClosed}>
      {cartItems}
      <div className={classes.total}>
        <span>total amount:</span>
        <span>35</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={props.onClosed}>
          Close
        </button>
        <button classes={classes.button}>order</button>
      </div>
    </Modal>
  );
};

export default CartItems;
