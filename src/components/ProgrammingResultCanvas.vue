<template>
  <div class="result-canvas ma-7">
    <div id="canvas"></div>
    <transition :name="isCorrect ? 'correct' : 'incorrect'">
      <img v-if="isCorrect" v-show="executedFlag" :src="correctImg" />
      <img v-else v-show="executedFlag" :src="incorrectImg" />
    </transition>
  </div>
  <Button :style="setButtonStyle(color)" @click="reloadPage"
    >もう一度挑戦する</Button
  >
</template>

<script>
import CorrectImg from "../assets/icon-correct.svg";
import IncorrectImg from "../assets/icon-incorrect.svg";
import Button from "../components/parts/Button.vue";
export default {
  name: "ProgrammingResultCanvas",
  props: ["isCorrect", "executedFlag", "delay", "color"],
  data() {
    return { correctImg: CorrectImg, incorrectImg: IncorrectImg };
  },
  components: {
    Button,
  },
  methods: {
    setButtonStyle(color) {
      return "background-color: " + this.color;
    },
    reloadPage() {
      location.href = location.pathname;
    },
  },
};
</script>

<style scoped>
.result-canvas {
  display: flex;
  justify-content: center;
  position: relative;
}
.result-canvas img {
  position: absolute;
  width: 17rem;
  color: black;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 5rem;
  transition-delay: v-bind(delay);
}

.incorrect-enter-active {
  transition: opacity 5s ease;
}

.incorrect-enter-from {
  opacity: 0;
}

.correct-enter-active {
  animation: correct-in 3s both;
  animation-delay: v-bind(delay);
}
@keyframes correct-in {
  0% {
    opacity: 0;
    transform: translate(-50%, -50%) scale(0);
  }

  100% {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
  }
}
</style>
