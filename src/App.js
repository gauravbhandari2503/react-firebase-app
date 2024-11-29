import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AddEditProduct from "./pages/AddEditProduct";
import SignUp from "./pages/Signup";
import Login from "./pages/Login";
import PrivateRoute from "./Components/PrivateRoute";
import ProtectedLayout from "./Layout/ProtectedLayout";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />

      {/* Protected Routes */}
      <Route
        element={
          <PrivateRoute>
            <ProtectedLayout />
          </PrivateRoute>
        }
      >
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<AddEditProduct />} />
        <Route path="/edit/:id" element={<AddEditProduct />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
