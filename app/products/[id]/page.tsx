import ProductCard from "../../components/ProductCard";

async function getProductDetails(id: string) {
  const res = await fetch(`https://fakestoreapi.com/products/${id}`);
  return res.json();
}

const BlogDetails = async ({ params }: { params: { id: string } }) => {
  console.log("Vidhya params ", params);
  const product = await getProductDetails(params.id);
  return (
    <ProductCard key={product.id} product={product} enableNavigation={false} />
  );
};

export default BlogDetails;
