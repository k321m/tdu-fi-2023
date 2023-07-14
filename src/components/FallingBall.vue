<template>
  <div>
    <h2>問題2</h2>
    <p>
      白い円を下方向に連続して動かすには空欄にどのコードを当てはめれば良いでしょうか？
    </p>
    <div class="code-box">
      <pre>
    <code>
  int i;
  void setup(){ <span class="small">//一番初めに一度だけ実行される</span>
    size(300,300); 
    i = 0;
  } 
  void draw(){  <span class="small">//毎フレーム実行される</span>
    background(220);
    ellipse(150,<span class="hole-box">{{ holeValue }}</span>,80,80);
    i = i + 1;
  }</code>
    </pre>
    </div>

    <div class="v-row">
      <div class="btn btn-default-border v-col" @click="select1()">
        <code>{{ select1Value }}</code>
      </div>
      <div class="btn btn-default-border v-col" @click="select2()">
        <code>{{ select2Value }}</code>
      </div>
      <div class="btn btn-default-border v-col" @click="select3()">
        <code>{{ select3Value }}</code>
      </div>
      <div class="btn btn-default-border v-col" @click="select4()">
        <code>{{ select4Value }}</code>
      </div>
    </div>
    <div class="btn btn-pink my-5" @click="execute()">実行</div>
    <div class="p5-canvas ma-7">
      <div id="canvas"></div>
      <p v-if="executedFlag">{{ answerText }}</p>
    </div>
  </div>
</template>

<script>
import p5 from "p5";
import {
  p5Setup,
  p5Slect1,
  p5Slect2,
  p5Slect3,
  p5Slect4,
} from "../js/p5/fallBall";
export default {
  name: "FallingBall",
  data() {
    return {
      holeValue: "       ",
      select1Value: "100",
      select2Value: "100 + i",
      select3Value: "150",
      select4Value: "100 - i",
      answerText: "不正解",
      executedFlag: false,
      p5Value: Object,
    };
  },
  mounted() {
    this.p5Value = new p5(p5Setup);
  },
  methods: {
    select1() {
      if (!this.executedFlag) {
        this.holeValue = this.select1Value;
      }
    },
    select2() {
      if (!this.executedFlag) {
        this.holeValue = this.select2Value;
      }
    },
    select3() {
      if (!this.executedFlag) {
        this.holeValue = this.select3Value;
      }
    },
    select4() {
      if (!this.executedFlag) {
        this.holeValue = this.select4Value;
      }
    },
    execute() {
      this.executedFlag = true;
      if (this.holeValue == this.select1Value) {
        p5Slect1(this.p5Value);
      }
      if (this.holeValue == this.select2Value) {
        p5Slect2(this.p5Value);
        this.answerText = "正解";
      }
      if (this.holeValue == this.select3Value) {
        p5Slect3(this.p5Value);
      }
      if (this.holeValue == this.select4Value) {
        p5Slect4(this.p5Value);
      }
    },
  },
};
</script>

<style scoped>
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
