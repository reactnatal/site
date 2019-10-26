import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import EventCall from './containers/EventCall/EventCall';
import CodeOfConduct from './containers/CodeOfConduct/CodeOfConduct';
import Navigation from './components/Navigation/Navigation';

const Routes = () => (
  <BrowserRouter>
    <Navigation />
    <Switch>
      <Route path="/codigo-de-conduta">
        <CodeOfConduct />
      </Route>
      <Route path="/">
        <EventCall />
      </Route>
    </Switch>
  </BrowserRouter>
);

export default Routes;
