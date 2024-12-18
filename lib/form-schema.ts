import * as z from 'zod';

export const profileSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().optional(),
  password: z.string().optional(),
  birthday: z.string().optional()
});

export type ProfileFormValues = z.infer<typeof profileSchema>;
