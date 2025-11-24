import { zodResolver } from "@hookform/resolvers/zod";
import { LogInIcon } from "lucide-react";
import { useForm } from "react-hook-form";

import { type SignupFormSchema, signupFormSchema } from "../schemas/signup";
import Button from "./button";
import Input from "./input";

const SignupForm = () => {
  const { register, handleSubmit, formState } = useForm<SignupFormSchema>({
    resolver: zodResolver(signupFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      passwordConfirmation: "",
    },
  });

  const handleLoginFormSubmit = (data: SignupFormSchema) => {
    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit(handleLoginFormSubmit)}
      className="flex flex-col gap-5"
    >
      <Input
        {...register("firstName")}
        error={formState.errors.firstName?.message}
        label="Nome"
        placeholder="Digite seu nome"
      />

      <Input
        {...register("lastName")}
        error={formState.errors.lastName?.message}
        label="Sobrenome"
        placeholder="Digite seu sobrenome"
      />

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

      <Input
        {...register("passwordConfirmation")}
        error={formState.errors.passwordConfirmation?.message}
        type="password"
        label="Confirmação de senha"
        placeholder="Digite sua senha novamente"
      />

      <Button icon={LogInIcon}>Criar Conta</Button>
    </form>
  );
};

export default SignupForm;
