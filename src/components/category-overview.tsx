import type { Category } from "../types/category";

interface CategoryOverviewProps {
  category: Category;
}

const CategoryOverview = ({ category }: CategoryOverviewProps) => {
  return (
    <div className="flex w-full flex-col">
      <p className="mb-[5px] text-xl font-medium">{category.displayName}</p>

      <div className="flex w-full flex-wrap content-between">
        {category.products.slice(0, 4).map((product) => (
          <p key={product.id}>{product.name}</p>
        ))}
      </div>
    </div>
  );
};

export default CategoryOverview;
