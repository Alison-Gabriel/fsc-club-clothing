import { createContext, type ReactNode, useContext, useState } from "react";

import type { User } from "../types/user";

interface AuthContextProps {
  user: User | null;
  isUserAuthenticated: boolean;
  loginUser: (user: User) => void;
  logoutUser: () => void;
}

const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);

interface AuthContextProviderProps {
  children: ReactNode;
}

const AuthContextProvider = ({ children }: AuthContextProviderProps) => {
  const [user, setUser] = useState<User | null>(null);

  const isUserAuthenticated = Boolean(user);

  const loginUser = (user: User) => {
    setUser(user);
  };

  const logoutUser = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{ user, isUserAuthenticated, loginUser, logoutUser }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
export default AuthContextProvider;
