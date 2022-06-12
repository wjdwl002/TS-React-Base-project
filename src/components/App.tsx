import { authService } from 'fbase';
import Router from 'components/Router';
import { useState } from 'react';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(authService.currentUser);

  return (
    <>
      <Router isLoggedIn={isLoggedIn} />;
      <footer>&copy; {new Date().getFullYear()} Nwitter </footer>
    </>
  );
}

export default App;
