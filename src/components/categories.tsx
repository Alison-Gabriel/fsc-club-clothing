import { useCategory } from "../contexts/category";
import CategoryItem from "./category-item";
import Loading from "./loading";

const Categories = () => {
  const { categories, isFetchingCategories } = useCategory();

  return (
    <>
      {isFetchingCategories && <Loading />}

      <section className="grid grid-cols-2 gap-4 [&>article:nth-child(3)]:col-span-2">
        {categories.map((category) => (
          <CategoryItem key={category.id} category={category} />
        ))}
      </section>
    </>
  );
};

export default Categories;
