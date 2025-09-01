// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  site: 'https://vibecodemoonlighter.com',
  output: 'static',
  adapter: vercel(),
  markdown: {
    shikiConfig: {
      // Use a theme that matches our dark background
      theme: 'github-dark',
      // Wrap code blocks in a div we can target
      wrap: true
    }
  },
  integrations: [
    sitemap({
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
    })
  ]
});
