// src/routes.js
import React from 'react';
import { Router, Route } from 'react-router'

import LandingPage from './components/LandingPage/index';
import NotFound from './components/NotFound/index';
import Test from './components/Test/index';
import Game1 from './components/games/game1/index';

const Routes = (props) => (
  <Router {...props}>
    <Route path="/" component={ LandingPage } />
    <Route path="/test" component={ Test } />
    <Route path="/game1" component={ Game1 }/>
    <Route path="*" component={ NotFound } />
  </Router>
);

export default Routes;
