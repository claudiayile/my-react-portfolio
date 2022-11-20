import React, { useState } from 'react';
import About from './components/About';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';

import './App.css';

function App() {
  return (
    <div className="App">
        <About></About>
        <Contact></Contact>
        <Portfolio></Portfolio>
    </div>
  );
}

export default App;