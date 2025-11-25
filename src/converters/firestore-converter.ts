import type {
  DocumentData,
  QueryDocumentSnapshot,
  SnapshotOptions,
} from "firebase/firestore";

import type { Category } from "../types/category";

export const categoryConverter = {
  fromFirestore: (
    snapshot: QueryDocumentSnapshot,
    options: SnapshotOptions,
  ): Category => {
    const data = snapshot.data(options);

    return {
      id: data.id,
      name: data.name,
      displayName: data.displayName,
      imageUrl: data.imageUrl,
      products: data.products,
    };
  },
  toFirestore: (category: Category): DocumentData => {
    return { ...category };
  },
};
