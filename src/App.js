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
      {/* <h2>hello world</h2> */}
      {/* <h2>yes</h2> */}
      <Header onShowCart={showPortalCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
