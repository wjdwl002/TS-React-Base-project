import React from 'react';
import { HashRouter as HashRouter, Route, Switch } from 'react-router-dom';
import Auth from 'routes/Auth';
import Home from 'routes/Home';

const Router = (isLoggedIn: boolean) => {
  return (
    <Router>
      <Switch>
        {isLoggedIn ? (
          <>
            <Route>
              <Home />
            </Route>
          </>
        ) : (
          <Auth />
        )}
      </Switch>
    </Router>
  );
};

export default Router;
