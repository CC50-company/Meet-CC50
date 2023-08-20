"use client"
import React, { useState } from 'react';
import Image from 'next/image';

interface NavbarProps {
  links: { label: string; url: string, img: any, alt: string }[];
}

const Navbar: React.FC<NavbarProps> = ({ links }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="bg-gray-0 p-4 lg:p-9">
      <div className="flex items-center justify-between">
        <div className="font-bold text-lg md:text-3xl lg:text-4xl xl:text-5xl">CC50</div>
        {/* Menu responsivo para telas menores */}
        <div className="lg:hidden">
          <button
            onClick={toggleMenu}
            className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
          >
            <span className="sr-only">Toggle navigation</span>
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
        {/* Menu para telas maiores */}
        <ul className={`hidden lg:flex space-x-8 ${menuOpen ? 'block' : 'hidden'}`}>
          {links.map((link, index) => (
            <li key={index}>
              <a
                href={link.url}
                className="flex justify-between gap-2 text-md lg:text-lg xl:text-xl transition-colors duration-300 hover:text-gray-300"
                >
                <Image {... link.img} width={30} height={30} alt={link.alt}/>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
      {/* Menu deslizável para telas menores */}
      <div className={`lg:hidden mt-4 ${menuOpen ? 'block' : 'hidden'}`}>
        <ul className="space-y-2 float-right">
          {links.map((link, index) => (
            <li key={index} className=''>
              <a
                href={link.url}
                className="flex gap-2 text-md lg:text-lg xl:text-xl transition-colors duration-300 hover:text-gray-300"
              >
              <Image {... link.img} width={30} height={30} alt={link.alt}/>
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
