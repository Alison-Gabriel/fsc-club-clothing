import { zodResolver } from "@hookform/resolvers/zod";
import { LogInIcon } from "lucide-react";
import { useForm } from "react-hook-form";

import { type LoginFormSchema, loginFormSchema } from "../schemas/login";
import Button from "./button";
import Input from "./input";

const LoginForm = () => {
  const { register, handleSubmit, formState } = useForm<LoginFormSchema>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const handleLoginFormSubmit = (data: LoginFormSchema) => {
    console.log(data);
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

      <Button icon={LogInIcon}>Entrar</Button>
    </form>
  );
};

export default LoginForm;
