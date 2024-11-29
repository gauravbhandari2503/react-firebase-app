import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import { Link } from "react-router-dom";

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const productCollection = collection(db, "products");
      const productSnapshot = await getDocs(productCollection);
      setProducts(productSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    };
    fetchProducts();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-center text-blue-600 mb-8">Product List</h1>
        <div className="flex justify-end mb-4">
          <Link
            to="/add"
            className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
          >
            Add Product
          </Link>
        </div>
        <ul className="space-y-4">
          {products.map((product) => (
            <li
              key={product.id}
              className="bg-white shadow-lg rounded-lg p-4 flex justify-between items-center"
            >
              <div>
                <h3 className="text-xl font-semibold text-blue-500">{product.name}</h3>
                <p className="text-gray-600">${product.price}</p>
              </div>
              <Link
                to={`/edit/${product.id}`}
                className="text-blue-500 hover:underline"
              >
                Edit
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Home;
