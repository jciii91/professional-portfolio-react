import React, { useState } from 'react';
import About from './components/About';
import Footer from './components/Footer';
import Header from './components/Header';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';

function App() {
  const [sectionSelected, setSectionSelected] = useState('about');

  return (
    <div className='container'>
      <div>
        <Header
          sectionSelected = {sectionSelected}
          setSectionSelected = {setSectionSelected}
        ></Header>
        <main>
          {sectionSelected === 'about' && (<About></About>)}
          {sectionSelected === 'portfolio' && (<Portfolio></Portfolio>)}
          {sectionSelected === 'resume' && (<Resume></Resume>)}
        </main>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
