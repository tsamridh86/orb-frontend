import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Registration from '../Registration/Registration';
import Login from '../Login/Login';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/register">
        <Registration />
      </Route>
      <Route path="/">
        <Login />
      </Route>
    </Switch>
  </BrowserRouter>
);

export default Router;
