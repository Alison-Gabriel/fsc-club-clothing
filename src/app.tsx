import { onAuthStateChanged } from "firebase/auth";
import { collection, getDocs, query, where } from "firebase/firestore";
import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router";

import Loading from "./components/loading";
import { useAuth } from "./contexts/auth";
import { userConverter } from "./converters/firestore-converter";
import { auth, db } from "./lib/firebase";
import ExplorePage from "./pages/explore";
import HomePage from "./pages/home";
import LoginPage from "./pages/login";
import SignupPage from "./pages/signup";

const App = () => {
  const [isInitializing, setIsInitializing] = useState(true);
  const { isUserAuthenticated, loginUser, logoutUser } = useAuth();

  onAuthStateChanged(auth, async (user) => {
    const isUserSigningIn = !isUserAuthenticated && user;
    const isUserSigningOut = isUserAuthenticated && !user;

    if (isUserSigningOut) {
      logoutUser();
      return setIsInitializing(false);
    }

    if (isUserSigningIn) {
      const querySnapshot = await getDocs(
        query(
          collection(db, "users"),
          where("id", "==", user.uid),
        ).withConverter(userConverter),
      );
      const userFromFirestore = querySnapshot.docs[0].data();

      loginUser(userFromFirestore);
      return setIsInitializing(false);
    }

    return setIsInitializing(false);
  });

  if (isInitializing) return <Loading />;

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/explore" element={<ExplorePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
