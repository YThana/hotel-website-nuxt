<script setup lang="ts">
function handleLetsClick() {
   window.scrollTo(0, window.innerHeight - 92);
}
</script>

<template>
   <div class="w-full h-screen bg-cover bg-center bg-[url('/hero.jpg')]">
      <div class="flex h-full p-6 items-center justify-center">
         <div class="flex flex-col gap-10">
            <h1 class="font-bold text-7xl md:text-8xl text-primary">
               Hotel
               <span class="text-white">KRISHNA</span>
            </h1>

            <p class="text-white italic font-bold text-3xl md:text-4xl md:max-w-xl md:mx-auto md:text-center">
               "Experience <span class="text-primary">luxury</span>, <span class="text-primary">comfort</span>, and <span class="text-primary">unforgettable</span> moments—your perfect getaway awaits."
            </p>

            <div class="flex md:justify-center">
               <UButton
                  size="xl"
                  @click="handleLetsClick"
               >
                  Let's Explore
                  <UIcon name="i-heroicons-arrow-long-right" class="animate-pulse text-white size-6" />
               </UButton>
            </div>
         </div>
      </div>
   </div>

   <!-- start: about -->
   <section class="mt-14 container mx-auto px-6">
      <div class="flex flex-col-reverse lg:flex-row gap-10">
         <div class="w-full lg:w-1/2 flex items-center">
            <img src="/about-section/about-section-primary.jpg" class="" alt="hotel img" />
         </div>

         <div class="w-full md:justify-center lg:w-1/2 flex flex-col gap-6">
            <h4 class="text-primary text-xl font-medium">
               About Krishna
            </h4>

            <h2 class="text-4xl xl:text-5xl font-semibold uppercase">
               Luxury and best service villa in the town
            </h2>

            <p class="text-slate-500">
               Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eius mod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex.
            </p>

            <div class="grid grid-cols-2 gap-x-8 gap-y-6">
               <div class="row-span-2">
                  <img src="/about-section/about-section-secondary.jpeg" class="size-full object-cover" alt="hotel image" />
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
   <section class="mt-14 mx-auto container px-6">
      <div class="flex flex-col gap-5 items-center text-center">
         <h4 class="text-primary text-xl font-medium">
            Our Gallery
         </h4>

         <h2 class="text-4xl xl:text-5xl font-semibold uppercase">
            Captured Moments in Hotel
         </h2>

         <p class="text-slate-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
         </p>
      </div>

      <!-- start: image grid -->
      <div class="flex flex-wrap w-full mt-8">
         <div class="grid md:grid-cols-3 gap-4">
            <section class="flex flex-col gap-4">
               <img src="/gallery-section/gallery-image-2.jpg" alt="gallery image 2" />
               <img src="/gallery-section/gallery-image-4.jpg" alt="gallery image 4" class="object-cover" />
            </section>

            <section class="flex flex-col gap-4">
               <img src="/gallery-section/gallery-image-1.jpg" alt="gallery image 1" class="object-cover" />
               <img src="/gallery-section/gallery-image-5.jpg" alt="gallery image 5" class="object-cover" />
            </section>

            <section class="flex flex-col gap-4">
               <img src="/gallery-section/gallery-image-3.jpg" alt="gallery image 3" class="object-cover" />
               <img src="/gallery-section/gallery-image-6.jpg" alt="gallery image 6" class="object-cover" />
            </section>
         </div>
      </div>
      <!-- end: image grid -->
   </section>
   <!-- end: gallery -->
</template>

<style scoped lang="postcss">

</style>
