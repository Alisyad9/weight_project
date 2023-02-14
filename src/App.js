import React, { Fragment, useState } from 'react';
import CartItems from './components/Cart/CartItems';

import Header from './components/Layout/Header';

import Meals from './components/Meals/Meals';
import CartProvider from './store/CartProvider';

function App() {
  const [closePortal, setClosePortal] = useState(false);

  function showPortalCartHandler() {
    setClosePortal(true);
  }
  function hidePortalCartHandler() {
    setClosePortal(false);
  }

  return (
    <CartProvider>
      {closePortal && <CartItems onClosed={hidePortalCartHandler} />}

      <Header onShowCart={showPortalCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
