<template>
  <div>
    <h2>問題１</h2>
    <p>
      白い円を下方向に連続して動かすには空欄にどのコードを当てはめれば良いでしょうか？
    </p>
    <pre>
  <code>        
  int i;
  void setup(){
    size(300,300); 
    i = 0;
  } 
  void draw(){
    background(220);
    ellipse(250,<span class="hole-box">      </span>,80,80);
    i += 1;
  }</code>
  </pre>
    <div class="v-row">
      <div class="default-border-btn v-col" @click="select1">
        <code>100</code>
      </div>
      <div class="default-border-btn v-col" @click="select2">
        <code>100 + i</code>
      </div>
      <div class="default-border-btn v-col" @click="select3">
        <code>250</code>
      </div>
      <div class="default-border-btn v-col" @click="select4">
        <code>100 - i</code>
      </div>
    </div>
    <div class="p5-canvas ma-7">
      <div id="canvas"></div>
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
  mounted() {
    new p5(p5Setup);
  },
  methods: {
    select1() {
      p5Slect1();
    },
    select2() {
      p5Slect2();
    },
    select3() {
      p5Slect3();
    },
    select4() {
      p5Slect4();
    },
  },
};
</script>

<style scoped>
p {
  font-size: medium;
}
code {
  font-family: hack, sans-serif;
  font-size: 1rem;
}
.hole-box {
  padding: 0.2rem;
  background-color: #e1e1e1;
  border-radius: 0.2rem;
  align-items: center;
  justify-content: center;
  font-size: 0.8rem;
  border: 1px solid #010440;
}
.p5-canvas {
  display: flex;
  justify-content: center;
}
</style>
