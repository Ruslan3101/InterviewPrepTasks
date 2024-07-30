import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductDetails from "./ProductDetails"; // Adjust path as needed
import FixCodeMessage from "../../../../../shared/ui/FixCodeMessage";

export function AxiosAPI() {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    // try {
    //   const response = axios.get("https://api.restful-api.dev/objects");
    //   setProducts(response);
    // } catch (error) {
    //   console.error("Error fetching products:", error);
    // }
  };

  useEffect(() => {
    getProducts();
    setInterval(getProducts, 10000);
  });

  return (
    <div className="App container mx-auto p-4">
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((product) => (
          <li key={product.id} className="border p-4 rounded-lg shadow-lg">
            <ProductDetails product={product} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AxiosAPI;
