import { useCategory } from "../contexts/category";
import CategoryOverview from "./category-overview";

const CategoriesOverview = () => {
  const { categories } = useCategory();

  return (
    <div className="space-y-5 p-5">
      {categories.map((category) => (
        <CategoryOverview key={category.id} category={category} />
      ))}
    </div>
  );
};

export default CategoriesOverview;
