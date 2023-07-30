<template>
  <div id="contents" class="my-4 mx-1">
    <div class="pa-3">
      <ProgrammingBackPageButton :color="questionColor" />
      <ProgrammingTitle question2>
        <template v-slot:questionNo>Q2</template>
        <template v-slot:name>MakeFourCircles</template>
      </ProgrammingTitle>
      <div class="py-2">
        <p>白い円を4つ作るには空欄にどのコードを当てはめれば良いでしょうか？</p>
      </div>
      <div class="code-box">
        <pre>
<code>
  size(300, 300);
  int x = 60;  <span class="small">//円の中心のx座標</span>
  int y = 150; <span class="small">//円の中心のy座標</span>
  int d = 50;  <span class="small">//円の半径</span>
  for (int i = 1; <span class="hole-box">{{ holeValue }}</span>; i = i + 1) {
    ellipse(x, y, d, d);
    x = x + 60;
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
        :color="'#ba37ca'"
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
} from "../../js/p5/createFourCircles";
export default {
  name: "CreateFourCirclesView",
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
          code: "i < 4",
          judge: false,
          explain: {
            explainText:
              '<span class="hack">i < 4</span>は、<span class="hack">i = 4</span>となる場合を含まないため、3回のみ<span class="hack">for文</span>の中の処理が実行されます。',
            refer: {
              text: "4-1. for文",
              link: "/basics#basics-4-1",
            },
          },
        },
        {
          code: "i <= 3",
          judge: false,
          explain: {
            explainText:
              '<span class="hack">i <= 3</span>は、<span class="hack">i</span>が「1、2、3」となる時、すなわち3回<span class="hack">for文</span>の中の処理が実行されます。',
            refer: {
              text: "4-1. for文",
              link: "/basics#basics-4-1",
            },
          },
        },
        {
          code: "i > 4",
          judge: false,
          explain: {
            explainText:
              '<span class="hack">i > 4</span>は、初期値として設定されている<span class="hack">int i = 1</span>の時点で条件を満たしていないため、<span class="hack">for文</span>の中の処理は実行されません。',
            refer: {
              text: "4-1. for文",
              link: "/basics#basics-4-1",
            },
          },
        },
        {
          code: "i <= 4",
          judge: true,
          explain: {
            explainText:
              '<span class="hack">i <= 4</span>は、<span class="hack">i</span>が「1、2、3、4」となる時、すなわち4回<span class="hack">for文</span>の中の処理が実行されます。',
            refer: {
              text: "4-1. for文",
              link: "/basics#basics-4-1",
            },
          },
        },
      ],
      holeValue: "       ",
      isCorrect: false,
      executedFlag: false,
      p5Value: Object,
      resultDelay: "1s",
      questionColor: "#ba37ca",
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
        location.href = "/question2#explain-box";
      }, 3000);
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
