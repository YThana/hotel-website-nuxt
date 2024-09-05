<script setup lang="ts">
import { handleMainSectionScroll } from '~/utils/scroll-utils';
import type { CardData } from '~/types/card-component-types';

useHead({
   title: 'Dishes - The Lagoon Hut',
});

interface Dishes {
   id: number;
   name: string;
   dishes: CardData[];
}

const dishes: Dishes[] = [
   {
      id: 1,
      name: 'Chicken',
      dishes: [
         {
            id: 1,
            img: '/dishes/Chicken/1.jpg',
            title: 'lorem ipsum',
            about: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr Lorem ipsum dolor sit amet,',
         },
         {
            id: 2,
            img: '/dishes/Chicken/2.jpg',
            title: 'lorem ipsum',
            about: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr Lorem ipsum dolor sit amet,',
         },
      ],
   },
   {
      id: 2,
      name: 'Beef',
      dishes: [
         {
            id: 1,
            img: '/dishes/Beef/1.jpg',
            title: 'lorem ipsum',
            about: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr Lorem ipsum dolor sit amet,',
         },
         {
            id: 2,
            img: '/dishes/Beef/2.jpg',
            title: 'lorem ipsum',
            about: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr Lorem ipsum dolor sit amet,',
         },
         {
            id: 3,
            img: '/dishes/Beef/3.jpg',
            title: 'lorem ipsum',
            about: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr Lorem ipsum dolor sit amet,',
         },
         {
            id: 4,
            img: '/dishes/Beef/4.jpg',
            title: 'lorem ipsum',
            about: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr Lorem ipsum dolor sit amet,',
         },
      ],
   },
   {
      id: 3,
      name: 'Rice',
      dishes: [
         {
            id: 1,
            img: '/dishes/Rice/1.jpg',
            title: 'lorem ipsum',
            about: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr Lorem ipsum dolor sit amet,',
         },
         {
            id: 2,
            img: '/dishes/Rice/2.jpg',
            title: 'lorem ipsum',
            about: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr Lorem ipsum dolor sit amet,',
         },
         {
            id: 3,
            img: '/dishes/Rice/3.jpg',
            title: 'lorem ipsum',
            about: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr Lorem ipsum dolor sit amet,',
         },
         {
            id: 4,
            img: '/dishes/Rice/4.jpg',
            title: 'lorem ipsum',
            about: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr Lorem ipsum dolor sit amet,',
         },
         {
            id: 5,
            img: '/dishes/Rice/5.jpg',
            title: 'lorem ipsum',
            about: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr Lorem ipsum dolor sit amet,',
         },
         {
            id: 6,
            img: '/dishes/Rice/6.jpg',
            title: 'lorem ipsum',
            about: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr Lorem ipsum dolor sit amet,',
         },
      ],
   },
   {
      id: 4,
      name: 'Seafood',
      dishes: [
         {
            id: 1,
            img: '/dishes/Seafood/1.jpg',
            title: 'lorem ipsum',
            about: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr Lorem ipsum dolor sit amet,',
         },
         {
            id: 2,
            img: '/dishes/Seafood/2.jpg',
            title: 'lorem ipsum',
            about: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr Lorem ipsum dolor sit amet,',
         },
         {
            id: 3,
            img: '/dishes/Seafood/3.jpg',
            title: 'lorem ipsum',
            about: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr Lorem ipsum dolor sit amet,',
         },
         {
            id: 4,
            img: '/dishes/Seafood/4.jpg',
            title: 'lorem ipsum',
            about: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr Lorem ipsum dolor sit amet,',
         },
         {
            id: 5,
            img: '/dishes/Seafood/5.jpg',
            title: 'lorem ipsum',
            about: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr Lorem ipsum dolor sit amet,',
         },
         {
            id: 6,
            img: '/dishes/Seafood/6.jpg',
            title: 'lorem ipsum',
            about: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr Lorem ipsum dolor sit amet,',
         },
         {
            id: 7,
            img: '/dishes/Seafood/7.jpg',
            title: 'lorem ipsum',
            about: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr Lorem ipsum dolor sit amet,',
         },
         {
            id: 8,
            img: '/dishes/Seafood/8.jpg',
            title: 'lorem ipsum',
            about: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr Lorem ipsum dolor sit amet,',
         },
         {
            id: 9,
            img: '/dishes/Seafood/9.jpg',
            title: 'lorem ipsum',
            about: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr Lorem ipsum dolor sit amet,',
         },
         {
            id: 10,
            img: '/dishes/Seafood/10.jpg',
            title: 'lorem ipsum',
            about: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr Lorem ipsum dolor sit amet,',
         },
         {
            id: 11,
            img: '/dishes/Seafood/11.jpg',
            title: 'lorem ipsum',
            about: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr Lorem ipsum dolor sit amet,',
         },
      ],
   },
   {
      id: 5,
      name: 'Egg',
      dishes: [
         {
            id: 1,
            img: '/dishes/Eggs/1.jpg',
            title: 'lorem ipsum',
            about: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr Lorem ipsum dolor sit amet,',
         },
      ],
   },
   {
      id: 6,
      name: 'Veg',
      dishes: [
         {
            id: 1,
            img: '/dishes/Veg/1.jpg',
            title: 'lorem ipsum',
            about: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr Lorem ipsum dolor sit amet,',
         },
         {
            id: 2,
            img: '/dishes/Veg/2.jpg',
            title: 'lorem ipsum',
            about: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr Lorem ipsum dolor sit amet,',
         },
         {
            id: 3,
            img: '/dishes/Veg/3.jpg',
            title: 'lorem ipsum',
            about: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr Lorem ipsum dolor sit amet,',
         },
         {
            id: 4,
            img: '/dishes/Veg/4.jpg',
            title: 'lorem ipsum',
            about: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr Lorem ipsum dolor sit amet,',
         },
      ],
   },
   {
      id: 7,
      name: 'Soup',
      dishes: [
         {
            id: 1,
            img: '/dishes/Soups/1.jpg',
            title: 'lorem ipsum',
            about: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr Lorem ipsum dolor sit amet,',
         },
         {
            id: 2,
            img: '/dishes/Soups/2.jpg',
            title: 'lorem ipsum',
            about: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr Lorem ipsum dolor sit amet,',
         },
      ],
   },
];
</script>

