import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductDetails from "./ProductDetails";

const AxiosAPI = () => {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    try {
      console.log("Fetching products...");
      const response = await axios.get("https://api.restful-api.dev/objects");
      setProducts(response.data);
      console.log("API response:", response.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    getProducts();
    // const intervalId = setInterval(getProducts, 10000);
    // return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="App container mx-auto p-4">
      {products.length === 0 ? (
        <div className="text-center text-gray-500">
          No product data available.
        </div>
      ) : (
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {products.map((product) => (
            <li key={product.id} className="border p-4 rounded-lg shadow-lg">
              <ProductDetails product={product} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AxiosAPI;
