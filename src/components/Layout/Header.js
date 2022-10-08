import React from 'react';

import classes from './Header.module.css';
import cloud from '../../image/cloud.jpg';

const Header = () => {
  return (
    <React.Fragment>
      <header className={classes.header}>
        <h1>Meals</h1> <button>Cart</button>
      </header>
      <div className={classes['main-image']}>
        <img src={cloud} alt="clouds in the sky" />
      </div>
    </React.Fragment>
  );
};

export default Header;
