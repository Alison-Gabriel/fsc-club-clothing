import type { FirebaseError } from "firebase/app";
import { signInWithPopup } from "firebase/auth";
import { addDoc, collection, getDocs, query, where } from "firebase/firestore";
import { FaGoogle } from "react-icons/fa";

import Button from "../components/button";
import Header from "../components/header";
import LoginForm from "../components/login-form";
import { auth, db, googleProvider } from "../lib/firebase";

const LoginPage = () => {
  const handleLoginWithGoogle = async () => {
    try {
      const userCredentials = await signInWithPopup(auth, googleProvider);
      const userSnapshot = await getDocs(
        query(
          collection(db, "users"),
          where("id", "==", userCredentials.user.uid),
        ),
      );
      const user = userSnapshot.docs[0]?.data();
      const isUserAlreadyExists = Boolean(user);

      if (isUserAlreadyExists) return;

      const firstName = userCredentials.user.displayName?.split(" ")[0] ?? "";
      const lastName = userCredentials.user.displayName?.split(" ")[1] ?? "";

      await addDoc(collection(db, "users"), {
        id: userCredentials.user.uid,
        email: userCredentials.user.email,
        provider: "google",
        firstName,
        lastName,
      });
    } catch (error) {
      console.log((error as FirebaseError).message);
    }
  };

  return (
    <>
      <Header />

      <main className="flex h-[calc(100vh-72px)] w-full items-center justify-center p-8">
        <section className="w-lg space-y-5">
          <header className="space-y-5 text-center">
            <h2 className="text-xl font-bold">Entre com a sua conta</h2>

            <Button icon={FaGoogle} onClick={handleLoginWithGoogle}>
              Entrar com o Google
            </Button>

            <p className="text-brand-dark-foreground text-sm font-semibold">
              ou entre com o seu e-mail
            </p>
          </header>

          <div className="bg-brand-darken-blend h-px w-full" />

          <LoginForm />
        </section>
      </main>
    </>
  );
};

export default LoginPage;
