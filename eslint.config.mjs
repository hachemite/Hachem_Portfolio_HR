import eslintPluginAstro from 'eslint-plugin-astro';

export default [
  // 1. Load the recommended Astro and TypeScript rules
  ...eslintPluginAstro.configs.recommended,

  // 2. Replace the old .eslintignore file with this ignores array
  {
    ignores: ['node_modules/', 'dist/', '.astro/', 'public/', '.github/', '**/*.d.ts'],
  },
];
