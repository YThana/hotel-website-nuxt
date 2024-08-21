// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
   compatibilityDate: '2024-04-03',
   devtools: { enabled: true },
   modules: ['@nuxt/ui', 'nuxt-aos', 'nuxt-swiper'],
   // nuxt ui color mode
   colorMode: {
      preference: 'light',
   },
   // swiper options
   swiper: {
   },
   components: [
      { path: '~/components', pathPrefix: false },
   ],
});
