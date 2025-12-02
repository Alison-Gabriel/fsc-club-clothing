import { zodResolver } from "@hookform/resolvers/zod";
import { FirebaseError } from "firebase/app";
import { AuthErrorCodes, createUserWithEmailAndPassword } from "firebase/auth";
import { addDoc, collection } from "firebase/firestore";
import { useForm } from "react-hook-form";
import { PiSignIn } from "react-icons/pi";

import { auth, db } from "../lib/firebase";
import { type SignupFormSchema, signupFormSchema } from "../schemas/signup";
import * as Button from "./button";
import * as Input from "./input";

const SignupForm = () => {
  const { register, handleSubmit, setError, formState } =
    useForm<SignupFormSchema>({
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
        provider: "firebase",
        firstName,
        lastName,
      });
    } catch (error) {
      if (error instanceof FirebaseError) {
        const isEmailAlreadyExists = error.code === AuthErrorCodes.EMAIL_EXISTS;

        if (isEmailAlreadyExists) {
          return setError("email", {
            type: "alreadyInUse",
            message: "Este e-mail já está em uso.",
          });
        }
      }
    }
  };

  return (
    <form
      onSubmit={handleSubmit(handleLoginFormSubmit)}
      className="flex flex-col gap-5"
    >
      <Input.Root>
        <Input.Label text="Nome" />
        <Input.Field {...register("firstName")} placeholder="Digite seu nome" />
        {formState.errors.firstName?.message && (
          <Input.ErrorMessage message={formState.errors.firstName.message} />
        )}
      </Input.Root>

      <Input.Root>
        <Input.Label text="Sobrenome" />
        <Input.Field
          {...register("lastName")}
          placeholder="Digite seu sobrenome"
        />
        {formState.errors.lastName?.message && (
          <Input.ErrorMessage message={formState.errors.lastName.message} />
        )}
      </Input.Root>

      <Input.Root>
        <Input.Label text="E-mail" />
        <Input.Field
          {...register("email")}
          type="email"
          placeholder="Digite seu e-mail"
        />
        {formState.errors.email?.message && (
          <Input.ErrorMessage message={formState.errors.email.message} />
        )}
      </Input.Root>

      <Input.Root>
        <Input.Label text="Senha" />
        <Input.Field
          {...register("password")}
          type="password"
          placeholder="Digite seu senha"
        />
        {formState.errors.password?.message && (
          <Input.ErrorMessage message={formState.errors.password.message} />
        )}
      </Input.Root>

      <Input.Root>
        <Input.Label text="Confirmação de senha" />
        <Input.Field
          {...register("passwordConfirmation")}
          type="password"
          placeholder="Confirme sua senha"
        />
        {formState.errors.passwordConfirmation?.message && (
          <Input.ErrorMessage
            message={formState.errors.passwordConfirmation.message}
          />
        )}
      </Input.Root>

      <Button.Root>
        <Button.Icon>
          <PiSignIn className="text-brand-foreground size-6" />
        </Button.Icon>
        <Button.Label text="Criar Conta" />
      </Button.Root>
    </form>
  );
};

export default SignupForm;
