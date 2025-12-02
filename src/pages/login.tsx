import type { FirebaseError } from "firebase/app";
import { signInWithPopup } from "firebase/auth";
import { addDoc, collection, getDocs, query, where } from "firebase/firestore";
import { useEffect, useTransition } from "react";
import { FaGoogle } from "react-icons/fa";
import { useNavigate } from "react-router";

import * as Button from "../components/button";
import Header from "../components/header";
import Loading from "../components/loading";
import LoginForm from "../components/login-form";
import { useAuth } from "../contexts/auth";
import { auth, db, googleProvider } from "../lib/firebase";

const LoginPage = () => {
  const navigate = useNavigate();

  const [isLoading, startLoading] = useTransition();
  const { isUserAuthenticated } = useAuth();

  useEffect(() => {
    if (isUserAuthenticated) {
      navigate("/");
    }
  }, [isUserAuthenticated, navigate]);

  const handleLoginWithGoogle = () => {
    startLoading(async () => {
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
    });
  };

  return (
    <>
      <Header />

      {isLoading && <Loading />}

      <main className="flex h-[calc(100vh-72px)] w-full items-center justify-center p-8">
        <section className="w-lg space-y-5">
          <header className="space-y-5 text-center">
            <h2 className="text-lg font-semibold md:text-2xl">
              Entre com a sua conta
            </h2>

            <Button.Root onClick={handleLoginWithGoogle}>
              <Button.Icon>
                <FaGoogle className="text-brand-foreground size-4" />
              </Button.Icon>
              <Button.Label text="Entrar com o Google" />
            </Button.Root>

            <p className="text-brand-dark-foreground font-semibold">
              Ou, entre com o seu e-mail:
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
