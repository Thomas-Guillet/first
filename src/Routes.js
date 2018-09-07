import React, { Component } from 'react';
import { Route, Switch, HashRouter } from 'react-router-dom';
import { ParallaxProvider } from 'react-scroll-parallax';

import Home from './pages/Home';
import Project from './pages/Project';

class Routes extends Component {
  render() {
    return (
      <ParallaxProvider>
        <HashRouter>
          <Switch>
            <Route exact path={ '/' } component={ Home }></Route>
            <Route exact path={ '/projet-dating' } component={ Project }></Route>
            <Route exact path={ '/projet-jazz' } component={ Project }></Route>
            <Route exact path={ '/projet-gaby' } component={ Project }></Route>
            <Route exact path={ '/projet-panier-nantais' } component={ Project }></Route>
            <Route exact path={ '/projet-teester' } component={ Project }></Route>
            <Route exact path={ '/projet-uprigs' } component={ Project }></Route>
          </Switch>
        </HashRouter>
      </ParallaxProvider>
    );
  }
}

export default Routes;
