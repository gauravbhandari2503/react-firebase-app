import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebase";

const Header = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    auth.signOut();
    navigate("/login");
  };

  return (
    <header className="bg-blue-600 text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">Product Management</h1>
        <nav className="flex space-x-4">
          <Link to="/" className="hover:underline">
            Home
          </Link>
          <Link to="/books" className="hover:underline">
            Books
          </Link>
          <Link to="/products" className="hover:underline">
            Products
          </Link>
          <button
            onClick={handleLogout}
            className="bg-red-500 px-3 py-1 rounded-lg hover:bg-red-600"
          >
            Logout
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
