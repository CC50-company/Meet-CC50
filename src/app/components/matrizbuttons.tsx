// components/ExternalLinkButtonGrid.js
import React from 'react';
import ExternalLinkButton from '../components/button';

const ExternalLinkButtonGrid = () => {
  // Dados para os links externos
  const externalLinks = [
    { url: 'https://www.example1.com', label: '0.Scratch' },
    { url: 'https://www.example2.com', label: '1.C' },
    { url: 'https://www.example3.com', label: '2.Arrays' },
    { url: 'https://www.example4.com', label: '3.Algoritmos' },
    { url: 'https://www.example5.com', label: '4.Memória' },
    { url: 'https://www.example6.com', label: '5.Estrutura de Dados' },
    { url: 'https://www.example7.com', label: '6.Python' },
    { url: 'https://www.example8.com', label: '7.SQL' },
    { url: 'https://www.example9.com', label: '8.HTML,CSS,Javascript' },
  ];

  return (
    <div className="flex flex-wrap justify-around mx-auto max-w-7xl"/* "grid md:grid-cols-2 lg:grid-cols-3 gap-2 " */>
      {externalLinks.map((link, index) => (
        <div key={index} className="mb-2 mx-5">
          <ExternalLinkButton url={link.url} label={link.label} />
        </div>
      ))}
    </div>
  );
};

export default ExternalLinkButtonGrid;
