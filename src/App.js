import React,{ Suspense, lazy } from 'react';
import ReactDOM from 'react-dom';
import * as axe from 'react-axe';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import './App.css';

import AppContexts from './context-providers';

const ThemeColor = AppContexts.ThemeColor

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
            <ThemeColor.Provider value={"blue"}>
              <Switch>
                <Route exact path="/home" component={Home}  />
                <Route path="/about" component={About} />
              </Switch>
            </ThemeColor.Provider>
          </Suspense>
      </Router>
  );
}

export default App;
