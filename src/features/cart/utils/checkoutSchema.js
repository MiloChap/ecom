import { z } from "zod";

export const checkoutSchema = z.object({
  email: z.email("Email invalide"),
});
