import { z } from 'zod';

export const loginSchema = z.object({
  email: z.string(),
  password: z.string(),
});

export const signUpSchema = z.object({
  avatar: z.string(),
  email: z.string(),
  password: z.string(),
  confirm: z.string(),
  name: z.string(),
  age: z.string(),
  weight: z.string(),
  height: z.string(),
  gender: z.string(),
});
