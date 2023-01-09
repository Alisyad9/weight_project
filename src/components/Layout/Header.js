import React from 'react';

import classes from './Header.module.css';
import cloud from '../../image/cloud.jpg';
import HeaderButton from './HeaderButton';

const Header = (props) => {
  return (
    <React.Fragment>
      <header className={classes.header}>
        <h1>MEALS</h1>

        <HeaderButton onClick={props.onShowCart} />
      </header>
      <div className={classes['main-image']}>
        <img src={cloud} alt="clouds in the sky" />
      </div>
    </React.Fragment>
  );
};

export default Header;
