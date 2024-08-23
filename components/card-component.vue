<script setup lang="ts">
export interface CardData {
   img: string;
   title: string;
   about: string;
   tag?: string;
   type?: 'swiper-dish' | 'base';
}

const props = withDefaults(defineProps<CardData>(), {
   type: 'base',
});

const isTypeSwiperDIsh = computed(() => {
   return props.type === 'swiper-dish';
});
</script>

<template>
   <div class="w-full h-full flex flex-col gap-4">
      <div class="h-48 lg:h-64 relative overflow-hidden">
         <div
            v-if="tag"
            class="capitalize absolute bg-orange-500 right-3 top-3 py-1 rounded-xl px-3 text-sm text-white font-semibold"
         >
            {{ tag }}
         </div>
         <img :src="img" alt="cover pic" class="size-full duration-300 hover:scale-125 object-cover" />
      </div>
      <h3
         class="text-2xl font-semibold capitalize font-heading"
         :class="[isTypeSwiperDIsh ? 'text-orange-500' : 'text-primary']"
      >
         {{ title }}
      </h3>
      <p :class="[isTypeSwiperDIsh ? 'text-white' : 'text-slate-700']">
         {{ about }}}
      </p>
   </div>
</template>

<style scoped lang="postcss">

</style>
