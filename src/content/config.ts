import { defineCollection, z } from 'astro:content';

export const imagePath = z
  .string()
  .refine((value) => value.startsWith('/') || value.startsWith('http'), {
    message: 'Image paths should be absolute paths like /uploads/image.jpg or full URLs.'
  });

const posts = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    tags: z.array(z.string()),
    cover: imagePath,
    videoUrl: z.string().optional(),
    draft: z.boolean().default(false)
  })
});

const profile = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    role: z.string(),
    location: z.string(),
    avatar: imagePath,
    bio: z.string(),
    skills: z.array(z.string()),
    links: z.array(
      z.object({
        label: z.string(),
        href: z.string()
      })
    )
  })
});

export const collections = { posts, profile };
