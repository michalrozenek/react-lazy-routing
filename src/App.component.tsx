import React from 'react';
import { AppRouter } from './containers/Router/Router.component';
import { Nav } from './containers/Nav/Nav.component';
import { ErrorBoundary } from './components/ErrorBoundary/ErrorBoundary.component';

const App = () => (
  <div className='app'>
    <ErrorBoundary message={'App error'}>
      <AppRouter>
        <Nav />
      </AppRouter>
    </ErrorBoundary>
  </div>
);

export default App;
