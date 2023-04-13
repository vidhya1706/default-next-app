import Image from "next/image";

export default function ProductCard({ product }) {
  return (
    <>
      <Image
        alt=""
        src={product.image}
        height={600}
        width={600}
        className="w-full object-cover aspect-square col-span-2"
      />

      <div className="bg-white p-4 px-6">
        <h3>{product.title}</h3>
        <h3>{product.description}</h3>
      </div>
    </>
  );
}
