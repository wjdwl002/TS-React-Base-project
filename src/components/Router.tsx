import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Auth from 'routes/Auth';
import Home from 'routes/Home';
import firebase from 'firebase/compat/app';

interface IProps {
  isLoggedIn: firebase.User | null;
}

const Router: React.FC<IProps> = ({ isLoggedIn }) => (
  <BrowserRouter>
    <Routes>
      {isLoggedIn ? (
        <Route path="/home" element={<Home />} />
      ) : (
        <Route path="/" element={<Auth />} />
      )}
    </Routes>
  </BrowserRouter>
);

export default Router;
