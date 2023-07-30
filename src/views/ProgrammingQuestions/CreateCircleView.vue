<template>
  <div id="contents" class="my-4 mx-1">
    <div class="pa-3">
      <ProgrammingBackPageButton :color="questionColor" />
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
  <span class="hole-box">{{ holeValue }}</span>;</code>
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
        :color="'#e345e6'"
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
} from "../../js/p5/createCircle";
export default {
  name: "CreateCircleView",
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
          code: "rect(80, 80, 140, 140)",
          judge: false,
          explain: {
            explainText:
              '<span class="hack">rect()</span>は長方形を描く関数です。',
            refer: {
              text: "2. 図形",
              link: "/basics#basics-2",
            },
          },
        },
        {
          code: "triangle(150, 80, 80, 220, 220, 220)",
          judge: false,
          explain: {
            explainText:
              '<span class="hack">triangle()</span>は三角形を描く関数です。',
            refer: {
              text: "2. 図形",
              link: "/basics#basics-2",
            },
          },
        },
        {
          code: "ellipse(150, 150, 140, 140)",
          judge: true,
          explain: {
            explainText:
              '<span class="hack">ellipse()</span>は円を描く関数です。',
            refer: {
              text: "2. 図形",
              link: "/basics#basics-2",
            },
          },
        },
        {
          code: "line(80, 80, 220, 220)",
          judge: false,
          explain: {
            explainText: '<span class="hack">line()</span>は線を描く関数です。',
            refer: {
              text: "2. 図形",
              link: "/basics#basics-2",
            },
          },
        },
      ],
      holeValue: "       ",
      isCorrect: false,
      executedFlag: false,
      p5Value: Object,
      resultDelay: "1s",
      questionColor: "var(--pink)",
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
            this.$store.commit("updateIsClearedMission4");
            this.isCorrect = true;
          }
        }
      }
      window.setTimeout(() => {
        this.isExpalin = true;
        location.href = "/question1#explain-box";
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
