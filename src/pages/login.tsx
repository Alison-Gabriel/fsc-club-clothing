import { LogInIcon } from "lucide-react";

import Input from "../components/input";

const LoginPage = () => {
  return (
    <main className="flex h-full w-full items-center justify-center p-8">
      <section className="w-lg space-y-5">
        <header className="space-y-5 text-center">
          <h2 className="text-2xl font-bold">Entre com a sua conta</h2>
          <button className="bg-brand-background text-brand-foreground hover:bg-brand-background/95 flex w-full items-center justify-center gap-2 rounded-lg py-2.5 font-bold shadow-md transition-all">
            Entrar com o Google
          </button>
          <p className="text-brand-dark-foreground font-semibold">
            ou entre com o seu e-mail
          </p>
        </header>

        <div className="bg-brand-darken-blend h-px w-full" />

        <form className="flex flex-col gap-5">
          <Input type="email" label="E-mail" placeholder="Digite seu e-mail" />
          <Input type="password" label="Senha" placeholder="Digite sua senha" />

          <button
            type="submit"
            className="bg-brand-background text-brand-foreground hover:bg-brand-background/95 shadow-brand-darken-blend flex w-full items-center justify-center gap-2 rounded-lg py-2.5 font-bold shadow-md transition-all"
          >
            <LogInIcon className="size-4" /> Entrar
          </button>
        </form>
      </section>
    </main>
  );
};

export default LoginPage;
