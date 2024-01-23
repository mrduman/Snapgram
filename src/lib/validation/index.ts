import * as z from "zod";

export const SignupValidation = z.object({
  username: z.string().min(2).max(50),
  name: z.string().min(2, { message: "Too short" }),
  email: z.string().min(2, { message: "Too short" }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters" }),
});

export const SigninValidation = z.object({
  email: z.string().min(2, { message: "Too short" }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters" }),
});

export const PostValidation = z.object({
  caption: z.string().min(5).max(2200),
  file: z.custom<File[]>(),
  location: z.string().min(2).max(100),
  tags: z.string(),
});
