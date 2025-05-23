<script setup lang="ts">
import { handleScrollBottomOfPage } from '~/utils/scroll-utils';

const isFixed = ref(false);

const linkButtonClass = computed(() => {
   if (isFixed.value)
      return 'text-black';
   return 'text-white';
});

function onScroll() {
   isFixed.value = window.scrollY > 20;
}

onMounted(() => {
   onScroll();
   window.addEventListener('scroll', onScroll);
});

onUnmounted(() => {
   window.removeEventListener('scroll', onScroll);
});
</script>

<template>
   <div class="w-full h-full">
      <!-- region: whatsapp contact -->
      <!-- add the contact no in url after 94 -->
      <div class="fixed z-20 bottom-6 right-6">
         <UButton
            variant="link"
            :padded="false"
            target="_blank"
            to="https://wa.me/94"
         >
            <span class="relative flex size-12 md:size-16">
               <span class="animate-lower-ping absolute inline-flex size-full rounded-full"></span>
               <UIcon name="i-logos-whatsapp-icon" class="relative z-10 hover:brightness-90 size-12 md:size-16" />
            </span>
         </UButton>
      </div>
      <!-- endregion: whatsapp contact -->

      <header
         class="w-full z-10 fixed top-0"
         :class="[isFixed && 'transition-all backdrop-blur-md bg-white/75 shadow-lg']"
      >
         <section
            class="container mx-auto p-6"
         >
            <div class="flex gap-6 justify-between items-center">
               <ULink
                  to="/"
               >
                  <IconLogo class="h-8 w-auto sm:h-10" :class="[isFixed ? 'text-primary' : 'text-white']" />
               </ULink>
               <div class="hidden md:flex gap-6 lg:gap-12 items-center">
                  <ULink
                     class="font-heading hover:text-primary"
                     to="/"
                     active-class="font-bold text-primary"
                     :inactive-class="linkButtonClass"
                  >
                     Home
                  </ULink>
                  <ULink
                     class="font-heading hover:text-primary"
                     to="/events"
                     active-class="font-bold text-primary"
                     :inactive-class="linkButtonClass"
                  >
                     Events
                  </ULink>
                  <ULink
                     class="font-heading hover:text-primary"
                     to="/dishes"
                     active-class="font-bold text-primary"
                     :inactive-class="linkButtonClass"
                  >
                     Dishes
                  </ULink>

                  <UButton class="font-heading" label="Contact Us" size="xl" @click="handleScrollBottomOfPage" />
               </div>

               <div class="flex md:hidden">
                  <MobileNavMenu v-model="isFixed" />
               </div>
            </div>
         </section>
      </header>

      <main class="w-full">
         <slot />
      </main>

      <footer>
         <div class="w-full bg-primary-100 px-6 py-10">
            <div class="container mx-auto w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
               <section class="flex flex-col gap-8">
                  <ULink to="/">
                     <IconLogo class="text-primary h-8 sm:h-10 w-auto" />
                  </ULink>
                  <div class="flex items-center gap-3">
                     <ULink>
                        <UIcon name="i-uil-facebook" class="size-6 text-slate-500 hover:text-primary" />
                     </ULink>

                     <ULink>
                        <UIcon name="i-uil-instagram" class="size-6 text-slate-500 hover:text-pink-500" />
                     </ULink>
                  </div>
               </section>

               <section class="flex flex-col gap-3 items-start md:ml-20 lg:ml-0">
                  <h3 class="font-bold text-lg uppercase font-heading">
                     Links
                  </h3>
                  <ULink
                     to="/"
                     active-class="font-bold text-primary"
                     inactive-class="text-black hover:text-primary"
                  >
                     Home
                  </ULink>
                  <ULink
                     to="/events"
                     active-class="font-bold text-primary"
                     inactive-class="text-black hover:text-primary"
                  >
                     Events
                  </ULink>
                  <ULink
                     to="/dishes"
                     active-class="font-bold text-primary"
                     inactive-class="text-black hover:text-primary"
                  >
                     Dishes
                  </ULink>
               </section>

               <div class="flex flex-col gap-4">
                  <h3 class="font-bold text-lg uppercase font-heading">
                     Contact Us
                  </h3>
                  <div class="flex gap-3 items-center">
                     <UIcon name="i-heroicons-phone-solid" class="size-5 text-slate-500" />
                     <p>+94 65 852 5888</p>
                  </div>
                  <!-- add the whatsapp number in the ULink url after 94 -->
                  <div class="flex gap-3 items-center group">
                     <UIcon name="i-uil-whatsapp" class="size-5 text-green-600 group-hover:text-green-500" />
                     <ULink
                        to="https://wa.me/94"
                        class="text-green-600 group-hover:text-green-500"
                        target="_blank"
                     >
                        Click here to WhatsApp Chat!
                     </ULink>
                  </div>
                  <div class="flex gap-3 items-center">
                     <UIcon name="i-heroicons-envelope-20-solid" class="size-5 text-slate-500" />
                     <p>abc@gmail.com</p>
                  </div>
                  <div class="flex gap-3 items-center">
                     <UIcon name="i-heroicons-home-solid" class="size-5 text-slate-500" />
                     <p>No.02 some street, Navalady, Batticaloa</p>
                  </div>
               </div>

               <section class="md:col-span-2 lg:col-span-3 text-sm border-t pt-3 border-primary-200 text-slate-500 text-center">
                  Copyright © {{ new Date().getFullYear() }} Lagoon Hut | All rights reserved
               </section>
            </div>
         </div>
      </footer>
   </div>
</template>

<style scoped lang="postcss">
@keyframes lower-ping {
   0% {
      transform: scale(1);
   }
   50% {
      transform: scale(1.3);
      background-color: #4ade80;
      opacity: 0.5;
   }
   100% {
      transform: scale(1.7);
      background-color: #86efac;
      opacity: 0;
   }
}

.animate-lower-ping {
   animation: lower-ping 1.5s cubic-bezier(0, 0, 0.2, 1) infinite;
}
</style>
