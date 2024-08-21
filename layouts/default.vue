<script setup lang="ts">
const isFixed = ref(false);

function checkScroll() {
   isFixed.value = window.scrollY > 20;
}

const linkButtonClass = computed(() => {
   if (isFixed.value)
      return 'hover:text-primary-500 text-black';
   return 'hover:text-primary-500  text-white';
});

onMounted(() => {
   checkScroll();
   window.addEventListener('scroll', checkScroll);
});

onUnmounted(() => {
   window.removeEventListener('scroll', checkScroll);
});
</script>

<template>
   <div>
      <header
         class="w-full p-6 z-10 fixed left-1/2 -translate-x-1/2"
         :class="[isFixed && 'transition-all backdrop-blur-md bg-white/75 shadow-lg']"
      >
         <section
            class="container mx-auto"
         >
            <div class="flex gap-6 justify-between items-center">
               <h3
                  class="text-4xl font-bold"
                  :class="[!isFixed && 'text-white']"
               >
                  Logo
               </h3>
               <div class="hidden md:flex gap-6 items-center">
                  <ULink
                     to="/"
                     active-class="font-bold text-primary"
                     :inactive-class="linkButtonClass"
                  >
                     Home
                  </ULink>
                  <ULink
                     active-class="font-bold text-primary"
                     :inactive-class="linkButtonClass"
                  >
                     Events
                  </ULink>
                  <ULink
                     active-class="font-bold text-primary"
                     :inactive-class="linkButtonClass"
                  >
                     Dishes
                  </ULink>

                  <UButton label="Contact Us" size="xl" />
               </div>

               <div class="flex md:hidden">
                  <MobileNavMenu v-model="isFixed" />
               </div>
            </div>
         </section>
      </header>

      <main>
         <slot />
      </main>

      <footer class="mt-14">
         <div class="w-full bg-primary-100 px-6 py-10">
            <div class="container mx-auto w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
               <section class="flex flex-col gap-4">
                  <h2 class="text-5xl font-bold">
                     Logo
                  </h2>
                  <p class="max-w-72 text-slate-600">
                     Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                  </p>
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
                  <h3 class="font-bold text-lg uppercase">
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
                     active-class="font-bold text-primary"
                     inactive-class="text-black hover:text-primary"
                  >
                     Events
                  </ULink>
                  <ULink
                     active-class="font-bold text-primary"
                     inactive-class="text-black hover:text-primary"
                  >
                     Dishes
                  </ULink>
               </section>

               <div class="flex flex-col gap-4">
                  <h3 class="font-bold text-lg uppercase">
                     Contact Us
                  </h3>
                  <div class="flex gap-3 items-center">
                     <UIcon name="i-heroicons-phone-solid" class="size-5 text-slate-600" />
                     <p>+94658525888</p>
                  </div>
                  <div class="flex gap-3 items-center">
                     <UIcon name="i-heroicons-envelope-20-solid" class="size-5 text-slate-600" />
                     <p>abc@gmail.com</p>
                  </div>
                  <div class="flex gap-3 items-center">
                     <UIcon name="i-heroicons-home-solid" class="size-5 text-slate-600" />
                     <p>No.02 some street, Navalady, Batticaloa</p>
                  </div>
               </div>

               <section class="md:col-span-2 lg:col-span-3 border-t pt-3 border-primary-200 text-slate-500 text-center">
                  Copyright © {{ new Date().getFullYear() }} Lagoon Hut | All rights reserved
               </section>
            </div>
         </div>
      </footer>
   </div>
</template>

<style scoped lang="postcss">

</style>
