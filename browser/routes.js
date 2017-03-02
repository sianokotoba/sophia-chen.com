import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import Home from './components/Home';
import darkMain from './components/darkMain';
import lightMain from './components/lightMain';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={darkMain} />
    <Route path="/lightmain" component={lightMain} />
  </Route>
);

    // <Route path="/darkmain" component={darkMain} />
