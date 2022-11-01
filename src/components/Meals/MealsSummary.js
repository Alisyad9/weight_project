import React from 'react';
import classes from './MealsSummary.module.css';

const MealsSummary = () => {
  return (
    <section className={classes.summary}>
      <h2>Food, delivered to you</h2>
      <p>choose what food you want to eat from a broad selection of dishes.</p>
      <p>
        All dishes are cooked with high quality ingredients, which will
        tantalise your appetite
      </p>
    </section>
  );
};

export default MealsSummary;
