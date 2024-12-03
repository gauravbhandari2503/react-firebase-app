import React from "react";
import { useAuth } from "./../hooks/useAuth";

const Home = () => {
  const { currentUser } = useAuth();
  console.log(currentUser);
  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-center text-blue-600 mb-8">
            Welcome to React Firebase App! <br></br>
            {currentUser && <span>Welcome {currentUser.email}</span>}
        </h1>
      </div>
    </div>
  );
};

export default Home;
