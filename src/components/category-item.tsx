import type { Category } from "../types/category";

interface CategoryItemProps {
  category: Category;
}

const CategoryItem = ({ category }: CategoryItemProps) => {
  return (
    <article
      className={`bg-brand-shadow flex h-[300px] max-h-full w-full items-center justify-center rounded-xl bg-[url('${category.imageUrl}')] bg-cover bg-center bg-no-repeat bg-blend-color shadow`}
    >
      <button className="bg-brand-translucent text-brand-foreground hover:bg-brand-translucent/80 rounded-lg px-5 py-3 shadow transition-all">
        <span className="font-bold">{category.displayName}</span>
      </button>
    </article>
  );
};

export default CategoryItem;
