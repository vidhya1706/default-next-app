import ProductCard from "../../../../components/ProductCard";
import Modal from "../../../../components/Modal";

async function getProductDetails(id) {
  const res = await fetch(`https://fakestoreapi.com/products/${id}`);
  return res.json();
}

export default async function ProductModal({ params }) {
  const product = await getProductDetails(params.id);

  return (
    <Modal>
      <div className="w-full">
        <h3>Product details</h3>
        <ProductCard product={product} />
      </div>
    </Modal>
  );
}
