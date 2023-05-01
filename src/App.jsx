import React from 'react';
import { Header } from './components/Header';
import { Home } from './pages/Home';
import { Theme } from './theme/Theme';
import { Footer } from './components/Footer';
 
function App() {
  return (
    <Theme>
      <Header />
      <Home />
      <Footer />
    </Theme>
  );
}
 
export default App;