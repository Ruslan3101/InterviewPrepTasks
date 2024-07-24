import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductDetails from "./ProductDetails";

function AxiosAPI() {
  // by using axios fetch product name https://api.restful-api.dev/objects with an interval of a 10 seconds

  const getProducts = async () => {};

  return (
    <div className="App">
      Create a product list
      <div className="App container mx-auto p-4">
        
          <div className="text-center text-gray-500">
            No product data available.
          </div>
     
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
           
              <li className="border p-4 rounded-lg shadow-lg">
               
              </li>
           
          </ul>
     
      </div>
    </div>
  );
}
export default AxiosAPI;
