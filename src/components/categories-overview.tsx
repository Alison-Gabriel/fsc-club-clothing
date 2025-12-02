import { useCategory } from "../contexts/category";

const CategoriesOverview = () => {
  const { categories } = useCategory();

  return (
    <div className="space-y-5 p-5">
      {categories.map((category) => (
        <div key={category.id}>
          <h2>{category.displayName}</h2>

          <div className="grid grid-cols-4">
            {category.products.slice(0, 4).map((product) => (
              <p key={product.id}>{product.name}</p>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CategoriesOverview;
