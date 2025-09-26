import React, { useState } from 'react';
import Navbar from './components/Navbar';
import UserList from './components/UserList';

function App() {
  const [active, setActive] = useState('users'); // default section

  return (
    <div
    className="min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1470&q=80')"
      }}
    >
      <Navbar active={active} setActive={setActive} />

      {active === 'about' && (
        <section
          id="about"
          className="min-h-screen flex flex-col items-center justify-center  px-6 py-20 text-center max-w-4xl mx-auto"
        >
          <h2 className="text-4xl font-bold text-pink-900 mb-6">About This Project</h2>
          <p className="text-lg text-white leading-relaxed">
            This is a simple React app built with Vite and styled using Tailwind CSS.
            It demonstrates fetching user data from a public API and displaying it in a clean,
            responsive list format. The goal is to practice React hooks, asynchronous data fetching,
            and building user-friendly UI components with smooth loading animations.
          </p>
          <p className="mt-4 text-white italic">
            Crafted with ❤️ by Banu Praveena for a final evaluation project.
          </p>
        </section>
      )}

      {active === 'contact' && (
        <section
          id="contact"
          className="min-h-screen px-6 py-20 text-center max-w-4xl mx-auto"
        >
          <h2 className="text-4xl font-bold text-pink-600 mb-6">Get in Touch</h2>
          <p className="text-gray-900 mb-8 max-w-xl mx-auto">
            Have questions or want to connect? Feel free to reach out using the form below or send me an email directly.
          </p>

          <form className="max-w-md mx-auto space-y-6">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 border border-pink-900 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 border border-pink-900 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400"
              required
            />
            <textarea
              rows="5"
              placeholder="Your Message"
              className="w-full p-3 border border-pink-900 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400"
              required
            ></textarea>
            <button
              type="submit"
              className="bg-pink-600 text-white px-6 py-3 rounded-md hover:bg-pink-900 hover:scale-105 transform transition duration-300 shadow-md"
            >
              Send Message
            </button>
          </form>
        </section>
      )}

      {active === 'users' && <UserList />}

      {/* Optional footer can be here */}
    </div>
  );
}

export default App;
