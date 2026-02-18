import { defineCollection, z } from 'astro:content';

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
  }),
});

// 2. PROJECTS (The Grid + Case Studies)
const projects = defineCollection({
  type: 'content', // Markdown (Body = Case Study)
  schema: z.object({
    title: z.string(),
    year: z.number(),
    description: z.string().max(160), // Short for Bento Grid
    stack: z.array(z.string()),
    repoUrl: z.string().url().optional(),
    demoUrl: z.string().url().optional(),
    featured: z.boolean().default(false), // Shows on Home Page
    visible: z.boolean().default(true),
  }),
});

// 3. EDUCATION (Degrees)
const education = defineCollection({
  type: 'data', // YAML
  schema: z.object({
    degree: z.string(),
    institution: z.string(),
    yearStart: z.number(),
    yearEnd: z.number().optional(),
    details: z.string(), // "Integrated 5-year curriculum..."
    visible: z.boolean().default(true),
  }),
});

// 4. CERTIFICATES & HONORS
const certificates = defineCollection({
  type: 'data', // YAML
  schema: z.object({
    title: z.string(),
    issuer: z.string(), // "AWS" or "IEEE"
    date: z.string(),   // "2026" or "In Progress"
    type: z.enum(['Certificate', 'Award', 'Speaking']), 
    visible: z.boolean().default(true),
  }),
});

// 5. SKILLS (The Summary List)
const skills = defineCollection({
  type: 'data', // YAML
  schema: z.object({
    category: z.string(), // "Cloud & DevOps"
    items: z.array(z.string()),
    priority: z.number(), // 1 = Top of list
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

export const collections = {
  experience,
  projects,
  education,
  certificates,
  skills,
  wiki,
};