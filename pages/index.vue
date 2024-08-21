<script setup lang="ts">
function handleLetsExplore() {
   window.scrollTo(0, window.innerHeight - 90);
}
</script>

<template>
   <!-- start: hero -->
   <div class="w-full h-screen bg-cover bg-no-repeat bg-center bg-[url('/hero.jpg')] shadow-[inset_0_100px_100px_-20px_rgba(0,0,0,0.8)]">
      <div class="flex h-full p-6 items-center justify-center">
         <div class="flex flex-col gap-8 md:gap-10">
            <h1 class="font-bold text-6xl md:text-8xl text-primary">
               Hotel
               <span class="text-white">Lagoon Hut</span>
            </h1>

            <p class="text-white italic font-bold text-2xl md:text-3xl md:text-4xl md:max-w-xl md:mx-auto md:text-center">
               "Experience <span class="text-primary">luxury</span>, <span class="text-primary">comfort</span>, and <span class="text-primary">unforgettable</span> moments—your perfect getaway awaits."
            </p>

            <div class="flex md:justify-center">
               <UButton
                  size="xl"
                  @click="handleLetsExplore"
               >
                  Let's Explore
                  <UIcon name="i-heroicons-arrow-long-right" class="animate-pulse text-white size-6" />
               </UButton>
            </div>
         </div>
      </div>
   </div>
   <!-- end: hero -->

   <!-- start: about -->
   <section id="about" class="mt-14 container mx-auto px-6">
      <div class="flex flex-col-reverse lg:flex-row gap-10">
         <div class="w-full lg:w-1/2 flex items-center">
            <img src="/about-section/about-section-primary.jpg" class="size-full max-h-[48rem] object-cover" alt="hotel img" />
         </div>

         <div class="w-full md:justify-center lg:w-1/2 flex flex-col gap-6">
            <h4 class="section-heading-tag border-l-4 border-primary pl-4">
               About Lagoon Hut
            </h4>

            <h2 class="section-heading">
               Luxury and best service villa in the town
            </h2>

            <p class="text-slate-500">
               Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eius mod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex.
            </p>

            <div class="grid grid-cols-2 gap-x-8 gap-y-6">
               <div class="row-span-2">
                  <img src="/about-section/about-section-secondary.jpeg" class="size-full max-h-[24rem] object-cover" alt="hotel image" />
               </div>

               <div class="flex flex-col justify-center">
                  <UIcon name="i-heroicons-home-modern" class="size-9 text-primary hover:text-primary-600" />

                  <h3 class="mt-2 text-lg md:text-xl font-medium">
                     Peaceful Place
                  </h3>
                  <p class="text-sm text-slate-500">
                     Lorem ipsum dolor sit amet consect elit.
                  </p>
               </div>

               <div class="flex flex-col justify-center">
                  <UIcon name="i-heroicons-sun-16-solid" class="animate-spin duration-200 size-9 text-primary hover:text-primary-600" />
                  <h3 class="mt-2 text-lg md:text-xl font-medium">
                     Top Travel
                  </h3>
                  <p class="text-sm text-slate-500">
                     Lorem ipsum dolor sit amet consect elit.
                  </p>
               </div>
            </div>
         </div>
      </div>
   </section>
   <!-- end: about -->

   <!-- start: gallery -->
   <section id="image-gallery" class="mt-14 mx-auto container px-6">
      <div class="flex flex-col gap-5 items-center text-center">
         <h4 class="section-heading-tag">
            Our Gallery
         </h4>

         <h2 class="section-heading">
            Captured Moments in Hotel
         </h2>

         <p class="text-slate-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
         </p>
      </div>

      <!-- start: image grid -->
      <div class="flex flex-wrap w-full mt-8">
         <div class="grid grid-rows-3 grid-cols-1 md:grid-cols-3 gap-4 w-full md:h-[36rem] lg:h-[52rem] xl:h-[64rem]">
            <div class="group gallery-img-wrapper">
               <img src="/gallery-section/gallery-image-2.jpg" alt="gallery image 2" class="gallery-img" />
            </div>

            <div class="group gallery-img-wrapper row-span-2">
               <img src="/gallery-section/gallery-image-1.jpg" alt="gallery image 4" class="gallery-img" />
            </div>

            <div class="group gallery-img-wrapper">
               <img src="/gallery-section/gallery-image-4.jpg" alt="gallery image 1" class="gallery-img" />
            </div>

            <div class="group gallery-img-wrapper row-span-2">
               <img src="/gallery-section/gallery-image-6.jpg" alt="gallery image 5" class="gallery-img" />
            </div>

            <div class="group gallery-img-wrapper row-span-2">
               <img src="/gallery-section/gallery-image-3.jpg" alt="gallery image 3" class="gallery-img" />
            </div>

            <div class="group gallery-img-wrapper">
               <img src="/gallery-section/gallery-image-5.jpg" alt="gallery image 6" class="gallery-img" />
            </div>
         </div>
      </div>
      <!-- end: image grid -->
   </section>
   <!-- end: gallery -->

   <!-- start: Dishes -->
   <section id="dishes" class="mt-14">
      <div class="w-full bg-fixed shadow-[inset_0_400px_400px_120px_rgba(0,0,0,0.8)] h-[50rem] bg-no-repeat bg-center bg-cover bg-[url('/dishes-bg.webp')]">
         <div class="size-full container mx-auto px-6 flex items-center justify-center">
            <div class="flex gap-4 w-full">
               <div class="flex flex-col gap-6 w-1/2 items-start">
                  <h2 class="section-heading text-white">
                     Our Delicious Dishes
                  </h2>
                  <p class="text-white max-w-lg">
                     Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et
                  </p>
                  <UButton color="orange" label="See More Dishes" class="px-8" size="xl" />
               </div>
               <div class="w-1/2"></div>
            </div>
         </div>
      </div>
   </section>
   <!-- end: Dishes -->

   <!-- start: Events -->
   <section id="events" class="container mx-auto px-6 mt-14">
      <div class="flex flex-col gap-6">
         <h4 class="section-heading-tag border-l-4 border-primary pl-4">
            Event Types
         </h4>

         <h2 class="section-heading">
            Our Comfort Events
         </h2>

         <div class="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-8 gap-x-6">
            <EventCard />
            <EventCard />
            <EventCard />
         </div>
      </div>
   </section>
   <!-- end: Events -->
</template>

<style scoped lang="postcss">
.gallery-img-wrapper{
   @apply transition-all overflow-hidden hover:shadow-2xl shadow-slate-200 duration-200
}

.gallery-img{
   @apply group-hover:scale-110 duration-200 object-cover size-full
}

.section-heading{
   @apply text-4xl xl:text-5xl font-semibold uppercase
}

.section-heading-tag{
   @apply text-primary text-xl font-medium
}
</style>
