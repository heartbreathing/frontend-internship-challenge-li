import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-2xl font-semibold">Home</Link>
        <div>
          <Link to="/about" className="text-white ml-4">About</Link>
          <Link to="/products" className="text-white ml-4">Products</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;