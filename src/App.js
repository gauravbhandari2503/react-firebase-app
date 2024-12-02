import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products/Products";
import Books from "./pages/Books/Books";
import AddEditBook from "./pages/Books/AddEditBook";
import AddEditProduct from "./pages/Products/AddEditProduct";
import SignUp from "./pages/Auth/Signup";
import Login from "./pages/Auth/Login";
import PrivateRoute from "./Services/PrivateRoute";
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
        <Route path="/products" element={<Products />} />
        <Route path="/books" element={<Books />} />
        <Route path="/add-product" element={<AddEditProduct />} />
        <Route path="/edit-product/:id" element={<AddEditProduct />} />
        <Route path="/add-book" element={<AddEditBook />} />
        <Route path="/edit-book/:id" element={<AddEditBook />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
