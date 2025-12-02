import type { Product } from "../types/product";

interface ProductItemProps {
  product: Product;
}

const ProductItem = ({ product }: ProductItemProps) => {
  return (
    <div className="flex max-w-full flex-col">
      <div
        style={{ backgroundImage: `url(${product.imageUrl})` }}
        className={`shadow-brand-darken-blend h-[460px] w-full rounded-[10px] bg-cover bg-center bg-no-repeat shadow`}
      />

      <div className="mt-1 flex justify-between">
        <p className="truncate font-medium">{product.name}</p>
        <p className="font-medium">
          {new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(product.price)}
        </p>
      </div>
    </div>
  );
};

export default ProductItem;
