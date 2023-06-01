<template>
  <div id="top-carousel">
    <Carousel
      class="py-8"
      :itemsToShow="1.4"
      :wrapAround="true"
      :transition="2500"
      :autoplay="5000"
    >
      <Slide
        v-for="slide in contents"
        :key="slide"
        @click="clickedEvent(slide.to)"
      >
        <div class="carousel__item carousel_image" :style="slide.img">
          <div class="text-box pr-3 pb-2">
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
          img: "background-image: url(/src/assets/labs/ビジュアルコンピューティング.svg)",
          to: "/labs",
        },
        {
          text: "Lecture",
          jptext: "講義動画",
          img: "background-image: url(/src/assets/lectures/インタラクティブメディアとデザイン.svg)",
          to: "/lecture-video",
        },
        {
          text: "Questions",
          jptext: "具体的な質問例",
          img: "background-image: url(/src/assets/labs/ビジュアルコンピューティング.svg)",
          to: "/questions",
        },
        {
          text: "MyNote",
          jptext: "マイノート",
          img: "background-image: url(/src/assets/labs/ビジュアルコンピューティング.svg)",
          to: "/my-note",
        },
      ],
    };
  },
  components: {
    Carousel,
    Slide,
    Pagination,
  },
  methods: {
    clickedEvent(to) {
      this.$router.push(to);
    },
  },
};
</script>

<style scoped>
.text-box {
  position: absolute;
  right: 0;
  bottom: 0;
  text-align: right;
  transform: scale(0.9, 1);
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

#top-carousel .carousel__viewport {
  min-height: 245px;
}
/* min-height: 220px; */
/* min-height: 30vh; */
.carousel__item,
.carousel__item.carousel_image {
  position: relative;
  height: auto;
  width: 100%;
  color: white;
  font-size: 20px;
  border-radius: 3px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.carousel__item.carousel_image,
.carousel__item.carousel_image::after {
  z-index: -1;
  border-radius: 3px;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
}
.carousel__item.carousel_image::after {
  content: "";
  background: transparent
    linear-gradient(0deg, #010326 0%, #a571d92f 100%, #55566e4e 100%) 0% 0%
    no-repeat padding-box;
  opacity: 0.8;
}
.carousel__slide {
  padding: 6.5em;
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
  filter: drop-shadow(0px 4px 3px #a5a5a5);
  transform: rotateY(0) scale(1.1, 1);
}
</style>
