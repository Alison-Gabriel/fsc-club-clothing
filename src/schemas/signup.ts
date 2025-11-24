import z from "zod";

export const signupFormSchema = z
  .object({
    firstName: z.string().trim().min(1, {
      error: "O nome é obrigatório.",
    }),
    lastName: z.string().trim().min(1, {
      error: "O sobrenome é obrigatório.",
    }),
    email: z
      .email({
        error: "Digite um e-mail válido.",
      })
      .trim()
      .min(1, {
        error: "O e-mail é obrigatório.",
      }),
    password: z
      .string({
        error: "Digite uma senha válida.",
      })
      .trim()
      .min(6, {
        error: "Digite uma senha com pelo menos 6 caracteres.",
      }),
    passwordConfirmation: z
      .string({
        error: "Digite uma senha válida.",
      })
      .trim()
      .min(6, {
        error: "Digite uma senha com pelo menos 6 caracteres.",
      }),
  })
  .refine((fields) => fields.password === fields.passwordConfirmation, {
    error: "As senhas não coincidem.",
    path: ["passwordConfirmation"],
  });

export type SignupFormSchema = z.infer<typeof signupFormSchema>;
