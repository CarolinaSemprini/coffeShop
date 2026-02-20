// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import netlify from '@astrojs/netlify';

export default defineConfig({
  // ✅ Recomendado para deploy (podés cambiarlo luego)
  // Si todavía no tenés el subdominio, dejalo comentado.
  // site: 'https://cafe.semprinicarolina.com.ar',

  vite: {
    plugins: [tailwindcss()],
  },

  image: {
    domains: ['coffeshop.local', 'cafe.semprinicarolina.com.ar'],
  },

  adapter: netlify(),
});