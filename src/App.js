import React from 'react';
import About from './components/About';
import Header from './components/Header';
import Portfolio from './components/Portfolio';

function App() {
  return (
    <div>
      <Header></Header>
      <main>
        <About></About>
        <Portfolio></Portfolio>
      </main>
    </div>
  );
}

export default App;
