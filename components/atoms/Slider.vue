<template>
  <div class="slider">
    <swiper
      :slides-per-view="4"
      :space-between="40"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
    >
      <swiper-slide>
        Slide 1
      </swiper-slide>
      <swiper-slide>Slide 2</swiper-slide>
      <swiper-slide>Slide 3</swiper-slide>
      <swiper-slide>Slide 4</swiper-slide>
    </swiper>
  </div>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue';
// Import Swiper styles
import 'swiper/css';

const props = defineProps({
  slidesPerView: {
    type: Number,
    required: true,
    default: 4
  },
  itemsPerSlide: {
    type: Number,
    required: false,
    default: 1
  },
  items: {
    type: Array,
    required: true,
    default: () => []
  }
})

const onSwiper = (swiper) => {
  console.log(swiper);
};
const onSlideChange = () => {
  console.log('slide change');
};
</script>