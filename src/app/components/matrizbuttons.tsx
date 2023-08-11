// components/ExternalLinkButtonGrid.js
import React from 'react';
import ExternalLinkButton from '../components/button';

const ExternalLinkButtonGrid = () => {
  // Dados para os links externos
  const externalLinks = [
    { url: 'https://www.example1.com', label: '1.Scratch' },
    { url: 'https://www.example2.com', label: '2.C' },
    { url: 'https://www.example3.com', label: '3.Arrays' },
    { url: 'https://www.example4.com', label: '4.Algoritmos' },
    { url: 'https://www.example5.com', label: '5.Memória' },
    { url: 'https://www.example6.com', label: '6.Estrutura de Dados' },
    { url: 'https://www.example7.com', label: '7.Python' },
    { url: 'https://www.example8.com', label: '8.SQL' },
    { url: 'https://www.example9.com', label: '9.HTML,CSS,Javascript' },
  ];

  return (
    <div className="grid grid-cols-3 gap-2">
      {externalLinks.map((link, index) => (
        <div key={index} className="mb-2">
          <ExternalLinkButton url={link.url} label={link.label} />
        </div>
      ))}
    </div>
  );
};

export default ExternalLinkButtonGrid;
