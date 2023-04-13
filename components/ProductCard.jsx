import Image from "next/image";

export default function ProductCard({ product }) {
  return (
    <>
      <div className="bg-white p-4 px-6 ">
        <h3>{product.title}</h3>
        <br />
        <h3>{product.description}</h3>
      </div>
    </>
  );
}
