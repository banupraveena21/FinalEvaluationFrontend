// src/components/Navbar.jsx
import React from 'react';

const Navbar = ({ active, setActive }) => {
  const links = [
    { id: 'users', label: 'Users' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50 ">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="text-2xl font-bold text-pink-600 tracking-wide hover:scale-105 transition duration-300">
            UserListApp
          </div>

          <div className="flex space-x-6">
            {links.map((link) => (
              <button
                key={link.id}
                onClick={() => setActive(link.id)}
                className={`relative text-lg transition duration-300 ease-in-out ${
                  active === link.id
                    ? 'text-pink-600 font-semibold'
                    : 'text-gray-700 hover:text-pink-500'
                }`}
              >
                {link.label}
                {active === link.id && (
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-pink-600 transition-all duration-300"></span>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
