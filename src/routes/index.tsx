import React from "react";
import { Route, Switch } from "react-router-dom";

import { HomeRoute } from './HomeRoute';
import { DetailCountryRoute } from './DetailCountryRoute'

export const Routes = () => (
  <Switch>
    <Route exact path="/">
      <HomeRoute />
    </Route>

    <Route path="/:countryname" >
      <DetailCountryRoute />
    </Route>
  </Switch>
);
