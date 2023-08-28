import React from 'react';
import Navbar from './components/Navbar';
import Section from './components/Sections';
import ExternalLinkButtonGrid from './components/matrizbuttons';
import Dropdown from './components/dropdown';
import DiscordLogo from "./components/images/discord.svg";
import CC50 from "./components/images/cc50.svg";

const App: React.FC = () => {
    {/* 
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
  ]; */}
  const navLinks = [
    
    { label: '< Acesse o CC50 /> ', url: 'https://perfil.napratica.org.br/e/pt-BR/auth?continue_to=https://perfil.napratica.org.br/e/ead/sso', img: CC50, alt: 'Na Prática logo.'},
    { label: 'Discord', url: 'https://discord.gg/axDzw2bzmg', img: DiscordLogo, alt: 'Discord logo.'},
  ];
  const externalLinks = [
    { url: 'https://meet.google.com/upt-ywqs-tdu', label: '0.Scratch' },
    { url: 'https://meet.google.com/ubu-wudr-siy', label: '1.C' },
    { url: 'https://meet.google.com/ucp-sszi-uta', label: '2.Arrays' },
    { url: 'https://meet.google.com/bnn-uqji-pmf', label: '3.Algoritmos' },
    { url: 'https://meet.google.com/dju-iwpy-ouz', label: '4.Memória' },
    { url: 'https://meet.google.com/qyn-qmeo-edn', label: '5.Estrutura de Dados' },
    { url: 'https://meet.google.com/tky-unae-mgo', label: '6.Python' },
    { url: 'https://meet.google.com/qet-ukss-qbe', label: '7.SQL' },
    { url: 'https://meet.google.com/asz-icqb-bvc', label: '8.HTML,CSS,Javascript' },
  ];
  const linkemail = [
    { url: 'relacionamento@estudar.org.br', label: 'relacionamento@estudar.org.br' },
   
  ];
  const mailtoLinkEmail = linkemail.map(item => ({
    ...item,
    url: `mailto:${item.url}`,
  }));
  return (
    <div>
      <Navbar links={navLinks} />
      <Section
        largeText="Temos monitores(as) ao vivo para tirar suas dúvidas"
        mediumText="Selecione abaixo qual módulo você tem dúvida"
      />

      {/* <div className="flex items-center justify-center mt-8 mb-16">
        <Dropdown title="Selecione aqui" items={dropdownItems} />
      </div>  */}
       {/* <Section
        
        mediumText="Veja os monitores que estão ao vivo" largeText={''}      />*/}
      <ExternalLinkButtonGrid links={externalLinks} />
      <Section
        
        mediumText="Caso tenha alguma dúvida que não foi respondida entrar em contato com:" largeText={''}      />
      <ExternalLinkButtonGrid links={mailtoLinkEmail} />
      
    </div>
  );
};

export default App;
