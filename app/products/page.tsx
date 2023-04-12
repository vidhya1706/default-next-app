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
        <div key={product.id}>
          <p>{product.title}</p>
          <p>{product.description}</p>
          <p>Category: {product.category}</p>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default ProductListing;
