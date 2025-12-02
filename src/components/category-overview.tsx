import type { Category } from "../types/category";
import ProductItem from "./product-item";

interface CategoryOverviewProps {
  category: Category;
}

const CategoryOverview = ({ category }: CategoryOverviewProps) => {
  const firstFourProducts = category.products.slice(0, 4);

  return (
    <div className="flex w-full flex-col gap-2">
      <p className="mb-[5px] text-2xl font-medium">{category.displayName}</p>

      <div className="grid w-full grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
        {firstFourProducts.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default CategoryOverview;
