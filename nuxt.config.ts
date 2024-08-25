// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
   compatibilityDate: '2024-04-03',
   devtools: { enabled: true },
   modules: ['@nuxt/ui', 'nuxt-aos', 'nuxt-swiper', '@nuxtjs/google-fonts'],
   // nuxt ui color mode
   colorMode: {
      preference: 'light',
   },
   // aos options
   aos: {
      once: true,
      duration: 600,
   },
   // google-fonts options
   googleFonts: {
      display: 'swap',
      families: {
         'Montserrat': {
            wght: '400..900',
            ital: '400..900',
         },
         'Playfair Display': {
            wght: '400..900',
            ital: '400..900',
         },
      },
      preload: true,
      preconnect: true,
   },
   components: [
      { path: '~/components', pathPrefix: false },
   ],
});
