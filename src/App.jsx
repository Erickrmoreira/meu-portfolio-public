import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Sobre from './components/Sobre';
import Habilidades from './components/Habilidades';
import Servicos from './components/Servicos';
import Portfolio from './components/Portfolio';
import Contato from './components/Contato';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Sobre />
      <Habilidades />
      <Servicos />
      <Portfolio />
      <Contato />
      <Footer />
    </div>
  );
}

export default App;