import React from "react";
import ProductCard from "../../../components/ProductCard";

async function getProductDetails(id) {
  const res = await fetch(`https://fakestoreapi.com/products/${id}`);
  return res.json();
}

export async function generateMetadata({ params }) {
  const product = await getProductDetails(params.id);
  return { title: product.title };
}

export default async function ProductDetails({ params }) {
  const product = await getProductDetails(params.id);

  return (
    <div className="container mx-auto my-10">
      <div className="w-[300px] mx-auto border border-gray-700">
        <ProductCard product={product} />
      </div>
    </div>
  );
}
