import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductDetails from "./ProductDetails";

const AnswerAxiosRealExample = () => {
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
    <div className="App">
      {products.length === 0 ? (
        <div>No product data available.</div>
      ) : (
        <ul>
          {products.map((product) => (
            <li key={product.id}>
              <ProductDetails product={product} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AnswerAxiosRealExample;
