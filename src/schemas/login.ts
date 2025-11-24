import z from "zod";

export const loginFormSchema = z.object({
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
});

export type LoginFormSchema = z.infer<typeof loginFormSchema>;
