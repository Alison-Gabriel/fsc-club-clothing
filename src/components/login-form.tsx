import { zodResolver } from "@hookform/resolvers/zod";
import { FirebaseError } from "firebase/app";
import { AuthErrorCodes, signInWithEmailAndPassword } from "firebase/auth";
import { Loader2Icon, LogInIcon } from "lucide-react";
import { useForm } from "react-hook-form";

import { auth } from "../lib/firebase";
import { type LoginFormSchema, loginFormSchema } from "../schemas/login";
import Button from "./button";
import Input from "./input";

const LoginForm = () => {
  const { register, handleSubmit, setError, formState } =
    useForm<LoginFormSchema>({
      resolver: zodResolver(loginFormSchema),
      defaultValues: {
        email: "",
        password: "",
      },
    });

  const handleLoginFormSubmit = async (data: LoginFormSchema) => {
    const { email, password } = data;

    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      if (error instanceof FirebaseError) {
        const isMismatchedCredentials =
          error.code === AuthErrorCodes.INVALID_LOGIN_CREDENTIALS;

        if (isMismatchedCredentials) {
          setError("email", {
            type: "mismatchedCredentials",
            message: "E-mail ou senha inválidos.",
          });
          setError("password", {
            type: "mismatchedCredentials",
            message: "E-mail ou senha inválidos.",
          });
          return setError("root", { type: "mismatchedCredentials" });
        }
      }
    }
  };

  return (
    <form
      onSubmit={handleSubmit(handleLoginFormSubmit)}
      className="flex flex-col gap-5"
    >
      <Input
        {...register("email")}
        error={formState.errors.email?.message}
        type="email"
        label="E-mail"
        placeholder="Digite seu e-mail"
      />

      <Input
        {...register("password")}
        error={formState.errors.password?.message}
        type="password"
        label="Senha"
        placeholder="Digite sua senha"
      />

      <Button
        disabled={formState.isSubmitting}
        icon={formState.isSubmitting ? Loader2Icon : LogInIcon}
      >
        Entrar
      </Button>
    </form>
  );
};

export default LoginForm;
