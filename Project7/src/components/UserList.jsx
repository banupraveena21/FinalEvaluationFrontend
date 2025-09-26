// src/components/UserList.jsx
import React, { useEffect, useState } from 'react';

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch users from API
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching users:", err);
        setLoading(false);
      });
  }, []);

  return (
    <section className="min-h-screen px-4 py-20 text-center backdrop-blur-sm bg-white/70">
      <h2 className="text-4xl font-bold text-pink-900 mb-10 drop-shadow">User List</h2>

      {loading ? (
        <div className="flex justify-center items-center fade-in">
          <div className="w-16 h-16 border-4 border-pink-500 border-dashed rounded-full animate-spin"></div>
        </div>
      ) : (
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {users.map((user, index) => (
            <li
              key={user.id}
              className="bg-white/90 border-2 border-dotted border-pink-400 p-6 rounded-lg shadow-md transition-all transform hover:scale-105 hover:shadow-xl duration-500 animate-fadeIn"
              style={{
                animationDelay: `${index * 2000}ms`,
                animationFillMode: 'both'
              }}
            >
              <h3 className="text-lg font-semibold text-pink-700">{user.name}</h3>
              <p className="text-gray-600">{user.email}</p>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};

export default UserList;
