import React, { useState, useEffect } from "react";
import productList from "../list.json"; // Adjust the path as necessary

interface Data {
  color?: string;
  capacity?: string;
  price?: number;

  generation?: string;
  year?: number;
  "CPU model"?: string;
  "Hard disk size"?: string;
  "Strap Color"?: string;
  "Case Size"?: string;
  Color?: string;
  Description?: string;
  "Screen size"?: number;
  Capacity?: string;
  Generation?: string;
  Price?: string;
}

interface Product {
  id: string;
  name: string;
  data: Data | null;
}

const DataFetchJSON = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    try {
      setProducts(productList);
      setIsLoading(false);
    } catch (error) {
      setError("Failed to load data");
      console.error(error)
      setIsLoading(false);
    }
  }, []);

  return (
    <div className="App container mx-auto p-4">
      {isLoading ? (
        <div className="text-center text-gray-500">Loading...</div>
      ) : error ? (
        <div className="text-center text-red-500">Error: {error}</div>
      ) : products.length === 0 ? (
        <div className="text-center text-gray-500">
          No product data available.
        </div>
      ) : (
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {products.map((product) => (
            <li key={product.id} className="border p-4 rounded-lg shadow-lg">
              <div className="font-bold">{product.name}</div>
              {product.data && (
                <div>
                  {Object.entries(product.data).map(([key, value]) => (
                    <div key={key}>
                      <strong>{key}: </strong> {value}
                    </div>
                  ))}
                </div>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DataFetchJSON;
