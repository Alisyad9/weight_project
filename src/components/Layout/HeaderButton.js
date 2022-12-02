import React, { useContext } from 'react';
import Cart from '../Cart/Cart';
import classes from './HeaderButton.module.css';
import logo from '../../image/logo.svg';
import CartContext from '../../store/cart-context';

const HeaderButton = (props) => {
  const cartCtx = useContext(CartContext);
  const numberOfCartItems = cartCtx.items.reduce((current, item) => {
    return current + item.amount;
  }, 0);
  return (
    <button className={classes.button} onClick={props.onClick}>
      <span className={classes.icon}>
        <Cart />
      </span>
      <span>Cart</span>

      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderButton;
