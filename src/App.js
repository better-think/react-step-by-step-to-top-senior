import React,{ Suspense, lazy } from 'react';
import ReactDOM from 'react-dom';
import * as axe from 'react-axe';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import './App.css';

// import MyErrorBoundary from './components/MyErrorBoundary';

// components
const Home = lazy(() => import('./routes/Home'))
const About = lazy(() => import('./routes/About'))


function App() {

  if (process.env.NODE_ENV !== 'production') {
    axe(React, ReactDOM, 1000);
  }

  return (
      <Router>
          <Suspense fallback={<div>Loading....</div>}>
            <Switch>
              <Route exact path="/home" component={Home}  />
              <Route path="/about" component={About} />
            </Switch>
          </Suspense>
      </Router>
  );
}

export default App;
