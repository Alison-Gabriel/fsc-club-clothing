import { zodResolver } from "@hookform/resolvers/zod";
import { FirebaseError } from "firebase/app";
import { AuthErrorCodes, signInWithEmailAndPassword } from "firebase/auth";
import { LogInIcon } from "lucide-react";
import { useTransition } from "react";
import { useForm } from "react-hook-form";

import { auth } from "../lib/firebase";
import { type LoginFormSchema, loginFormSchema } from "../schemas/login";
import * as Button from "./button";
import * as Input from "./input";
import Loading from "./loading";

const LoginForm = () => {
  const [isLoading, startTransition] = useTransition();

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormSchema>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const handleLoginFormSubmit = async (data: LoginFormSchema) => {
    const { email, password } = data;

    startTransition(async () => {
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
    });
  };

  return (
    <>
      {isLoading && <Loading />}

      <form
        onSubmit={handleSubmit(handleLoginFormSubmit)}
        className="flex flex-col gap-5"
      >
        <Input.Root>
          <Input.Label text="E-mail" />
          <Input.Field
            {...register("email")}
            type="email"
            placeholder="Digite seu e-mail"
          />
          {errors.email?.message && (
            <Input.ErrorMessage message={errors.email.message} />
          )}
        </Input.Root>

        <Input.Root>
          <Input.Label text="Senha" />
          <Input.Field
            {...register("password")}
            type="password"
            placeholder="Digite sua senha"
          />
          {errors.password?.message && (
            <Input.ErrorMessage message={errors.password.message} />
          )}
        </Input.Root>

        <Button.Root disabled={isSubmitting}>
          <Button.Icon>
            <LogInIcon className="text-brand-foreground size-5" />
          </Button.Icon>
          <Button.Label text="Entrar" />
        </Button.Root>
      </form>
    </>
  );
};

export default LoginForm;
