<template>
  <div id="top-carousel">
    <Carousel
      class="py-8"
      :itemsToShow="1.4"
      :breakpoints="breakpoints"
      :wrapAround="true"
      :autoplay="4000"
      :transition="500"
    >
      <!-- :autoplay="5000" -->
      <!-- :transition="1200" -->
      <Slide
        v-for="slide in contents"
        :key="slide"
        @click="clickedEvent(slide.to)"
      >
        <div class="carousel__item carousel_image" :style="slide.img">
          <div class="text-box pr-3 pb-2">
            <h5 class="text-ja">{{ slide.jptext }}</h5>
            <h2 class="text-en py-1">{{ slide.text }}</h2>
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
import MenuImg01 from "/src/assets/labs/ビジュアルコンピューティング.svg";
import MenuImg02 from "/src/assets/lectures/インタラクティブメディアとデザイン.svg";
import MenuImg03 from "/src/assets/top-crousel/おすすめ質問TOP10.svg";
import MenuImg04 from "/src/assets/top-crousel/MyNote.svg";
import MenuImg05 from "/src/assets/top-crousel/アンケート.svg";

import "vue3-carousel/dist/carousel.css";
export default {
  name: "TopCarousel",
  data() {
    return {
      breakpoints: {
        500: {
          itemsToShow: 2,
        },
        720: {
          itemsToShow: 2.4,
        },
        800: {
          itemsToShow: 3,
        },
      },
      contents: [
        {
          text: "Laboratory",
          jptext: "研究室展示",
          img: "background-image: url(" + MenuImg01 + ")",
          to: "/labs",
        },
        {
          text: "Lecture",
          jptext: "講義動画",
          img: "background-image: url(" + MenuImg02 + ")",
          to: "/lecture-video",
        },
        {
          text: "QuestionsTOP10",
          jptext: "おすすめ質問TOP10",
          img: "background-image: url(" + MenuImg03 + ")",
          to: "/questions",
        },
        {
          text: "FAQ",
          jptext: "よくある質問",
          img: "background-image: url(" + MenuImg03 + ")",
          to: "/faq",
        },
        {
          text: "MyNote",
          jptext: "マイノート",
          img: "background-image: url(" + MenuImg04 + ")",
          to: "/my-note",
        },
        {
          text: "Survey",
          jptext: "アンケート",
          img: "background-image: url(" + MenuImg05 + ")",
          to: "https://docs.google.com/forms/d/e/1FAIpQLSeQ5ru-Mzc-gULHow6ZkxNjnRPP6I7i6aUTtTJitU7GpdYWWQ/viewform",
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
      console.log();
      if (to[0] == "/") {
        this.$router.push(to);
      } else {
        window.location.href = to;
      }
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
.text-ja {
  text-align: end;
  color: var(--white);
}
.text-en {
  font-family: var(--font-en);
  color: var(--white);
  line-height: 1.2;
  letter-spacing: -0.03em;
}

#top-carousel .carousel__viewport {
  min-height: 245px;
}

.carousel__item,
.carousel__item.carousel_image {
  position: relative;
  height: auto;
  width: 100%;
  color: white;
  font-size: 20px;
  border-radius: 0.2rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
.carousel__item.carousel_image,
.carousel__item.carousel_image::after {
  z-index: -1;
  border-radius: 0.2rem;
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
  transform-origin: bottom;
  padding: 6.5em;
}

.carousel__track {
  transform-style: preserve-3d;
}

.carousel__slide--sliding {
  transition: 1.5s;
}

.carousel__slide:not(.carousel__slide--active) {
  transform: rotateY(-10deg) scale(0.87);
}

.carousel__slide--active {
  filter: drop-shadow(0px 4px 3px #a5a5a5);
  transform: rotateY(0) scale(1.1, 1);
}
</style>
