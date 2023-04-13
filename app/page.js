import Link from "next/link";
import Image from "next/image";

async function getProductListing() {
  const res = await fetch("https://fakestoreapi.com/products");
  return res.json();
}

export default async function Home() {
  const products = await getProductListing();

  return (
    <main className="container mx-auto">
      <h1 className="text-center text-4xl font-bold m-10">NextGram</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 auto-rows-max	 gap-6 m-10">
        {products.map((product) => (
          <Link key={product.id} href={`/product/${product.id}`}>
            <Image
              alt=""
              src={product.image}
              height={500}
              width={500}
              className="w-full object-cover aspect-square"
            />
            <h3 className="mt-2">{product.title}</h3>
          </Link>
        ))}
      </div>
    </main>
  );
}
