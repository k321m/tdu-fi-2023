<template>
  <div id="contents" class="my-4 mx-1">
    <div class="pa-3">
      <h2><span>02</span>FalldownBall</h2>
      <p>
        白い円を下方向に連続して動かすには空欄にどのコードを当てはめれば良いでしょうか？
      </p>
      <div class="code-box">
        <pre>
    <code>
  int x = 150;
  int y = 100;
  int d = 50;
  void setup() { <span class="small">//一番初めに一度だけ実行される</span>
    size(300, 300); 
  } 
  void draw() {  <span class="small">//毎フレーム実行される</span>
    background(220);
    ellipse(x, <span class="hole-box">{{ holeValue }}</span>, d, d);
    y = y + 1;
  }</code>
    </pre>
      </div>
      <div v-for="value in this.choices" :key="value">
        <QuestionSelectButton class="my-2" @click="selected(value.code)">
          <template v-slot:code>{{ value.code }}</template>
        </QuestionSelectButton>
      </div>
      <div class="btn btn-pink my-5" @click="execute()">実行</div>
      <div class="p5-canvas ma-7">
        <div id="canvas"></div>
        <p v-if="executedFlag">{{ answerText }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import QuestionSelectButton from "../../components/QuestionSelectButton.vue";
import p5 from "p5";
import {
  p5Setup,
  p5Slect1,
  p5Slect2,
  p5Slect3,
  p5Slect4,
} from "../../js/p5/falldownBall";
export default {
  name: "FalldownBall",
  components: {
    QuestionSelectButton,
  },
  data() {
    return {
      choices: [
        {
          code: "100",
          judge: false,
        },
        {
          code: "100 + i",
          judge: true,
        },
        {
          code: "150",
          judge: false,
        },
        {
          code: "100 - i",
          judge: false,
        },
      ],
      holeValue: "       ",
      answerText: "不正解",
      executedFlag: false,
      p5Value: Object,
    };
  },
  mounted() {
    this.p5Value = new p5(p5Setup);
  },
  methods: {
    selected(code) {
      if (!this.executedFlag) {
        this.holeValue = code;
      }
    },
    execute() {
      for (var i = 0; i < this.choices.length; i++) {
        if (this.holeValue == this.choices[i].code && !this.executedFlag) {
          this.selectP5code(i);
          this.executedFlag = true;
          if (this.choices[i].judge) {
            this.answerText = "正解";
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
  },
};
</script>

<style scoped>
#contents {
  background-color: white;
  min-height: 100dvh;
}
h2 {
  position: relative;
  overflow: hidden;
  padding: 1.5rem 2rem 1.5rem 130px;
  border-top: 3px solid var(--pink);
}

h2:before {
  position: absolute;
  top: -150%;
  left: -100px;
  width: 200px;
  height: 300%;
  content: "";
  -webkit-transform: rotate(25deg);
  transform: rotate(25deg);
  background: var(--pink);
}

h2 span {
  font-size: 40px;
  font-size: 4rem;
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  display: block;
  padding-top: 3px;
  padding-left: 16px;
  color: var(--white);
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

.p5-canvas p {
  position: absolute;
  color: black;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 5rem;
}
</style>
