import { defineCollection } from "astro/content/runtime";
import { z } from "zod";
const projectsCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        shortDescription: z.string(),
        description: z.string(),
        thumbnail: z.string().optional(),
        link: z.string(),
        techStack: z.string().optional(),
        position: z.string().optional()
    }),
});

export const collections = {
    'projects': projectsCollection,
};