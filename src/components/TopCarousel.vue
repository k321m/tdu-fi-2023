<template>
  <div id="top-carousel">
    <Carousel
      class="py-8"
      :itemsToShow="1.4"
      :wrapAround="true"
      :transition="2500"
      :autoplay="5000"
    >
      <Slide v-for="slide in contents" :key="slide">
        <div class="carousel__item">
          <div class="text-box pa-2">
            <p class="jp-text">{{ slide.jptext }}</p>
            <p class="text py-1">{{ slide.text }}</p>
          </div>
        </div>
      </Slide>
      <template #addons>
        <Pagination />
      </template>
    </Carousel>
  </div>
</template>

<script>
import { Carousel, Navigation, Pagination, Slide } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";
export default {
  name: "TopCarousel",
  data() {
    return {
      contents: [
        {
          text: "Laboratory",
          jptext: "研究室展示",
        },
      ],
    };
  },
  components: {
    Carousel,
    Slide,
    Pagination,
  },
};
</script>

<style scoped>
.text-box {
  position: absolute;
  right: 0;
  bottom: 0;
  text-align: right;
}
p.jp-text {
  font-family: zen-kaku-gothic-new, sans-serif;
  font-weight: 700;
  font-size: 0.7em;
  line-height: 1;
  font-style: normal;
}
p.text {
  font-family: hack, sans-serif;
  font-weight: 700;
  font-size: 1.5em;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: -0.03em;
}

.carousel__item {
  min-height: 220px;
  width: 100%;
  background-color: gainsboro;
  color: black;
  font-size: 20px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  filter: drop-shadow(0px 4px 3px #a5a5a5);
}
.carousel__slide {
  padding: 4px;
}

.carousel__prev,
.carousel__next {
  box-sizing: content-box;
  border: 5px solid white;
}

.carousel__track {
  transform-style: preserve-3d;
}

.carousel__slide--sliding {
  transition: 1.5s;
}

.carousel__slide {
  opacity: 0.9;
  transform-origin: bottom;
  transform: rotateY(-20deg) scale(0.87);
}
.carousel__slide--prev {
  opacity: 1;
  transform-origin: bottom;
  transform: rotateY(-10deg) scale(0.87);
}

.carousel__slide--next {
  opacity: 1;
  transform-origin: bottom;
  transform: rotateY(10deg) scale(0.87);
}

.carousel__slide--active {
  opacity: 1;
  transform-origin: bottom;
  transform: rotateY(0) scale(1.1, 1);
}
</style>
