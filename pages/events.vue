<script setup lang="ts">
import { handleMainSectionScroll } from '~/helpers/handle-scroll';
import type { CardData } from '~/types/card-component-types';

const events: CardData[] = [
   {
      id: 1,
      img: '/events/event-1.jpg',
      title: 'Birthday Party',
      about: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At',
   },
   {
      id: 2,
      img: '/events/event-1.jpg',
      title: 'Birthday Party',
      about: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At',
   },
   {
      id: 3,
      img: '/events/event-1.jpg',
      title: 'Birthday Party',
      about: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At',
   },
   {
      id: 4,
      img: '/events/event-1.jpg',
      title: 'Birthday Party',
      about: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At',
   },
   {
      id: 5,
      img: '/events/event-1.jpg',
      title: 'Birthday Party',
      about: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At',
   },
];
</script>

<template>
   <div class="w-full">
      <!-- region: hero -->
      <div class="w-full h-screen bg-cover bg-no-repeat bg-center bg-[url('/events-bg.jpg')] shadow-[inset_0_100px_100px_-20px_rgba(0,0,0,0.8)]">
         <div class="flex h-full p-6 items-center justify-center">
            <div class="flex flex-col gap-8 md:gap-10 sm:text-center sm:items-center">
               <h1 class="font-bold text-6xl sm:text-8xl text-primary font-heading" data-aos="fade-up">
                  Hotel
                  <span class="text-white">Lagoon Hut</span>
               </h1>

               <p class="text-white italic font-bold text-2xl sm:text-4xl md:max-w-xl" data-aos="fade-up" data-aos-delay="200">
                  "Experience <span class="text-primary">luxury</span>, <span class="text-primary">comfort</span>, and <span class="text-primary">unforgettable</span> moments—your perfect getaway awaits."
               </p>

               <div data-aos="fade-up" data-aos-delay="400">
                  <UButton
                     size="xl"
                     class="px-8"
                     @click="handleMainSectionScroll"
                  >
                     Explore Events
                     <UIcon name="i-heroicons-arrow-long-right" class="animate-pulse text-white size-6" />
                  </UButton>
               </div>
            </div>
         </div>
      </div>
      <!-- endregion: hero -->

      <!-- region: events -->
      <section id="dishes" class="container mx-auto px-6 my-14">
         <div class="h-1.5 w-10 bg-primary mx-auto mb-2" data-aos="fade-up"></div>
         <h2 class="text-5xl font-semibold text-primary text-center font-heading" data-aos="fade-up">
            Events
         </h2>

         <div class="mt-6 grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
            <div v-for="event in events" :key="event.id" data-aos="fade-up">
               <CardComponent
                  :img="event.img"
                  :about="event.about"
                  :title="event.title"
                  :tag="event.tag"
               />
            </div>
         </div>
      </section>
      <!-- endregion: events -->
   </div>
</template>

<style scoped lang="postcss">

</style>
