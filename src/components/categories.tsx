import { useState } from "react";

import type { Category } from "../types/category";
import CategoryItem from "./category-item";

const Categories = () => {
  const [categories] = useState<Category[]>([
    {
      id: "1",
      name: "chapeus",
      displayName: "Chapéus",
      imageUrl: "https://picsum.photos/1920/1080",
    },
    {
      id: "2",
      name: "tenis",
      displayName: "Tênis",
      imageUrl: "https://picsum.photos/1920/1080",
    },
    {
      id: "3",
      name: "jaquetas",
      displayName: "Jaquetas",
      imageUrl: "https://picsum.photos/1920/1080",
    },
    {
      id: "4",
      name: "feminio",
      displayName: "Feminino",
      imageUrl: "https://picsum.photos/1920/1080",
    },
    {
      id: "5",
      name: "masculino",
      displayName: "Masculino",
      imageUrl: "https://picsum.photos/1920/1080",
    },
  ]);

  return (
    <section className="grid grid-cols-2 gap-4 [&>article:nth-child(3)]:col-span-2">
      {categories.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </section>
  );
};

export default Categories;
