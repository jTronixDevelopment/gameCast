// src/routes.js
import React from 'react';
import { Router, Route } from 'react-router'

import LandingPage from './pages/LandingPage/index';
import NotFound from './pages/NotFound/index';
import TestSocket from './pages/TestSocket/index';
import TestHost from './pages/TestHost/index';
import Game1 from './pages/games/game1/index';

const Routes = (props) => (
  <Router {...props}>
    <Route path="/" component={ LandingPage } />
    <Route path="/testsocket" component={ TestSocket } />
    <Route path="/testhost" component={ TestHost } />
    <Route path="/game1" component={ Game1 }/>
    <Route path="*" component={ NotFound } />
  </Router>
);

export default Routes;
