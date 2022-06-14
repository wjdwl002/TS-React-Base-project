import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from 'routes/Home';

const Router: React.FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/home" element={<Home />} />
    </Routes>
  </BrowserRouter>
);

export default Router;
