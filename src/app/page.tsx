import React from 'react';
import Navbar from './components/Navbar';
import Section from './components/Sections';
import ExternalLinkButtonGrid from './components/matrizbuttons';
import Dropdown from './components/dropdown';
import DiscordLogo from "./components/images/discord.svg";
import NaPraticaLogo from "./components/images/naPraticaLogo.png";

const App: React.FC = () => {
  const dropdownItems = [
    { label: '0. Scratch', href: '/' },
    { label: '1. C', href: '/about' },
    { label: '2. Arrays', href: '/services' },
    { label: '3. Algoritmos', href: '/contact' },
    { label: '4. Memória', href: '/memory' },
    { label: '5. Estrutura de Dados', href: '/data-structures' },
    { label: '6. Python', href: '/python' },
    { label: '7. SQL', href: '/sql' },
    { label: '8. HTML, CSS, Javascript', href: '/web-development' },
  ];
  const navLinks = [
    
    { label: 'Acesse o CC50', url: 'https://perfil.napratica.org.br/e/pt-BR/auth?continue_to=https://perfil.napratica.org.br/e/ead/sso', img: NaPraticaLogo, alt: 'Na Prática logo.'},
    { label: 'Discord', url: 'https://discord.gg/axDzw2bzmg', img: DiscordLogo, alt: 'Discord logo.'},
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
        
        mediumText="Veja os monitores que estão ao vivo" largeText={''}      />
      <ExternalLinkButtonGrid />

    </div>
  );
};

export default App;
