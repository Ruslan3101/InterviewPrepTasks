import React, { useState, useEffect } from "react";
import productList from "../list.json"; 
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


const DataFetchJSON = () => {
  return (
    <div className="App container mx-auto p-4">
      <div className="text-center text-gray-500">Loading...</div>

      <div className="text-center text-red-500">Error: </div>

      <div className="text-center text-gray-500">
        No product data available.
      </div>

      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <li className="border p-4 rounded-lg shadow-lg">
          <div className="font-bold">product name</div>

          <div>
            <div>
              <strong> </strong>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default DataFetchJSON;
