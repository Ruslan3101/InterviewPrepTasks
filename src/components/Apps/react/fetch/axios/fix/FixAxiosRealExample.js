import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductDetails from "./ProductDetails"; // Adjust path as needed
import FixCodeMessage from "../../../../../../shared/ui/FixCodeMessage";

export function FixAxiosRealExample() {
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
    <div className="App">
      {products.length === 0 ? (
        <FixCodeMessage/>
      ) : (
        products.map((products) => <ProductDetails product={products} />)
      )}
    </div>
  );
}
