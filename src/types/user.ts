export interface User {
  id: string;
  firstName: string;
  lastName: string;
  provider: "firebase" | "google";
  email: string;
}
