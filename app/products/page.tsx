import ProductCard from "../components/ProductCard";

async function getProductListing() {
  const res = await fetch("https://fakestoreapi.com/products");
  return res.json();
}

const ProductListing = async () => {
  const products = await getProductListing();

  return (
    <div>
      <h3>Products available</h3>
      {products.map((product: any) => (
        <ProductCard key={product.id} product={product} enableNavigation />
      ))}
    </div>
  );
};

export default ProductListing;
