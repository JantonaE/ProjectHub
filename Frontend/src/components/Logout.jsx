import React from 'react';

const LogoutButton = ({ setUser }) => {
  const handleClick = () => {
    setUser(null); // Llama a la función setUser con null
  };

  return (
    <a href="/" onClick={handleClick} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
      Logout
    </a>
  );
};

export default LogoutButton;
