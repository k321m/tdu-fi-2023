<template>
  <div class="background-dialog pa-5">
    <div style="display: flex">
      <div class="pa-2" style="margin: 0 0 0 auto" @click="closeTutorial">
        <p class="zen-kaku-bold">スキップ</p>
      </div>
    </div>
    <div style="display: flex; flex-grow: 1; align-items: center">
      <Carousel
        ref="carousel"
        snapAlign="start"
        @slide-start="handleSlideStart"
        style="width: 100%; height: 100%"
      >
        <Slide v-for="tutolial in tutorialData" :key="tutolial">
          <div class="carousel__item">
            <div class="img">
              <img :src="tutolial.src" />
            </div>
            <div class="mb-5">
              <span
                class="zen-kaku-medium"
                style="font-size: 0.9rem"
                v-html="tutolial.text"
              ></span>
            </div>
          </div>
        </Slide>

        <template #addons>
          <Navigation />
          <Pagination />
        </template>
      </Carousel>
    </div>
    <div class="py-5">
      <div
        :class="isLastCarouse ? 'myNote-btn' : 'default-btn'"
        @click="nextCarousel()"
      >
        <p class="zen-kaku-bold" v-if="isLastCarouse">MyNoteをはじめる</p>
        <p class="zen-kaku-bold" v-else>次へ</p>
      </div>
    </div>
  </div>
</template>

<script>
import { Carousel, Navigation, Pagination, Slide } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";
import tutorialImg1 from "../assets/myNote-tutorial-1.svg";
import tutorialImg2 from "../assets/myNote-tutorial-2.svg";
import tutorialImg3 from "../assets/myNote-tutorial-2.jpg";
import tutorialImg4 from "../assets/myNote-tutorial-1.svg";
export default {
  name: "MyNoteTutorial",
  emits: ["close-tutorial"],
  data() {
    return {
      isLastCarouse: false,
      tutorialData: [
        {
          src: tutorialImg1,
          text: "今日のオープンキャンパスで<br>東京電機大学をもっとよく知るために<br>自分だけのノートを作ろう",
        },
        {
          src: tutorialImg2,
          text: "訪問したい場所やイベント<br>先輩や先生に聞きたいことを<br>MyNoteに追加",
        },
        {
          src: tutorialImg3,
          text: "今日のオープンキャンパスで<br>東京電機大学をもっとよく知るために<br>自分だけのノートを作ろう",
        },
        {
          src: tutorialImg4,
          text: "今日のオープンキャンパスで<br>東京電機大学をもっとよく知るために<br>自分だけのノートを作ろう",
        },
      ],
    };
  },
  components: {
    Carousel,
    Slide,
    Navigation,
    Pagination,
  },
  methods: {
    closeTutorial() {
      this.$emit("close-tutorial");
      this.$store.commit("updateDoneMyNoteTutorial");
    },
    handleSlideStart(index) {
      console.log(JSON.stringify(index));
      if (index.slidingToIndex == this.tutorialData.length - 1) {
        this.isLastCarouse = true;
      } else {
        this.isLastCarouse = false;
      }
    },
    nextCarousel() {
      const carouselInstance = this.$refs.carousel;
      if (this.isLastCarouse) {
        this.closeTutorial();
      }
      carouselInstance.next();
    },
  },
};
</script>

<style scoped>
.background-dialog {
  min-height: 88dvh;
  max-height: 90dvh;
  background-color: white;
  border-radius: 0.8rem;
  display: flex;
  flex-direction: column;
}
.carousel__item {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 90%;
  background-color: white;
}

.img {
  height: 30dvh;
  margin: 2rem 0;
}
img {
  width: 80%;
  height: 80%;
  object-fit: contain;
}
</style>
