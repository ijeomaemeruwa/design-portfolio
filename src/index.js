import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Loader from './components/Loader'


ReactDOM.render(
  <Router>
  <Suspense fallback={<Loader />}>
    <App />
  </Suspense>
  </Router>,
  document.getElementById('root')
);
