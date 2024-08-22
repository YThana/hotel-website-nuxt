<script setup lang="ts">

</script>

<template>
   <div class="w-full">
      <!-- region: hero -->
      <div class="w-full h-screen bg-cover bg-no-repeat bg-center bg-[url('/events-bg.jpg')] shadow-[inset_0_100px_100px_-20px_rgba(0,0,0,0.8)]">
         <div class="flex h-full p-6 items-center justify-center">
            <div class="flex flex-col gap-8 md:gap-10 sm:text-center sm:items-center">
               <h1 class="font-bold text-6xl sm:text-8xl text-primary">
                  Hotel
                  <span class="text-white">Lagoon Hut</span>
               </h1>

               <p class="text-white italic font-bold text-2xl sm:text-4xl md:max-w-xl">
                  "Experience <span class="text-primary">luxury</span>, <span class="text-primary">comfort</span>, and <span class="text-primary">unforgettable</span> moments—your perfect getaway awaits."
               </p>

               <div>
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

      <!-- region: events -->
      <section id="dishes" class="container mx-auto px-6 my-14">
         <div class="h-1.5 w-10 bg-primary mx-auto mb-2"></div>
         <h2 class="text-5xl font-semibold text-primary text-center">
            Events
         </h2>

         <div class="mt-6 grid gap-6 grid-cols-2 md:grid-cols-2 lg:grid-cols-3 ">
            <div v-for="event in 5" :key="event">
               <EventCard />
            </div>
         </div>
      </section>
      <!-- endregion: events -->
   </div>
</template>

<style scoped lang="postcss">

</style>