<template>
   <div class="w-full">
      <!-- region: hero -->
      <div class="w-full h-screen bg-cover bg-no-repeat bg-center bg-[url('/dishes-page/hero.jpg')] shadow-[inset_0_100px_100px_-20px_rgba(0,0,0,0.8)]">
         <div class="flex h-full p-6 items-center justify-center">
            <div class="flex flex-col gap-8 md:gap-10 sm:text-center sm:items-center">
               <div class="text-white bg-white/10 backdrop-blur-sm p-3 rounded-2xl font-bold font-heading text-3xl md:text-4xl xl:text-5xl md:max-w-3xl lg:max-w-4xl 2xl:max-w-5xl" data-aos="fade-up" data-aos-delay="200">
                  "Experience <span class="text-primary">noiseless</span>, <span class="text-primary">comfort</span>, and <span class="text-primary">unforgettable</span> moments—your perfect getaway awaits."
               </div>

               <div data-aos="fade-up" data-aos-delay="400">
                  <UButton
                     size="xl"
                     class="px-8"
                     @click="handleMainSectionScroll"
                  >
                     Let's Explore
                     <UIcon name="i-heroicons-arrow-long-right" class="animate-pulse text-white size-6" />
                  </UButton>
               </div>
            </div>
         </div>
      </div>
      <!-- endregion: hero -->

      <!-- region: dishes -->
      <section id="dishes" class="container mx-auto px-6 my-14">
         <div v-for="dishGroup in dishes" :id="dishGroup.id" :key="dishGroup.id" class="first:mt-0 mt-10">
            <div class="h-1.5 w-10 bg-primary mx-auto mb-2" data-aos="fade-up"></div>
            <h2 class="text-3xl xl:text-4xl font-bold capitalize text-primary text-center font-heading" data-aos="fade-up">
               {{ dishGroup.name }}
            </h2>
            <div class="mt-6 grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
               <div v-for="dish in dishGroup.dishes" :key="dish.id" data-aos="fade-up">
                  <CardComponent
                     :img="dish.img"
                     :title="dish.title"
                     :tag="dish.tag"
                  >
                     <p>{{ dish.about }}</p>
                  </CardComponent>
               </div>
            </div>
         </div>
      </section>
      <!-- endregion: dishes -->
   </div>
</template>

<style scoped lang="postcss">

</style>
