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
                  active-class="text-3xl font-semibold text-primary"
                  inactive-class="text-slate-700 text-3xl"
                  @click="isOpen = false"
               >
                  Home
               </ULink>
               <ULink
                  to="/events"
                  active-class="text-3xl font-semibold text-primary"
                  inactive-class="text-slate-700 text-3xl"
                  @click="isOpen = false"
               >
                  Events
               </ULink>
               <ULink
                  to="/dishes"
                  active-class="text-3xl font-semibold text-primary"
                  inactive-class="text-slate-700 text-3xl"
                  @click="isOpen = false"
               >
                  Dishes
               </ULink>
               <UButton label="Contact Us" size="xl" @click="handleContactUs" />
            </div>
         </div>
      </USlideover>
   </div>
</template>

<style scoped lang="postcss">

</style>
