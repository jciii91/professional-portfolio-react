import React, { useState } from 'react';
import About from './components/About';
import ContactForm from './components/Contact';
import Header from './components/Header';
import Portfolio from './components/Portfolio';

function App() {
  const [sectionSelected, setSectionSelected] = useState('about');

  return (
    <div>
      <Header
        sectionSelected = {sectionSelected}
        setSectionSelected = {setSectionSelected}
      ></Header>
      <main>
        {sectionSelected === 'about' && (<About></About>)}
        {sectionSelected === 'portfolio' && (<Portfolio></Portfolio>)}
        {sectionSelected === 'contact' && (<ContactForm></ContactForm>)}
      </main>
    </div>
  );
}

export default App;
