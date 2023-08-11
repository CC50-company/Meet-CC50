import React from 'react';
import Navbar from './components/Navbar';
import Section from './components/Sections';
import ExternalLinkButtonGrid from './components/matrizbuttons';
import Dropdown from './components/dropdown';

const App: React.FC = () => {
  const dropdownItems = [
    { label: '1. Scratch', href: '/' },
    { label: '2. C', href: '/about' },
    { label: '3. Arrays', href: '/services' },
    { label: '4. Algoritmos', href: '/contact' },
    { label: '5. Memória', href: '/memory' },
    { label: '6. Estrutura de Dados', href: '/data-structures' },
    { label: '7. Python', href: '/python' },
    { label: '8. SQL', href: '/sql' },
    { label: '9. HTML, CSS, Javascript', href: '/web-development' },
  ];
  const navLinks = [
    { label: 'FAQ', url: '/' },
    { label: 'Acesse o CC50', url: '/about' },
    { label: 'Discord', url: '/about' },
  ];

  return (
    <div>
      <Navbar links={navLinks} />
      <Section
        largeText="Temos monitores(as) ao vivo para tirar suas dúvidas"
        mediumText="Selecione abaixo qual módulo você tem dúvida"
      />

      <div className="flex items-center justify-center mt-8 mb-16">
        <Dropdown title="Selecione aqui" items={dropdownItems} />
      </div>
      <Section
        
        mediumText="Veja os monitores que estão ao vivo"
      />
      <ExternalLinkButtonGrid />

    </div>
  );
};

export default App;
