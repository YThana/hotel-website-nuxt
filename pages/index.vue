<script setup lang="ts">
// import { Autoplay } from 'swiper/modules'
import { handleMainSectionScroll } from '~/utils/scroll-utils';
import type { CardData } from '~/types/card-component-types';

// const SwiperAutoplay = Autoplay

useHead({
   title: 'Welcome - The Lagoon Hut',
});

const dishes: CardData[] = [
   {
      id: 1,
      img: '/dishes/dish-1.jpg',
      title: 'Panneer Butter Masala',
      about: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr Lorem ipsum dolor sit amet,',
   },
   {
      id: 2,
      img: '/dishes/dish-2.jpg',
      title: 'Paani Poori',
      about: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr Lorem ipsum dolor sit amet,',
      tag: 'New',
   },
];

const events: CardData[] = [
   {
      id: 1,
      img: '/events/event-1.jpg',
      title: 'Birthday Party',
      about: 'Lorem ipsum <span class="text-green-500">green</span> dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At',
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
];
</script>

<template>
   <!-- region: hero -->
   <div class="w-full h-screen bg-cover bg-no-repeat bg-center bg-[url('/hero.jpg')] shadow-[inset_0_100px_100px_-20px_rgba(0,0,0,0.8)]">
      <div class="flex h-full p-6 items-center justify-center">
         <div class="flex flex-col gap-8 md:gap-10 sm:text-center sm:items-center">
            <h1 class="font-bold text-6xl sm:text-8xl text-primary font-heading" data-aos="fade-up">
               Hotel
               <span class="text-white"> The <span class="text-primary">Lagoon</span> Hut</span>
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
                  Let's Explore
                  <UIcon name="i-heroicons-arrow-long-right" class="animate-pulse text-white size-6" />
               </UButton>
            </div>
         </div>
      </div>
   </div>
   <!-- endregion: hero -->

   <!-- region: about -->
   <section id="about" class="mt-14 container mx-auto px-6">
      <div class="flex flex-col-reverse lg:flex-row gap-10">
         <div class="w-full lg:w-1/2 flex items-center" data-aos="fade-right">
            <img src="/about-section/about-section-primary.jpg" class="size-full max-h-[48rem] object-cover" alt="hotel img" />
         </div>

         <div class="w-full md:justify-center lg:w-1/2 flex flex-col gap-6">
            <h4 class="section-heading-tag border-l-4 border-primary pl-4" data-aos="fade-left">
               About Lagoon Hut
            </h4>

            <h2 class="section-heading" data-aos="fade-left">
               Luxury and best service villa in the town
            </h2>

            <p class="text-slate-500" data-aos="fade-left">
               Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eius mod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex.
            </p>

            <div class="grid grid-cols-2 gap-x-8 gap-y-6" data-aos="fade-left">
               <div class="row-span-2">
                  <img src="/about-section/about-section-secondary.jpeg" class="size-full max-h-[24rem] object-cover" alt="hotel image" />
               </div>

               <div class="flex flex-col justify-center">
                  <UIcon name="i-heroicons-home-modern" class="size-9 text-primary hover:text-primary-600" />

                  <h3 class="mt-2 text-lg md:text-xl font-medium font-heading">
                     Peaceful Place
                  </h3>
                  <p class="text-sm text-slate-500">
                     Lorem ipsum dolor sit amet consect elit.
                  </p>
               </div>

               <div class="flex flex-col justify-center">
                  <UIcon name="i-heroicons-sun-16-solid" class="animate-spin duration-200 size-9 text-primary hover:text-primary-600" />
                  <h3 class="mt-2 text-lg md:text-xl font-medium font-heading">
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
   <!-- endregion: about -->

   <!-- region: gallery -->
   <section id="image-gallery" class="mt-14 mx-auto container px-6">
      <div class="flex flex-col gap-5 items-center text-center">
         <h4 class="section-heading-tag" data-aos="fade-up">
            Our Gallery
         </h4>

         <h2 class="section-heading" data-aos="fade-up">
            Captured Moments in Hotel
         </h2>

         <p class="text-slate-500" data-aos="fade-up">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
         </p>
      </div>

      <!-- region: image grid -->
      <div class="flex flex-wrap w-full mt-8">
         <div class="grid grid-rows-3 grid-cols-1 md:grid-cols-3 gap-4 w-full md:h-[36rem] lg:h-[52rem] xl:h-[64rem]">
            <div class="group gallery-img-wrapper" data-aos="fade-up">
               <img src="/gallery-section/gallery-image-2.jpg" alt="gallery image 2" class="gallery-img" />
            </div>

            <div class="group gallery-img-wrapper row-span-2" data-aos="fade-up">
               <img src="/gallery-section/gallery-image-1.jpg" alt="gallery image 4" class="gallery-img" />
            </div>

            <div class="group gallery-img-wrapper" data-aos="fade-up">
               <img src="/gallery-section/gallery-image-4.jpg" alt="gallery image 1" class="gallery-img" />
            </div>

            <div class="group gallery-img-wrapper row-span-2" data-aos="fade-right">
               <img src="/gallery-section/gallery-image-6.jpg" alt="gallery image 5" class="gallery-img" />
            </div>

            <div class="group gallery-img-wrapper row-span-2" data-aos="fade-left">
               <img src="/gallery-section/gallery-image-3.jpg" alt="gallery image 3" class="gallery-img" />
            </div>

            <div class="group gallery-img-wrapper" data-aos="fade-up">
               <img src="/gallery-section/gallery-image-5.jpg" alt="gallery image 6" class="gallery-img" />
            </div>
         </div>
      </div>
      <!-- endregion: image grid -->
   </section>
   <!-- endregion: gallery -->

   <!-- region: Dishes -->
   <section id="dishes" class="mt-14">
      <div class="w-full bg-fixed shadow-[inset_0_400px_400px_120px_rgba(0,0,0,0.8)] h-[50rem] bg-no-repeat bg-center bg-cover bg-[url('/dishes-bg-home.webp')]">
         <div class="size-full container mx-auto px-6 flex items-center justify-center">
            <div class="flex w-full flex-col md:flex-row gap-y-8 gap-x-4">
               <div class="flex flex-col gap-6 w-full md:w-1/2 justify-center items-center md:items-start text-center md:text-left">
                  <h2 class="section-heading text-white" data-aos="fade-right">
                     Our Delicious Dishes
                  </h2>
                  <p class="text-white md:max-w-lg" data-aos="fade-right">
                     Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et
                  </p>
                  <div data-aos="fade-right">
                     <UButton
                        size="xl"
                        class="px-8"
                        color="orange"
                        to="/dishes"
                     >
                        See More Dishes
                        <UIcon name="i-heroicons-arrow-long-right" class="animate-pulse text-white size-6" />
                     </UButton>
                  </div>
               </div>

               <div class="w-full flex justify-center md:justify-end md:w-1/2" data-aos="fade-left">
                  <div class="w-full lg:w-[28rem] backdrop-blur-md bg-white/10">
                     <!-- region: dish card slider -->
                     <Swiper
                        :modules="[SwiperAutoplay]"
                        :loop="true"
                        :slides-per-view="1"
                        :autoplay="{
                           delay: 2000,
                           disableOnInteraction: true,
                        }"
                     >
                        <SwiperSlide v-for="dish in dishes" :key="dish.id">
                           <div class="p-4 h-[25rem] md:h-[28rem] flex items-center justify-center w-full">
                              <CardComponent
                                 :img="dish.img"
                                 :title="dish.title"
                                 :about="dish.about"
                                 :tag="dish.tag"
                                 type="swiper-dish"
                              />
                           </div>
                        </SwiperSlide>
                     </Swiper>
                     <!-- endregion: dish card slider -->
                  </div>
               </div>
            </div>
         </div>
      </div>
   </section>
   <!-- endregion: Dishes -->

   <!-- region: Events -->
   <section id="events" class="container mx-auto px-6 mt-14">
      <div class="flex flex-col gap-6">
         <h4 class="section-heading-tag border-l-4 border-primary pl-4" data-aos="fade-right">
            Event Types
         </h4>

         <div class="flex gap-4 items-center justify-between" data-aos="fade-right">
            <h2 class="section-heading">
               Our Comfort Events
            </h2>

            <!-- region: see more events button for md screen -->
            <div class="hidden md:flex" data-aos="fade-left">
               <UButton
                  to="/events"
                  label="See More Events"
                  variant="link"
                  class="text-xl font-normal"
                  :padded="false"
               >
                  <template #trailing>
                     <UIcon name="i-heroicons-arrow-long-right-16-solid" class="text-primary size-6" />
                  </template>
               </UButton>
            </div>
            <!-- endregion: see more events button for md screen -->
         </div>

         <div class="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-8 gap-x-6" data-aos="fade-up">
            <div v-for="event in events" :key="event.id" data-aos="fade-up">
               <CardComponent
                  :img="event.img"
                  :title="event.title"
                  :about="event.about"
                  :tag="event.tag"
               />
            </div>
         </div>

         <!-- region: see more events button for mobile screen -->
         <div class="mt-4 flex md:hidden justify-end" data-aos="fade-left">
            <UButton
               to="/events"
               label="See More Events"
               variant="link"
               class="text-xl font-normal"
               :padded="false"
            >
               <template #trailing>
                  <UIcon name="i-heroicons-arrow-long-right-16-solid" class="text-primary size-6" />
               </template>
            </UButton>
         </div>
         <!-- endregion: see more events button for mobile screen -->
      </div>
   </section>
   <!-- endregion: Events -->

   <!-- region: map iframe -->
   <section id="map" class="mt-14 bg-slate-100">
      <iframe
         src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3953.557478783252!2d81.70709557491931!3d7.7305336922878!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3afacdb7e66b6c7f%3A0x5183f651a5ba7e5d!2sThe%20Lagoon%20Hut!5e0!3m2!1sen!2slk!4v1724215936550!5m2!1sen!2slk"
         width="100%"
         height="450"
         style="border:0;"
         allowfullscreen
         loading="lazy"
         referrerpolicy="no-referrer-when-downgrade"
      >
      </iframe>
   </section>
   <!-- endregion: map iframe -->
</template>

<style scoped lang="postcss">
.gallery-img-wrapper{
   @apply transition-all overflow-hidden hover:shadow-[0px_0px_20px_0px_rgba(0,0,0,0.5)] duration-200
}

.gallery-img{
   @apply group-hover:scale-110 duration-200 object-cover size-full
}

.section-heading{
   @apply text-4xl xl:text-5xl font-bold uppercase font-heading
}

.section-heading-tag{
   @apply text-primary text-xl font-medium
}
</style>
