<script setup lang="ts">
interface Props {
   img?: string;
   title?: string;
   about?: string;
}

defineProps<Props>();
</script>

<template>
   <div class="flex flex-col w-full gap-4">
      <div class="w-full h-48 xl:h-64 overflow-hidden">
         <img src="/events/event-1.jpg" alt="event pic" class="size-full duration-300 hover:scale-125 object-cover" />
      </div>
      <h3 class="text-2xl font-semibold text-primary">
         Birthday Party
      </h3>
      <p class="text-slate-500">
         Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At
      </p>
   </div>
</template>

<style scoped lang="postcss">

</style>
