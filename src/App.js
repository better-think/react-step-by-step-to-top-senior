import React,{ Suspense } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import * as axe from 'react-axe';

import MyErrorBoundary from './components/MyErrorBoundary';


// components
const OtherComponent = React.lazy(() => import('./components/OtherComponent'))

function App() {

  if (process.env.NODE_ENV !== 'production') {
    axe(React, ReactDOM, 1000);
  }

  return (
    <div className="App">
      <MyErrorBoundary>
        <Suspense fallback={<div>Loading....</div>}>
          <OtherComponent ></OtherComponent>
        </Suspense>
      </MyErrorBoundary>
    </div>
  );
}

export default App;
