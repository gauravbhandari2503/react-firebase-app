import React from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-8">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md text-center">
        <h2 className="text-4xl font-bold text-blue-600 mb-4">404</h2>
        <p className="text-lg text-gray-700 mb-6">Oops! The page you're looking for does not exist.</p>
        <button
          onClick={() => navigate("/")}
          className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
        >
          Go to Home
        </button>
      </div>
    </div>
  );
};

export default NotFound;
