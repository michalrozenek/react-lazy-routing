import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ErrorBoundary } from '../../components/ErrorBoundary/ErrorBoundary.component';

// Exported as an object (no default export)
const About = lazy(() => import('../../views/About/About.component').then(module => ({ default: module.About })));
// Exported as a default
const Contact = lazy(() => import('../../views/Contact/Contact.component')); 
const Home = lazy(() => import('../../views/Home/Home.component')); 

export const AppRouter: React.FC = ({ children }) => (
  <ErrorBoundary>
    <Suspense fallback={<div>loading...</div>}>
      <Router>
        {children}
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/contact' component={Contact}/>
          <Route path="/about" component={About}/>
        </Switch>
      </Router>
    </Suspense>
  </ErrorBoundary>
);
