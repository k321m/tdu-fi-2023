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
            <div class="">
              <span
                class="zen-kaku-medium"
                style="font-size: 0.9rem"
                v-html="tutolial.text"
              ></span>
              <p
                class="zen-kaku-medium"
                style="font-size: 0.6em; text-align: center; padding-top: 1em"
                v-html="tutolial.caution"
              ></p>
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
import tutorialImg1 from "../assets/tutorial/tutorial01.svg";
import tutorialImg2 from "../assets/tutorial/tutorial02.svg";
import tutorialImg3 from "../assets/tutorial/tutorial03.svg";
import tutorialImg4 from "../assets/tutorial/tutorial04.svg";

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
          caution: "",
        },
        {
          src: tutorialImg2,
          text: "イベントタイムスケジュールや<br>研究室一覧、具体的な質問例などから<br>気になる項目をMyNoteに追加",
          caution: "",
        },
        {
          src: tutorialImg3,
          text: "達成したらチェックをしたり、<br>見聞きしたことをメモに残そう",
          caution:
            "※データはローカルストレージに保存されます。名誉毀損、プライバシーの侵害、誹謗・中傷を含む事柄は記入しないでください。",
        },
        {
          src: tutorialImg4,
          text: "MyNoteを活用し<br>現役の学生や教員から見た<br>大学生活をたくさん聞き出して<br>大学選びや受験に役立てよう",
          caution: "",
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
  margin: 1em 0;
  display: flex;
  align-items: center;
  justify-content: center;
}
img {
  width: 80%;
  height: 80%;
  object-fit: contain;
}
</style>
