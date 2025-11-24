import { LogInIcon } from "lucide-react";

const LoginPage = () => {
  return (
    <main className="flex h-full w-full items-center justify-center p-8">
      <section className="w-lg space-y-5">
        <header className="space-y-5 text-center">
          <h2 className="text-2xl font-bold">Entre com a sua conta</h2>
          <button className="bg-brand-background text-brand-foreground hover:bg-brand-background/95 flex w-full items-center justify-center gap-2 rounded-xl py-2.5 font-bold shadow-md transition-all">
            Entrar com o Google
          </button>
          <p className="text-brand-dark-foreground font-semibold">
            ou entre com o seu e-mail
          </p>
        </header>

        <div className="bg-brand-darken-blend h-px w-full" />

        <form className="flex flex-col gap-5">
          <label className="text-brand-dark-foreground flex flex-col gap-1 font-bold">
            E-mail
            <input
              type="email"
              placeholder="Digite seu e-mail"
              className="bg-brand-input focus-visible:outline-brand-dark-foreground shadow-brand-darken-blend w-full rounded-xl px-5 py-2.5 font-normal shadow-md placeholder:font-medium"
            />
          </label>

          <label className="text-brand-dark-foreground flex flex-col gap-1 font-bold">
            Senha
            <input
              type="password"
              placeholder="Digite sua senha"
              className="bg-brand-input focus-visible:outline-brand-dark-foreground shadow-brand-darken-blend w-full rounded-xl px-5 py-2.5 font-normal shadow-md placeholder:font-medium"
            />
          </label>

          <button
            type="submit"
            className="bg-brand-background text-brand-foreground hover:bg-brand-background/95 shadow-brand-darken-blend flex w-full items-center justify-center gap-2 rounded-xl py-2.5 font-bold shadow-md transition-all"
          >
            <LogInIcon className="size-4" /> Entrar
          </button>
        </form>
      </section>
    </main>
  );
};

export default LoginPage;
