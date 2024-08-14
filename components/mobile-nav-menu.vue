<script setup lang="ts">
const isOpen = ref(false);

const isFixed = defineModel();
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
         <div class="min-h-screen overflow-auto w-full p-6">
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
               >
                  Home
               </ULink>
               <ULink
                  active-class="font-semibold text-primary"
                  inactive-class="text-slate-700 text-3xl"
               >
                  Rooms
               </ULink>
               <ULink
                  active-class="font-semibold text-primary"
                  inactive-class="text-slate-700 text-3xl"
               >
                  Dishes
               </ULink>
            </div>
         </div>
      </USlideover>
   </div>
</template>

<style scoped lang="postcss">

</style>
