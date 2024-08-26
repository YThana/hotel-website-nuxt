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
         'Cormorant Garamond': {
            wght: '400..700',
         },
         'Nunito Sans': {
            wght: '300..700',
            ital: '300..700',
         },
      },
      preload: true,
      preconnect: true,
   },
   components: [
      { path: '~/components', pathPrefix: false },
   ],
});
