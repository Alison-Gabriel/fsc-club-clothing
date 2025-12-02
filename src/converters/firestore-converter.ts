import type {
  DocumentData,
  QueryDocumentSnapshot,
  SnapshotOptions,
} from "firebase/firestore";

import type { Category } from "../types/category";
import type { User } from "../types/user";

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

export const userConverter = {
  fromFirestore: (
    snapshot: QueryDocumentSnapshot,
    options: SnapshotOptions,
  ): User => {
    const data = snapshot.data(options);

    return {
      email: data.email,
      firstName: data.firstName,
      id: data.id,
      lastName: data.lastName,
      provider: data.provider,
    };
  },
  toFirestore: (user: User): DocumentData => {
    return { ...user };
  },
};
