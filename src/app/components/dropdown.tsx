"use client"
import React, { useState, useEffect, useRef } from 'react';
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
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        closeDropdown();
      }
    };

    if (isOpen) {
      document.body.addEventListener('click', handleOutsideClick);
    }

    return () => {
      document.body.removeEventListener('click', handleOutsideClick);
    };
  }, [isOpen]);

  return (
    <div className="relative" ref={dropdownRef}>
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
