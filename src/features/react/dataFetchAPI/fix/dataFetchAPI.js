import React, { useEffect, useState } from "react";
import ProductDetails from "./ProductDetails"; // Adjust path as needed

export function FetchAPI() {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    try {
      const response = await fetch("https://api.restful-api.dev/objects");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setProducts(data.someNonExistentProperty); 
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    getProducts();
    setInterval(getProducts, 10000);
  }, []);

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

export default FetchAPI;
