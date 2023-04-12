async function getProductDetails() {
  const res = await fetch("https://fakestoreapi.com/products/1");
  return res.json();
}

const BlogDetails = async () => {
  const product = await getProductDetails();
  return (
    <div key={product.id}>
      <p>{product.title}</p>
      <p>{product.description}</p>
      <p>Category: {product.category}</p>
      <hr />
    </div>
  );
};

export default BlogDetails;
