import React from 'react';
import About from './components/About';
import ContactForm from './components/Contact';
import Header from './components/Header';
import Portfolio from './components/Portfolio';

function App() {
  return (
    <div>
      <Header></Header>
      <main>
        <About></About>
        <Portfolio></Portfolio>
        <ContactForm></ContactForm>
      </main>
    </div>
  );
}

export default App;
