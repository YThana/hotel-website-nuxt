import type { Config } from 'tailwindcss';

export default <Partial<Config>>{
   safelist: [
      'text-white',
      'text-black',
   ],
   theme: {
      fontFamily: {
         heading: ['Inknut Antiqua', 'serif'],
         primary: ['Quicksand', 'sans-serif'],
      },
      extend: {
         colors: {
            green: {
               50: '#EFFDF5',
               100: '#D9FBE8',
               200: '#B3F5D1',
               300: '#75EDAE',
               400: '#00DC82',
               500: '#00C16A',
               600: '#00A155',
               700: '#007F45',
               800: '#016538',
               900: '#0A5331',
               950: '#052e16',
            },
         },
         fontSize: {
            '3xl': ['1.875rem', '2.5rem'],
            '4xl': ['2.25rem', '3rem'],
            '5xl': ['3rem', '4rem'],
         },
      },
   },
};
