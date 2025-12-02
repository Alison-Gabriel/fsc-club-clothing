import { onAuthStateChanged } from "firebase/auth";
import { collection, getDocs, query, where } from "firebase/firestore";
import { BrowserRouter, Route, Routes } from "react-router";

import { useAuth } from "./contexts/auth";
import { userConverter } from "./converters/firestore-converter";
import { auth, db } from "./lib/firebase";
import HomePage from "./pages/home";
import LoginPage from "./pages/login";
import SignupPage from "./pages/signup";

const App = () => {
  const { user, isUserAuthenticated, loginUser, logoutUser } = useAuth();

  onAuthStateChanged(auth, async (user) => {
    const isUserSigningIn = !isUserAuthenticated && user;
    const isUserSigningOut = isUserAuthenticated && !user;

    if (isUserSigningOut) return logoutUser();

    if (isUserSigningIn) {
      const querySnapshot = await getDocs(
        query(
          collection(db, "users"),
          where("id", "==", user.uid),
        ).withConverter(userConverter),
      );
      const userFromFirestore = querySnapshot.docs[0].data();

      return loginUser(userFromFirestore);
    }
  });

  console.log({ user, isUserAuthenticated });

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
