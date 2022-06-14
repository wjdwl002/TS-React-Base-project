import React from 'react';
import { HashRouter as HashRouter, Route, Routes } from 'react-router-dom';
import Auth from 'routes/Auth';
import Home from 'routes/Home';
import firebase from 'firebase/compat/app';

interface IProps {
  isLoggedIn: firebase.User | null;
}

const Router: React.FC<IProps> = ({ isLoggedIn }) => (
  <Route>
    <Routes>
      <Auth />
    </Routes>
  </Route>
);

export default Router;
