<template>
  <div id="contents" class="my-4 mx-1">
    <div class="pa-3">
      <ProgrammingTitle question1>
        <template v-slot:questionNo>Q1</template>
        <template v-slot:name>MakeCircle</template>
      </ProgrammingTitle>
      <div class="py-2">
        <p>白い円を1つ作るには空欄にどのコードを当てはめれば良いでしょうか？</p>
      </div>

      <div class="code-box">
        <pre>
<code>
  size(300, 300);
  <span class="hole-box">{{ holeValue }}</span>;
</code>
    </pre>
      </div>
      <ProgrammingSelectButton
        :choices="this.choices"
        @selected-value="changeHoleValue"
      >
      </ProgrammingSelectButton>
      <ProgrammingExecuteButton @executed="execute" />
      <div class="p5-canvas ma-7">
        <div id="canvas"></div>
        <transition :name="isCorrect ? 'correct' : 'incorrect'">
          <img
            v-show="executedFlag"
            :src="isCorrect ? correctImg : incorrectImg"
          />
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import ProgrammingTitle from "../../components/ProgrammingTitle.vue";
import ProgrammingSelectButton from "../../components/ProgrammingSelectButton.vue";
import ProgrammingExecuteButton from "../../components/ProgrammingExecuteButton.vue";
import CorrectImg from "../../assets/icon-correct.svg";
import IncorrectImg from "../../assets/icon-incorrect.svg";
import p5 from "p5";
import {
  p5Setup,
  p5Slect1,
  p5Slect2,
  p5Slect3,
  p5Slect4,
} from "../../js/p5/createCircle";
export default {
  name: "CreateCircleView",
  components: {
    ProgrammingTitle,
    ProgrammingSelectButton,
    ProgrammingExecuteButton,
  },
  data() {
    return {
      choices: [
        {
          code: "rect(80, 80, 140, 140)",
          judge: false,
        },
        {
          code: "triangle(150, 80, 80, 220, 220, 220)",
          judge: false,
        },
        {
          code: "ellipse(150, 150, 140, 140)",
          judge: true,
        },
        {
          code: "line(80, 80, 220, 220)",
          judge: false,
        },
      ],
      holeValue: "       ",
      isCorrect: false,
      executedFlag: false,
      p5Value: Object,
      correctImg: CorrectImg,
      incorrectImg: IncorrectImg,
    };
  },
  mounted() {
    this.p5Value = new p5(p5Setup);
  },
  methods: {
    changeHoleValue(index) {
      if (!this.executedFlag) {
        this.holeValue = this.choices[index].code;
      }
    },
    execute() {
      for (var i = 0; i < this.choices.length; i++) {
        if (this.holeValue == this.choices[i].code && !this.executedFlag) {
          this.selectP5code(i);
          this.executedFlag = true;
          if (this.choices[i].judge) {
            this.$store.commit("updateIsClearedMission4");
            this.isCorrect = true;
          }
        }
      }
    },
    selectP5code(index) {
      if (index == 0) {
        p5Slect1(this.p5Value);
      }
      if (index == 1) {
        p5Slect2(this.p5Value);
      }
      if (index == 2) {
        p5Slect3(this.p5Value);
      }
      if (index == 3) {
        p5Slect4(this.p5Value);
      }
    },
    beforeEnter(el) {
      el.style.transitionDelay = 1000 * parseInt(el.dataset.index, 10) + "ms";
    },
  },
};
</script>

<style scoped>
#contents {
  background-color: white;
  min-height: 100dvh;
  border-radius: 0.2rem;
}

.code-box {
  background-color: #010440;
  margin: 1rem 0;
}
pre {
  white-space: pre-wrap;
}
code {
  font-family: hack, sans-serif;
  font-weight: 400;
  font-size: 1rem;
  font-style: normal;
  word-wrap: break-word;
}
.code-box code {
  color: #e1e1e1;
}
.hole-box {
  width: 200px;
  padding: 0.3rem;
  background-color: #e1e1e1;
  border-radius: 0.2rem;
  font-size: 0.8rem;
  border: 1px solid #adadad;
  color: #010440;
}

.p5-canvas {
  display: flex;
  justify-content: center;
  position: relative;
}

.p5-canvas img {
  position: absolute;
  width: 17rem;
  color: black;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 5rem;
  transition-delay: 3s;
}

.incorrect-enter-active {
  transition: opacity 5s ease;
}

.incorrect-enter-from {
  opacity: 0;
}

.correct-enter-active {
  animation: correct-in 1s;
}
@keyframes correct-in {
  0% {
    transform: translate(-50%, -50%) scale(0);
  }

  100% {
    transform: translate(-50%, -50%) scale(1);
  }
}
</style>
