import React from 'react';

interface NavbarProps {
  links: { label: string; url: string }[];
}

const Navbar: React.FC<NavbarProps> = ({ links }) => {
  return (
    <nav className="bg-gray-0 p-4 lg:p-9">
      <div className="flex items-center justify-between">
        <div className="text-white font-bold text-lg md:text-3xl lg:text-4xl xl:text-5xl">CC50</div>
        {/* Menu responsivo para telas menores */}
        <ul className="hidden lg:flex space-x-8">
          {links.map((link, index) => (
            <li key={index}>
              {/* Aplicar classes CSS para animação no hover */}
              <a
                href={link.url}
                className="text-white text-md lg:text-lg xl:text-xl transition-colors duration-300 hover:text-gray-300"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        {/* Ícone do menu responsivo para telas menores */}
        <div className="lg:hidden">
          
        </div>
      </div>
      {/* Menu deslizável para telas menores */}
      <div className="lg:hidden mt-4">
        <ul className="space-y-2">
          {links.map((link, index) => (
            <li key={index}>
              <a
                href={link.url}
                className="text-white text-md lg:text-lg xl:text-xl transition-colors duration-300 hover:text-gray-300 block"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
