import React from "react";
import { useSelector } from "react-redux";

const Header = () => {
  const user = useSelector((state) => state.auth.user);

  return (
    <header className="bg-gray-800 text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">My App</h1>
        {user ? (
          <p className="text-lg">Welcome, {user.name}!</p>
        ) : (
          <a href="/login" className="text-lg underline">
            Login
          </a>
        )}
      </div>
    </header>
  );
};

export default Header;