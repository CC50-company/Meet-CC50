import React from 'react';
import Navbar from './components/Navbar';
import Section from './components/Sections';
import ExternalLinkButtonGrid from './components/matrizbuttons';
const App: React.FC = () => {
  const navLinks = [
    { label: 'FAQ', url: '/' },
    { label: 'Acesse o CC50', url: '/about' },
    { label: 'Discord', url: '/about' },
  ];

  return (
    <div>
      <Navbar links={navLinks} />
      <Section
        largeText="Temos monitores(a) ao vivo para tirar suas dúvidas"
        mediumText="Selecione abaixo qual módulo você tem dúvida"
      />
      <ExternalLinkButtonGrid />
     
    </div>
  );
};

export default App;
