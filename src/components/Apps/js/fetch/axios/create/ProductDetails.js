import React from "react";
function ProductDetails({ product }) {
  if (!product || !product.name) {
    console.log(product);
    // return <div>No product name available.</div>;
  }
  console.log(product);
  return <h3>{product.name}</h3>;
}
export default ProductDetails;
