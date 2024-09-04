<script setup lang="ts">
import { handleScrollBottomOfPage } from '~/utils/scroll-utils';

const isOpen = ref(false);

const isFixed = defineModel();

function handleContactUs() {
   isOpen.value = false;
   handleScrollBottomOfPage();
}
</script>

<template>
   <div>
      <UButton
         variant="link"
         :padded="false"
         @click="isOpen = true"
      >
         <UIcon
            name="i-heroicons-bars-3-bottom-left"
            class="size-8"
            :class="[isFixed ? 'text-black' : 'text-white']"
         />
      </UButton>

      <USlideover v-model="isOpen">
         <div class="min-h-screen bg-white bg-opacity-60 backdrop-blur-md overflow-auto w-full p-6">
            <div class="flex items-center flex-col gap-16">
               <UButton
                  variant="link"
                  :padded="false"
                  color="black"
                  @click="isOpen = false"
               >
                  <UIcon name="i-heroicons-x-mark" class="size-9" />
               </UButton>

               <ULink
                  to="/"
                  class="font-heading text-3xl"
                  active-class="font-bold text-primary"
                  inactive-class="text-slate-700"
                  @click="isOpen = false"
               >
                  Home
               </ULink>
               <ULink
                  to="/events"
                  class="font-heading text-3xl"
                  active-class="font-bold text-primary"
                  inactive-class="text-slate-700"
                  @click="isOpen = false"
               >
                  Events
               </ULink>
               <ULink
                  to="/dishes"
                  class="font-heading text-3xl"
                  active-class="font-bold text-primary"
                  inactive-class="text-slate-700"
                  @click="isOpen = false"
               >
                  Dishes
               </ULink>
               <UButton class="font-heading px-12 py-3 text-2xl" label="Contact Us" size="xl" @click="handleContactUs" />
            </div>
         </div>
      </USlideover>
   </div>
</template>

<style scoped lang="postcss">

</style>
