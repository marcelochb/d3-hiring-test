import React from "react";
import { Route, Switch } from "react-router-dom";

import { HomeRoute } from './HomeRoute';

export const Routes = () => (
  <Switch>
    <Route exact path="/">
      <HomeRoute />
    </Route>
  </Switch>
);
