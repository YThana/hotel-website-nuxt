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
   window.addEventListener('scroll', checkScroll);
});

onUnmounted(() => {
   window.removeEventListener('scroll', checkScroll);
});
</script>

<template>
   <div>
      <header
         class="w-full p-6 fixed left-1/2 -translate-x-1/2"
         :class="[isFixed && 'transition-all bg-white bg-opacity-75 shadow-lg']"
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
                     Rooms
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

      <footer>
         footer
      </footer>
   </div>
</template>

<style scoped lang="postcss">

</style>
