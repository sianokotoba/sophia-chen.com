import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/app';
import Home from './components/home';
import Bio from './components/bio';
import Projects from './components/projects';
import FunFacts from './components/fun-facts';
import Credits from './components/credits';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="/bio" component={Bio} />
    <Route path="/projects" component={Projects} />
    <Route path="/fun-facts" component={FunFacts} />
    <Route path="/credits" component={Credits} />
  </Route>
);

    // <Route path="/darkmain" component={darkMain} />
