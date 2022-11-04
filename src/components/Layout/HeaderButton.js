import React from 'react';
import Cart from '../Cart/Cart';
import classes from './HeaderButton.module.css';
import logo from '../../image/logo.svg';

const HeaderButton = (props) => {
  return (
    <button className={classes.button} onClick={props.onClick}>
      <span className={classes.icon}>
        {' '}
        <Cart />
      </span>
      <span> Your Cart</span>

      <span className={classes.badge}>3</span>
    </button>
  );
};

export default HeaderButton;
