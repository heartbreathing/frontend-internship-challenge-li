import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-slate-950 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-2xl font-semibold">Home</Link>
        <div>
          <Link to="/products" className="text-white ml-4">Products</Link>
          <Link to="/about" className="text-white ml-4">About</Link>
          
        </div>
      </div>
    </nav>
  );
};

export default Navbar;