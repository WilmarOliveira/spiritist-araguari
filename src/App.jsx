import React from 'react';
import { Header } from './components/Header';
import { Home } from './pages/Home';
import { Theme } from './theme/Theme';
 
function App() {
  return (
    <Theme>
      <Header />
      <Home />
    </Theme>
  );
}
 
export default App;