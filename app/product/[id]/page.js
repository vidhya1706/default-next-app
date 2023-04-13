import React from "react";
import ProductCard from "../../../components/ProductCard";

async function getProductDetails(id) {
  const res = await fetch(`https://fakestoreapi.com/products/${id}`);
  return res.json();
}

export default async function ProductDetails({ params }) {
  console.log("Vidhya req ", req);
  const product = await getProductDetails(params.id);

  return (
    <div className="container mx-auto my-10">
      <div className="w-1/2 mx-auto border border-gray-700">
        <ProductCard product={product} />
      </div>
    </div>
  );
}
