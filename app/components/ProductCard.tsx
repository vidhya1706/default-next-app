"use client";

import { useRouter } from "next/navigation";

const ProductCard = ({ product, enableNavigation }: any) => {
  const router = useRouter();

  const onPageNavigate = () => {
    if (enableNavigation) {
      router.push(`products/${product.id}`);
    }
  };
  return (
    <div onClick={onPageNavigate}>
      <p>{product.title}</p>
      <p>{product.description}</p>
      <p>Category: {product.category}</p>
      <hr />
    </div>
  );
};

export default ProductCard;
