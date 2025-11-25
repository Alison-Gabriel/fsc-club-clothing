import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";

import { categoryConverter } from "../converters/firestore-converter";
import { db } from "../lib/firebase";
import type { Category } from "../types/category";
import CategoryItem from "./category-item";

const Categories = () => {
  const [categories, setCategories] = useState<Category[]>([]);

  const fetchCategoriesFromFirestore = async () => {
    try {
      const categoriesSnapshot = await getDocs(
        collection(db, "categories").withConverter(categoryConverter),
      );
      const categoriesFromFirestore: Category[] = [];

      categoriesSnapshot.forEach((category) => {
        categoriesFromFirestore.push(category.data());
      });

      setCategories(categoriesFromFirestore);
    } catch (error) {
      console.error((error as Error).message);
    }
  };

  useEffect(() => {
    fetchCategoriesFromFirestore();
  }, []);

  return (
    <section className="grid grid-cols-2 gap-4 [&>article:nth-child(3)]:col-span-2">
      {categories.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </section>
  );
};

export default Categories;
