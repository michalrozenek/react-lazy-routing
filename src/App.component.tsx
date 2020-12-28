import React from 'react';
import { AppRouter } from './containers/Router/Router.component';
import { Nav } from './containers/Nav/Nav.component';

const App = () => (
  <div className='app'>
    <AppRouter>
      <Nav />
    </AppRouter>
  </div>
);

export default App;
