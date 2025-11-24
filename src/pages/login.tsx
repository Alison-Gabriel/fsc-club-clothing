import { LogInIcon } from "lucide-react";
import { FaGoogle } from "react-icons/fa";

import Button from "../components/button";
import Input from "../components/input";

const LoginPage = () => {
  return (
    <main className="flex h-full w-full items-center justify-center p-8">
      <section className="w-lg space-y-5">
        <header className="space-y-5 text-center">
          <h2 className="text-2xl font-bold">Entre com a sua conta</h2>

          <Button icon={FaGoogle}>Entrar com o Google</Button>

          <p className="text-brand-dark-foreground font-semibold">
            ou entre com o seu e-mail
          </p>
        </header>

        <div className="bg-brand-darken-blend h-px w-full" />

        <form className="flex flex-col gap-5">
          <Input type="email" label="E-mail" placeholder="Digite seu e-mail" />

          <Input type="password" label="Senha" placeholder="Digite sua senha" />

          <Button icon={LogInIcon}>Entrar</Button>
        </form>
      </section>
    </main>
  );
};

export default LoginPage;
