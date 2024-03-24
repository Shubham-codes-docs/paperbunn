import { z } from "zod";

export const formSchema = z.object({
  name: z
    .string()
    .min(5, { message: "Name must be at least 5 characters long" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  phone: z
    .string()
    .min(10)
    .max(11, { message: "Phone number must be 10 digits long" }),
  address: z
    .string()
    .min(5, { message: "Address must be at least 5 characters long" }),
  instagram: z.string().url(),
  followers: z.string().min(1, { message: "Followers must be at least 3" }),
  engagement: z.string().min(1, { message: "Followers must be at least 3" }),
});
