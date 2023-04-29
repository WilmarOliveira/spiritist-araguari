import React from 'react';
import GlobalStyle from './theme/globalStyle';
import { Header } from './components/Header';
import { Home } from './pages/Home';
 
function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Home />
    </>
  );
}
 
export default App;