import { FaGoogle } from "react-icons/fa";

import Button from "../components/button";
import Header from "../components/header";
import LoginForm from "../components/login-form";

const LoginPage = () => {
  return (
    <>
      <Header />

      <main className="flex h-[calc(100vh-72px)] w-full items-center justify-center p-8">
        <section className="w-lg space-y-5">
          <header className="space-y-5 text-center">
            <h2 className="text-xl font-bold">Entre com a sua conta</h2>

            <Button icon={FaGoogle}>Entrar com o Google</Button>

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
