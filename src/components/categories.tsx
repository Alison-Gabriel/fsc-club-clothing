import { useState } from "react";

import type { Category } from "../types/category";
import CategoryItem from "./category-item";

const Categories = () => {
  const [categories] = useState<Category[]>([
    {
      id: "1",
      name: "chapeus",
      displayName: "Chapéus",
      imageUrl:
        "https://fastly.picsum.photos/id/90/1920/1080.jpg?hmac=ByhHZw9aMsbOV_LhjHJseKM1qlEZRn1yuwBq_-obtWo",
    },
    {
      id: "2",
      name: "tenis",
      displayName: "Tênis",
      imageUrl:
        "https://fastly.picsum.photos/id/740/1920/1080.jpg?hmac=hGzHYL3GUn8gr_0xLP7cSSt9DAUuDYDskOrmukxwAkA",
    },
    {
      id: "3",
      name: "jaquetas",
      displayName: "Jaquetas",
      imageUrl:
        "https://fastly.picsum.photos/id/506/1920/1080.jpg?hmac=EU57GOR9oWJN8E_wW_xZZ8BrLZ1aMp6TwT8M_Y0h7Qg",
    },
    {
      id: "4",
      name: "feminio",
      displayName: "Feminino",
      imageUrl:
        "https://fastly.picsum.photos/id/657/1920/1080.jpg?hmac=dV43NJtfU6xvNf-JKj9YN4MGMgn3JrgdiOktQdS5vVM",
    },
    {
      id: "5",
      name: "masculino",
      displayName: "Masculino",
      imageUrl:
        "https://fastly.picsum.photos/id/757/1920/1080.jpg?hmac=2lExxUlIL9Sr4cR2hPzdBO2zFrCErrqss_XsJHgp5YQ",
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
