import { defineConfig } from 'astro/config';
import { storyblok } from '@storyblok/astro'; // 💡 v9は「{ storyblok }」が正解です！
import { loadEnv } from 'vite';

const env = loadEnv(process.env.NODE_ENV || 'development', process.cwd(), '');

export default defineConfig({
  integrations: [
    storyblok({
      accessToken: env.STORYBLOK_TOKEN,
      devToolbar: false,
      components: {
        page: 'storyblok/Page',
        teaser: 'storyblok/Teaser',
        // grid: 'storyblok/Grid',
        feature: 'storyblok/feature',
        about: 'storyblok/About', 
        GridGallery: 'components/GridGallery',
        image: 'storyblok/image',
        richtext: 'storyblok/richtext',
      },
      fallbackComponent: true, 
      apiOptions: {
        region: 'eu',
      },
    }),
  ],
});