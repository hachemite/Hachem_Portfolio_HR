import { defineCollection, reference, z } from 'astro:content';

// 1. EXPERIENCE (CV Logs)
// Usage: Work, Internships, Leadership (SecOps), Volunteering
const experience = defineCollection({
  type: 'content', // Markdown (for bullet points)
  schema: z.object({
    role: z.string(),
    company: z.string(),
    location: z.string(),
    startDate: z.date(),
    endDate: z.date().optional(), // Missing = "Present"
    current: z.boolean().default(false),
    stack: z.array(z.string()),
    // CRITICAL: This separates "Work" from "Clubs" in your CV
    type: z.enum(['Work', 'Internship', 'Leadership', 'Volunteering']),
    visible: z.boolean().default(true), // Toggle to hide without deleting

    lang: z.enum(['en', 'fr']).default('en'),
  }),
});

// 2. PROJECTS (The Grid + Case Studies)
const projects = defineCollection({
  type: 'content',
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      year: z.number(),
      description: z.string().max(160),
      stack: z.array(z.string()),
      repoUrl: z.string().url().optional(),
      demoUrl: z.string().url().optional(),

      // NEW: The Cover Image
      // We expect a path like "../../src/assets/images/projects/cybertech.png"
      image: image().optional(),

      featured: z.boolean().default(false),
      visible: z.boolean().default(true),
    }),
});

// 3. EDUCATION (Degrees)
const education = defineCollection({
  type: 'data',
  schema: z.object({
    degree: z.string(),
    institution: z.string(),
    yearStart: z.number(),
    yearEnd: z.number().optional(),
    details: z.string(),
    visible: z.boolean().default(true),
    lang: z.enum(['en', 'fr']).default('en'), // <-- ADD THIS
  }),
});

// 4. CERTIFICATES & HONORS
const certificates = defineCollection({
  type: 'data',
  schema: z.object({
    title: z.string(),
    issuer: z.string(),
    date: z.string(),
    type: z.enum(['Certificate', 'Award', 'Speaking']),
    visible: z.boolean().default(true),
    lang: z.enum(['en', 'fr']).default('en'), // <-- ADD THIS
  }),
});

// 5. SKILLS (The Summary List)
const skills = defineCollection({
  type: 'data',
  schema: z.object({
    category: z.string(),
    items: z.array(z.string()),
    priority: z.number(),
    lang: z.enum(['en', 'fr']).default('en'), // <-- ADD THIS
  }),
});

// 6. WIKI (Notes & Papers)
const wiki = defineCollection({
  type: 'content', // Markdown
  schema: z.object({
    title: z.string(),
    publishDate: z.date(),
    tags: z.array(z.string()),
    // Distinguishes "Blog Post" from "Formal Research"
    type: z.enum(['Note', 'Article', 'Paper']).default('Note'),
    draft: z.boolean().default(false),
  }),
});

// NEW: CV-Specific Projects (Short bullet points, no images)
const cvProjects = defineCollection({
  type: 'data', // Using YAML for fast bullet points
  schema: z.object({
    name: z.string(),
    role: z.string().optional(), // e.g., "Backend Developer"
    year: z.number(),
    stack: z.array(z.string()),
    details: z.array(z.string()), // Array of bullet points
    // THE SAFETY NET:
    // This looks for a markdown file in the 'projects' folder.
    // If you type "cybertech" here, but "cybertech.md" doesn't exist, Astro throws a build error!
    projectLink: reference('projects').optional(),
    visible: z.boolean().default(true),
    lang: z.enum(['en', 'fr']).default('en'),
  }),
});

export const collections = {
  experience,
  projects,
  cvProjects,
  education,
  certificates,
  skills,
  wiki,
};
