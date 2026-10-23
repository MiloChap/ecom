import { z } from "zod";

export const productSchema = z.object({
  title: z.string().min(3, "3 caractères minimum"),
  price: z.string().regex(/^\d+(\.\d{1,2})?$/, "Prix invalide (ex : 19.99)"),
  description: z.string().min(10, "10 caractères minimum"),
  category: z.string().min(1, "Choisissez une catégorie"),
  image: z.url("URL invalide"),
});
