import { zodResolver } from "@hookform/resolvers/zod";
import { FirebaseError } from "firebase/app";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { addDoc, collection } from "firebase/firestore";
import { LogInIcon } from "lucide-react";
import { useForm } from "react-hook-form";

import { auth, db } from "../lib/firebase";
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

  const handleLoginFormSubmit = async (data: SignupFormSchema) => {
    const { firstName, lastName, email, password } = data;

    try {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
      );

      await addDoc(collection(db, "users"), {
        id: user.uid,
        email: user.email,
        firstName,
        lastName,
      });
    } catch (error) {
      if (error instanceof FirebaseError) {
        const isEmailInUse = error.message.includes("email-already-in-use");

        if (isEmailInUse) {
          console.log("E-mail já está sendo usado.");
          return;
        }

        console.log(error.message);
      }
    }
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
