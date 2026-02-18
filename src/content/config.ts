import { z, defineCollection } from 'astro:content';

// 1. Define the "Work Experience" Schema
const workCollection = defineCollection({
    type: 'content', // v2.0: We will use Markdown for the rich text "Logs"
    schema: z.object({
        role: z.string(),
        company: z.string(),
        location: z.string().optional(),
        startDate: z.date(),
        endDate: z.date().optional(), // If undefined, it means "Present"
        current: z.boolean().default(false),
        stack: z.array(z.string()), // e.g., ["Docker", "Nginx"]
    }),
});

// 2. Define the "Projects" Schema
const projectCollection = defineCollection({
    type: 'data', // Projects are pure data (JSON/YAML), less text
    schema: z.object({
        title: z.string(),
        description: z.string().max(160), // Enforce brevity (Twitter style)
        stack: z.array(z.string()),
        link: z.string().url(),
        featured: z.boolean().default(false),
        year: z.number(),
    }),
});

// 3. Export to make them available
export const collections = {
    'work': workCollection,
    'projects': projectCollection,
};