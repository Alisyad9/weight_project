import React from 'react';

import Header from './components/Layout/Header';

import Meals from './components/Meals/Meals';
function App() {
  return (
    <React.Fragment>
      {/* <h2>hello world</h2> */}
      {/* <h2>yes</h2> */}

      <Header />
      <main>
        <Meals />
      </main>
    </React.Fragment>
  );
}

export default App;
