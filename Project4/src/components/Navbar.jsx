// src/components/Navbar.jsx
import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [active, setActive] = useState('home');

  const links = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ];

  // Update active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const offsets = links.map(link => {
        const el = document.getElementById(link.id);
        return {
          id: link.id,
          offsetTop: el?.offsetTop || 0,
        };
      });

      const current = offsets.reduce((acc, cur) =>
        scrollY >= cur.offsetTop - 120 ? cur.id : acc, 'home'
      );

      setActive(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="text-2xl font-bold text-pink-700">MyPortfolio</div>
          <div className="flex space-x-6">
            {links.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={() => setActive(link.id)}
                className={`relative group text-lg font-medium transition duration-300 ${
                  active === link.id ? 'text-pink-600' : 'text-gray-700'
                } hover:text-pink-500`}
              >
                {link.label}
                <span
                  className={`absolute left-0 -bottom-1 h-0.5 bg-pink-600 transition-all duration-300 ease-in-out ${
                    active === link.id ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
