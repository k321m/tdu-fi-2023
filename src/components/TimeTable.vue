<template>
  <div>
    <h2>タイムテーブル</h2>
    <v-row no-gutters>
      <v-col cols="2">
        <v-timeline>
          <v-timeline-item size="xx-small">
            <template v-slot:opposite> <span>10:00</span> </template>
          </v-timeline-item>

          <v-timeline-item size="xx-small" class="pa-0">
            <span>11:15</span>
          </v-timeline-item>

          <v-timeline-item size="xx-small">
            <template v-slot:opposite> <span>11:35</span> </template>
          </v-timeline-item>
          <v-timeline-item size="xx-small">
            <span>12:15</span>
          </v-timeline-item>
          <v-timeline-item size="xx-small">
            <template v-slot:opposite> <span>12:35</span> </template>
          </v-timeline-item>

          <v-timeline-item size="xx-small" class="pa-0">
            <span>13:15</span>
          </v-timeline-item>

          <v-timeline-item size="xx-small">
            <template v-slot:opposite> <span>13:35</span> </template>
          </v-timeline-item>
          <v-timeline-item size="xx-small">
            <span>14:15</span>
          </v-timeline-item>
        </v-timeline>
      </v-col>
      <v-col>
        <div class="mt-8">
          <Carousel :itemsToShow="2.5" snapAlign="start" :transition="1500">
            <Slide v-for="slide in 10" :key="slide">
              <div class="carousel__item">{{ slide }}</div>
            </Slide>
          </Carousel>
        </div>
        <div class="mt-8">
          <Carousel :itemsToShow="2.5" snapAlign="start" :transition="1500">
            <Slide v-for="slide in 10" :key="slide">
              <div class="carousel__item">{{ slide }}</div>
            </Slide>
          </Carousel>
        </div>
        <div class="mt-8">
          <Carousel :itemsToShow="2.5" snapAlign="start" :transition="1500">
            <Slide v-for="slide in 10" :key="slide">
              <div class="carousel__item">{{ slide }}</div>
            </Slide>
          </Carousel>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { Carousel, Navigation, Pagination, Slide } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";
export default {
  name: "TimeTable",
  components: {
    Carousel,
    Slide,
  },
};
</script>

<style scoped>
span {
  font-family: "hack", sans-serif;
  font-weight: 700;
  font-style: normal;
  font-size: small;
}

.carousel__item {
  min-height: 50px;
  width: 100%;
  background-color: var(--vc-clr-primary);
  color: var(--vc-clr-white);
  font-size: 20px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.carousel__slide {
  padding: 3px;
}
</style>
