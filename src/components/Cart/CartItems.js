import React from 'react';
import Modal from '../UI/Modal';

import classes from './CartItems.module.css';

const CartItems = (props) => {
  const cartItems = (
    <ul className={classes['cart-items']}>
      {[{ id: 'c1', name: 'Burger', amount: 2, price: 12.22 }].map((item) => (
        <li>{item.name}</li>
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
          {' '}
          Close
        </button>
        <button classes={classes.button}>order</button>
      </div>
    </Modal>
  );
};

export default CartItems;
