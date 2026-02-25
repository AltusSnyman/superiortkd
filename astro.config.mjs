// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';

import sitemap, { ChangeFreqEnum } from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://superiortkd.co.nz',
  vite: {
    plugins: [tailwindcss()]
  },
  build: {
    inlineStylesheets: 'always'
  },
  redirects: {
    '/schedule': 'http://superior-taekwondo.gymdesk.com/schedule'
  },

  integrations: [react(), sitemap({
    serialize(item) {
      // High priority for Home
      if (item.url === 'https://superiortkd.co.nz/') {
        item.changefreq = ChangeFreqEnum.DAILY;
        item.priority = 1.0;
      }
      // Medium-High priority for key conversion pages
      else if (item.url.includes('/contact') || item.url.includes('/pricing') || item.url.includes('/schedule')) {
        item.changefreq = ChangeFreqEnum.WEEKLY;
        item.priority = 0.9;
      }
      // Default priority for other pages
      else {
        item.changefreq = ChangeFreqEnum.WEEKLY;
        item.priority = 0.7;
      }
      return item;
    }
  })]
});