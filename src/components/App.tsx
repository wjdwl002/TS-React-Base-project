import { authService } from 'fbase';
import Router from 'components/Router';
import { useState } from 'react';
import React from 'react';

const App: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(authService.currentUser);

  return (
    <>
      <Router isLoggedIn={isLoggedIn} />
      <footer>&copy; {new Date().getFullYear()} Nwitter</footer>
    </>
  );
};

export default App;
