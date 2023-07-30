<template>
  <div id="contents" class="my-4 mx-1">
    <div class="pa-3">
      <ProgrammingBackPageButton :color="questionColor" />
      <ProgrammingTitle question5>
        <template v-slot:questionNo>Q5</template>
        <template v-slot:name>BouncingBall</template>
      </ProgrammingTitle>
      <div class="py-2">
        白いボールが重力を受けて落下するには空欄にどのコードを当てはめれば良いでしょうか？
      </div>
      <p></p>
      <div class="code-box">
        <pre>
  <code>
  float x, y; <span class="small">//ボールの中心座標</span>
  int d;      <span class="small">//ボールの半径</span>
  float v;    <span class="small">//ボールの速度</span>
  void setup() { <span class="small">//一番初めに一度だけ実行される</span>
    size(300, 300); 
    x = 150;
    y = 100;
    d = 50;
    v = 0;
  } 
  void draw() { <span class="small">//毎フレーム実行される</span>
    background(220);
    ellipse(x, y, d, d);
    v = <span class="hole-box">{{ holeValue }}</span>;
    y = y + v;  
    if (y + d/2 > height) {
      y = height - d/2;
      v = -v * 0.8; <span class="small">//反発係数0.8で速度を落とす</span>
    }
  }</code>
    </pre>
      </div>
      <ProgrammingSelectButton
        :choices="this.choices"
        @selected-value="changeHoleValue"
      >
      </ProgrammingSelectButton>
      <ProgrammingExecuteButton @executed="execute" />
      <ProgrammingResultCanvas
        :isCorrect="isCorrect"
        :executedFlag="executedFlag"
        :delay="resultDelay"
        :color="'#360a73'"
      />
    </div>
  </div>
</template>

<script>
import ProgrammingBackPageButton from "../../components/ProgrammingBackPageButton.vue";
import ProgrammingTitle from "../../components/ProgrammingTitle.vue";
import ProgrammingSelectButton from "../../components/ProgrammingSelectButton.vue";
import ProgrammingExecuteButton from "../../components/ProgrammingExecuteButton.vue";
import ProgrammingResultCanvas from "../../components/ProgrammingResultCanvas.vue";
import p5 from "p5";
import {
  p5Setup,
  p5Slect1,
  p5Slect2,
  p5Slect3,
  p5Slect4,
} from "../../js/p5/bouncingBall";
export default {
  name: "BouncingBallView",
  components: {
    ProgrammingBackPageButton,
    ProgrammingTitle,
    ProgrammingSelectButton,
    ProgrammingExecuteButton,
    ProgrammingResultCanvas,
  },
  data() {
    return {
      choices: [
        {
          code: "v + 9.8",
          judge: false,
        },
        {
          code: "9.8",
          judge: false,
        },
        {
          code: "v + 9.8 / 60",
          judge: true,
        },
        {
          code: "v * 9.8",
          judge: false,
        },
      ],
      holeValue: "       ",
      isCorrect: false,
      executedFlag: false,
      p5Value: Object,
      resultDelay: "3s",
      questionColor: "var(--purple)",
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
