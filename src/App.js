import React, { useState } from 'react';
import About from './components/About';
import ContactForm from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';

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
        {sectionSelected === 'resume' && (<Resume></Resume>)}
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
