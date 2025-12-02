import { collection, getDocs } from "firebase/firestore";
import {
  createContext,
  type ReactNode,
  useContext,
  useEffect,
  useState,
  useTransition,
} from "react";

import { categoryConverter } from "../converters/firestore-converter";
import { db } from "../lib/firebase";
import type { Category } from "../types/category";

interface CategoryContext {
  categories: Category[];
  isFetchingCategories: boolean;
  getCategories: () => void;
}

const CategoryContext = createContext<CategoryContext>({} as CategoryContext);

interface CategoryContextProviderProps {
  children: ReactNode;
}

export const CategoryContextProvider = ({
  children,
}: CategoryContextProviderProps) => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [isFetchingCategories, startTransition] = useTransition();

  const getCategoriesFromFirestore = () => {
    startTransition(async () => {
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
    });
  };

  useEffect(() => {
    getCategoriesFromFirestore();
  }, []);

  return (
    <CategoryContext.Provider
      value={{
        categories,
        isFetchingCategories,
        getCategories: getCategoriesFromFirestore,
      }}
    >
      {children}
    </CategoryContext.Provider>
  );
};

export const useCategory = () => useContext(CategoryContext);
