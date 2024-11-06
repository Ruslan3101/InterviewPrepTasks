import React, { useEffect, useState } from "react";
import ProductDetails from "./ProductDetails";

const FetchAPI = () => {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    try {
      console.log("Fetching products...");
      const response = await fetch("https://api.restful-api.dev/objects");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setProducts(data);
      console.log("API response:", data);
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

export default FetchAPI;
