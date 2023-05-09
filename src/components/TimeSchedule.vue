<template>
  <div class="py-8">
    <div class="background">
      <div class="time-schedule">
        <div class="py-4 pl-4">
          <p class="zen-kaku-h5 pl-5 pb-2">タイムスケジュール</p>
          <VueTyper
            class="pl-1 hack-h2"
            text=">Time Schedule"
            type-delay="55"
            :repeat="0"
          >
          </VueTyper>
        </div>
        <div class="py-4">
          <p class="zen-kaku-h5 pl-4 pb-3">終日開催</p>
          <div class="pl-4">
            <Carousel :itemsToShow="2.9" snapAlign="start" :transition="1500">
              <Slide v-for="slide in 10" :key="slide">
                <div class="carousel__item">{{ slide }}</div>
              </Slide>
            </Carousel>
          </div>
        </div>
        <div class="py-4">
          <p class="zen-kaku-h5 pl-4 pb-3">限定プログラム</p>
          <v-row class="pl-4">
            <v-col cols="2">
              <v-timeline line-color="black" side="end">
                <v-timeline-item height="56px" size="xx-small">
                  <template v-slot:opposite>
                    <span class="hack-h5">10:00</span>
                  </template>
                </v-timeline-item>

                <v-timeline-item height="32px" size="xx-small">
                  <template v-slot:opposite>
                    <span class="hack-h5">11:15</span>
                  </template>
                </v-timeline-item>
                <v-timeline-item height="32px" size="xx-small">
                  <template v-slot:opposite>
                    <span class="hack-h5">11:35</span>
                  </template>
                </v-timeline-item>

                <v-timeline-item height="32px" size="xx-small">
                  <template v-slot:opposite>
                    <span class="hack-h5">12:15</span>
                  </template>
                </v-timeline-item>

                <v-timeline-item height="32px" size="xx-small">
                  <template v-slot:opposite>
                    <span class="hack-h5">12:35</span>
                  </template>
                </v-timeline-item>

                <v-timeline-item height="32px" size="xx-small">
                  <template v-slot:opposite>
                    <span class="hack-h5">13:15</span>
                  </template>
                </v-timeline-item>

                <v-timeline-item height="32px" size="xx-small" class="pa-0">
                  <template v-slot:opposite>
                    <span class="hack-h5">13:35</span>
                  </template>
                </v-timeline-item>

                <v-timeline-item height="32px" size="xx-small">
                  <template v-slot:opposite>
                    <span class="hack-h5">14:15</span>
                  </template>
                </v-timeline-item>
                <v-timeline-item height="32px" size="xx-small">
                  <template v-slot:opposite>
                    <span class="hack-h5">14:35</span>
                  </template>
                </v-timeline-item>
                <v-timeline-item height="56px" size="xx-small">
                  <template v-slot:opposite>
                    <span class="hack-h5">16:00</span>
                  </template>
                </v-timeline-item>
              </v-timeline>
            </v-col>
            <v-col class="pl-5">
              <div class="pt-6">
                <p class="zen-kaku-h5 pt-2">入場開始</p>
              </div>
              <div class="pt-11">
                <Carousel
                  :itemsToShow="2.3"
                  snapAlign="start"
                  :transition="1500"
                >
                  <Slide v-for="slide in 10" :key="slide">
                    <div class="carousel__item">{{ slide }}</div>
                  </Slide>
                </Carousel>
              </div>
              <div class="pt-12">
                <Carousel
                  :itemsToShow="2.3"
                  snapAlign="start"
                  :transition="1500"
                >
                  <Slide v-for="slide in 10" :key="slide">
                    <div class="carousel__item">{{ slide }}</div>
                  </Slide>
                </Carousel>
              </div>
              <div class="pt-11">
                <Carousel
                  :itemsToShow="2.3"
                  snapAlign="start"
                  :transition="1500"
                >
                  <Slide v-for="slide in 10" :key="slide">
                    <div class="carousel__item">{{ slide }}</div>
                  </Slide>
                </Carousel>
              </div>
              <div class="pt-12">
                <Carousel
                  :itemsToShow="2.3"
                  snapAlign="start"
                  :transition="1500"
                >
                  <Slide v-for="slide in 10" :key="slide">
                    <div class="carousel__item">{{ slide }}</div>
                  </Slide>
                </Carousel>
              </div>
              <div class="pt-10">
                <p class="zen-kaku-h5">オープンキャンパス終了</p>
              </div>
            </v-col>
          </v-row>
        </div>
      </div>
    </div>
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
.background {
  overflow: visible;
  background-color: white;
  z-index: -1; /*描画を一番下に*/
  width: calc(100% - 24px);
  border-radius: 0px 30px 30px 0px;
}
.time-schedule {
  width: 100vw;
}

.carousel__item {
  min-height: 60px;
  width: 100%;
  background-color: gainsboro;
  color: black;
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
