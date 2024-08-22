<script setup lang="ts">
interface Props {
   img?: string;
   title?: string;
   about?: string;
}

defineProps<Props>();
</script>

<template>
   <div class="w-full h-full flex flex-col gap-4">
      <div class="h-48 md:h-3/5">
         <img :src="img" alt="dish pic" class="object-cover w-full h-full" />
      </div>
      <h3 class="text-2xl font-semibold capitalize text-orange-500">
         {{ title }}
      </h3>
      <p class="text-white">
         {{ about }}}
      </p>
   </div>
</template>

<style scoped lang="postcss">

</style>
