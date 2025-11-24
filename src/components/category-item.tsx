import type { Category } from "../types/category";

interface CategoryItemProps {
  category: Category;
}

const CategoryItem = ({ category }: CategoryItemProps) => {
  return (
    <article
      style={{ backgroundImage: `url(${category.imageUrl})` }}
      className="bg-brand-darken-blend flex h-[300px] max-h-full w-full items-center justify-center rounded-xl bg-cover bg-center bg-no-repeat bg-blend-color shadow"
    >
      <button className="bg-brand-translucent text-brand-foreground hover:bg-brand-translucent/80 rounded-lg px-6 py-3 shadow-lg transition-all">
        <span className="font-bold">{category.displayName}</span>
      </button>
    </article>
  );
};

export default CategoryItem;
