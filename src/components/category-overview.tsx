import type { Category } from "../types/category";
import ProductItem from "./product-item";

interface CategoryOverviewProps {
  category: Category;
}

const CategoryOverview = ({ category }: CategoryOverviewProps) => {
  const firstFourProducts = category.products.slice(0, 4);

  return (
    <div className="flex w-full flex-col">
      <p className="mb-[5px] text-xl font-medium">{category.displayName}</p>

      <div className="flex w-full flex-wrap justify-between">
        {firstFourProducts.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default CategoryOverview;
