<script setup lang="ts">
import type { CardData } from '~/types/card-component-types';

const props = withDefaults(defineProps<CardData>(), {
   type: 'base',
});

const isTypeSwiperDish = computed(() => {
   return props.type === 'swiper-dish';
});
</script>

<template>
   <div class="w-full h-full flex flex-col gap-4">
      <div class="h-48 relative lg:h-64 overflow-hidden">
         <div
            v-if="tag"
            class="capitalize z-10 absolute bg-orange-500 right-3 top-3 py-1 rounded-xl px-3 text-sm text-white font-semibold"
         >
            {{ tag }}
         </div>

         <img :src="img" alt="cover pic" class="size-full duration-300 hover:scale-125 object-cover" />
      </div>

      <h3
         class="text-2xl font-semibold capitalize font-heading"
         :class="[isTypeSwiperDish ? 'text-orange-500' : 'text-primary']"
      >
         {{ title }}
      </h3>

      <div :class="[isTypeSwiperDish ? 'text-white' : 'text-slate-700']">
         <slot />
      </div>
   </div>
</template>

<style scoped lang="postcss">

</style>
