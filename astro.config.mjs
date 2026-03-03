// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import icon from 'astro-icon';
import sitemap from '@astrojs/sitemap'; // <-- YOU FORGOT THIS LINE

// https://astro.build/config
export default defineConfig({
  site: 'https://hachemsqualli.xyz', // This is required for the sitemap to work
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [
    icon(),
    sitemap(), // Now this knows what 'sitemap' is
  ],
  image: {
    domains: ['github.com', 'raw.githubusercontent.com', 'i.imgur.com'], // Add your image hosts here
  },
});
