<template>
  <div id="contents" class="my-4 mx-1">
    <div class="pa-3">
      <ProgrammingBackPageButton :color="questionColor" />
      <ProgrammingTitle question4>
        <template v-slot:questionNo>Q4</template>
        <template v-slot:name>ReboundBall</template>
      </ProgrammingTitle>
      <div>
        <p class="py-2">
          白いボールが地面(下側の枠線)で跳ね返るようにするには空欄にどのコードを当てはめれば良いでしょうか？
        </p>
      </div>
      <div class="code-box">
        <pre>
  <code>
  int x, y; <span class="small">//ボールの中心座標</span>
  int d;    <span class="small">//ボールの半径</span>
  int v;    <span class="small">//ボールの速度</span>
  void setup() { <span class="small">//一番初めに一度だけ実行される</span>
    size(300, 300); 
    x = 150;
    y = 100;
    d = 50;
    v = 1;
  } 
  void draw() { <span class="small">//毎フレーム実行される</span>
    background(220);
    ellipse(x, y, d, d);  
    if (<span class="hole-box">{{ holeValue }}</span>) {
      v = -1;
    }
    y = y + v;
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
        :color="'#661b93'"
      />
      <ProgrammingExplainBox
        v-if="isExpalin"
        :explainData="explainData"
      ></ProgrammingExplainBox>
      <ProgrammingBackPageButton :color="questionColor" />
    </div>
  </div>
</template>

<script>
import ProgrammingBackPageButton from "../../components/ProgrammingBackPageButton.vue";
import ProgrammingTitle from "../../components/ProgrammingTitle.vue";
import ProgrammingSelectButton from "../../components/ProgrammingSelectButton.vue";
import ProgrammingExecuteButton from "../../components/ProgrammingExecuteButton.vue";
import ProgrammingResultCanvas from "../../components/ProgrammingResultCanvas.vue";
import ProgrammingExplainBox from "../../components/ProgrammingExplainBox.vue";
import p5 from "p5";
import {
  p5Setup,
  p5Slect1,
  p5Slect2,
  p5Slect3,
  p5Slect4,
} from "../../js/p5/returnBall";
export default {
  name: "ReturnBallView",
  components: {
    ProgrammingBackPageButton,
    ProgrammingTitle,
    ProgrammingSelectButton,
    ProgrammingExecuteButton,
    ProgrammingResultCanvas,
    ProgrammingExplainBox,
  },
  data() {
    return {
      choices: [
        {
          code: "y + d/2 > height",
          judge: true,
          explain: {
            explainText:
              '<span class="hack">y + d/2 > height</span>は、「円の中心のy座標 + 円の半径」が「キャンバスの高さ」より大きくなった時に<span class="hack">if</span>文の中の処理が実行されます。',
            refer: {
              text: "5. 条件分岐処理",
              link: "/basics#basics-5",
            },
          },
        },
        {
          code: "y > height",
          judge: false,
          explain: {
            explainText:
              '<span class="hack">y > height</span>は、「円の中心のy座標」が「キャンバスの高さ」より大きくなった時に<span class="hack">if</span>文の中の処理が実行されます。<span class="hack">y</span>は円の"中心"のy座標であることに注意する必要があります',
            refer: {
              text: "5. 条件分岐処理",
              link: "/basics#basics-5",
            },
          },
        },
        {
          code: "x + d > width",
          judge: false,
          explain: {
            explainText:
              '<span class="hack">x + d > width</span>は、「円の中心のx座標 + 円の直径」が「キャンバスの幅」より大きくなった時に<span class="hack">if</span>文の中の処理が実行されます。今回はy軸方向(縦の動き)の制御になるため、<span class="hack">y</span>に関する条件式を記述する必要があります',
            refer: {
              text: "5. 条件分岐処理",
              link: "/basics#basics-5",
            },
          },
        },
        {
          code: "y + d > height",
          judge: false,
          explain: {
            explainText:
              '<span class="hack">y + d > height</span>は、「円の中心のy座標 + 円の直径」が「キャンバスの高さ」より大きくなった時に<span class="hack">if</span>文の中の処理が実行されます。<span class="hack">d</span>は円の"直径"であることに注意する必要があります',
            refer: {
              text: "5. 条件分岐処理",
              link: "/basics#basics-5",
            },
          },
        },
      ],
      holeValue: "       ",
      isCorrect: false,
      executedFlag: false,
      p5Value: Object,
      resultDelay: "3s",
      questionColor: "#661b93",
      explainData: Object,
      isExpalin: false,
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
          this.explainData = this.choices[i].explain;
          if (this.choices[i].judge) {
            this.isCorrect = true;
          }
        }
      }
      window.setTimeout(() => {
        this.isExpalin = true;
        location.href = "/question4#explain-box";
      }, 5000);
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
