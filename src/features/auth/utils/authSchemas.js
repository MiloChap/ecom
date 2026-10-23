import { z } from "zod";

export const loginSchema = z.object({
  email: z.email("Email invalide"),
  password: z.string().min(1, "Mot de passe requis"),
});

export const registerSchema = z.object({
  username: z
    .string()
    .min(3, "3 caractères minimum")
    .max(32, "32 caractères maximum")
    .regex(/^[a-zA-Z0-9_.-]+$/, "Lettres, chiffres, _ . - uniquement"),
  email: z.email("Email invalide"),
  password: z.string().min(8, "8 caractères minimum"),
});
