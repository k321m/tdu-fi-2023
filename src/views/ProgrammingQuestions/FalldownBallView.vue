<template>
  <div id="contents" class="my-4 mx-1">
    <div class="pa-3">
      <ProgrammingBackPageButton :color="questionColor" />
      <ProgrammingTitle question3>
        <template v-slot:questionNo>Q3</template>
        <template v-slot:name>FalldownBall</template>
      </ProgrammingTitle>
      <div class="py-2">
        <p>
          白い円を下方向に連続して動かすには空欄にどのコードを当てはめれば良いでしょうか？
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
    v = 0;
  } 
  void draw() { <span class="small">//毎フレーム実行される</span>
    background(220);
    ellipse(x, <span class="hole-box">{{ holeValue }}</span>, d, d);
    v = v + 1;
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
        :color="'#8f29ae'"
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
import ProgrammingTitle from "../../components/ProgrammingTitle.vue";
import ProgrammingSelectButton from "../../components/ProgrammingSelectButton.vue";
import ProgrammingExecuteButton from "../../components/ProgrammingExecuteButton.vue";
import ProgrammingResultCanvas from "../../components/ProgrammingResultCanvas.vue";
import ProgrammingBackPageButton from "../../components/ProgrammingBackPageButton.vue";
import ProgrammingExplainBox from "../../components/ProgrammingExplainBox.vue";
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
          code: "y",
          judge: false,
          explain: {
            explainText:
              '<span class="hack">y</span>の値は初期値から変更されないため、ボールは初期位置のままになります。',
            refer: {
              text: "4-2. setup()とdraw()",
              link: "/basics#basics-4-2",
            },
          },
        },
        {
          code: "y + v",
          judge: true,
          explain: {
            explainText:
              '<span class="hack">y + v</span>は、繰り返し1ずつ値が増える<span class="hack">v</span>を<span class="hack">y</span>に足すことで、円の中心のy座標が繰り返し変更された円が描画されます。',
            refer: {
              text: "4-2. setup()とdraw()",
              link: "/basics#basics-4-2",
            },
          },
        },
        {
          code: "y + 1",
          judge: false,
          explain: {
            explainText:
              '<span class="hack">y + 1</span>は、<span class="hack">y</span>の初期値に1が追加された値から変化することがないため、円の中心のy座標が同じ円が繰り返し描画されます。',
            refer: {
              text: "4-2. setup()とdraw()",
              link: "/basics#basics-4-2",
            },
          },
        },
        {
          code: "y - v",
          judge: false,
          explain: {
            explainText:
              '<span class="hack">y - v</span>は、繰り返し1ずつ値が増える<span class="hack">v</span>を<span class="hack">y</span>から引くことで、円の中心のy座標が繰り返し変更された円が描画され、上に移動したようになります。',
            refer: {
              text: "4-2. setup()とdraw()",
              link: "/basics#basics-4-2",
            },
          },
        },
      ],
      holeValue: "       ",
      isCorrect: false,
      executedFlag: false,
      p5Value: Object,
      resultDelay: "2s",
      questionColor: "#8f29ae",
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
          this.explainData = this.choices[i].explain;
          this.executedFlag = true;
          if (this.choices[i].judge) {
            this.isCorrect = true;
          }
        }
      }
      window.setTimeout(() => {
        this.isExpalin = true;
        location.href = "/question3#explain-box";
      }, 4000);
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
</style>
