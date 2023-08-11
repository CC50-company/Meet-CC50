"use client"
import React, { useState } from 'react';
import { BsChevronDown } from 'react-icons/bs';

interface DropdownItem {
  label: string;
  href: string;
}

interface Props {
  title: string;
  items: DropdownItem[];
}

const Dropdown: React.FC<Props> = ({ title, items }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <button
        onClick={toggleDropdown}
        className="flex items-center text-400 hover:text--900 focus:outline-none"
      >
        <span className="hover:text-white-900">{title}</span>
        <BsChevronDown className={`ml-2 ${isOpen ? 'transform rotate-180' : ''}`} />
      </button>
      {isOpen && (
        <div className="absolute mt-2 w-48 bg-white border rounded shadow-lg max-h-56 overflow-y-auto">
          <ul>
            {items.map((item, index) => (
              <li key={index} className="px-4 py-2">
                <a href={item.href} className="text-gray-700 hover:text-gray-900">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
