import React from "react";
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";

import { Home } from './pages/Home';
import { Login } from './pages/Login';

export function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}