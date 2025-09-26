// src/App.jsx
import React from 'react';
import Navbar from './components/Navbar';
import './App.css';

function App() {
  return (
    <div>
      <Navbar />

      {/* Home Section */}
      <section
        id="home"
        className="min-h-screen flex flex-col items-center justify-center text-center bg-gradient-to-br from-pink-100 to-white px-4"
      >
        <h1 className="text-5xl font-bold text-pink-700 mb-4">Hi, I'm Banu Praveena <span className="wave-hand">👋</span></h1>
        <p className="text-lg max-w-2xl text-gray-700">
          A passionate web developer who loves turning ideas into responsive, interactive, and beautiful websites.
          Skilled in HTML, CSS, JavaScript, React, Tailwind, and more.
        </p>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="min-h-screen flex flex-col items-center justify-center bg-white px-4 py-20 text-center"
      >
        <h2 className="text-4xl font-bold text-pink-700 mb-6">About Me</h2>
        <p className="text-lg max-w-3xl text-gray-700 leading-relaxed">
          I'm a dedicated web developer with a strong foundation in front-end technologies like React, Tailwind CSS, and Bootstrap.
          I enjoy solving real-world problems through clean code and elegant design.
          I'm continuously learning and always excited to explore new tools and frameworks to enhance my development workflow.
        </p>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="min-h-screen bg-gradient-to-br from-pink-100 to-white px-4 py-20 text-center"
      >
        <h2 className="text-4xl font-bold text-pink-700 mb-10">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Project 1 */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
            <h3 className="text-xl font-semibold mb-2 text-pink-600">Baby Products Website</h3>
            <p className="text-gray-700 mb-2">
              A responsive e-commerce site to showcase and sell baby products.
            </p>
            <a
              href="https://prototype9babyproducts.onrender.com"
              target="_blank"
              className="text-pink-600 hover:underline"
              rel="noopener noreferrer"
            >
              Visit Site →
            </a>
          </div>

          {/* Project 2 */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
            <h3 className="text-xl font-semibold mb-2 text-pink-600">Bakery Website</h3>
            <p className="text-gray-700 mb-2">
              A modern, visually appealing bakery site built using Django and Python.
            </p>
            <a
              href="https://prototype10bakerywebsite.onrender.com"
              target="_blank"
              className="text-pink-600 hover:underline"
              rel="noopener noreferrer"
            >
              Visit Site →
            </a>
          </div>

          {/* Project 3 */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
            <h3 className="text-xl font-semibold mb-2 text-pink-600">Meditation Dashboard</h3>
            <p className="text-gray-700 mb-2">
              A React-based dashboard to track meditation sessions using charts.
            </p>
            <a
              href="https://prototype11meditationwebsite.onrender.com"
              target="_blank"
              className="text-pink-600 hover:underline"
              rel="noopener noreferrer"
            >
              Visit Site →
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="min-h-screen bg-white px-4 py-20 text-center"
      >
        <h2 className="text-4xl font-bold text-pink-700 mb-6">Contact Me</h2>
        <p className="text-gray-700 mb-8 max-w-xl mx-auto">
          Have a project or idea you’d like to discuss? I’d love to hear from you! Fill out the form below or email me directly.
        </p>

        <form className="max-w-xl mx-auto space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400"
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400"
            required
          />
          <textarea
            rows="5"
            placeholder="Your Message"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400"
            required
          ></textarea>
          <button
            type="submit"
            className="bg-pink-600 text-white px-6 py-3 rounded-md hover:bg-pink-700 hover:scale-105 transform transition duration-300 shadow-md"
          >
            Send Message
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer className="bg-pink-100 py-4 text-center text-gray-600">
        © 2025 Banu Praveena. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
