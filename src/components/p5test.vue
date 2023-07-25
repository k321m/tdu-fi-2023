<template>
  <div>
    <button @click="p5FallBall">Fall</button>
    <button @click="p5StopBall">Stop</button>
    <button @click="p5ResetBall">Reset</button>
    <div>
      <div class="d-flex justify-content-center" id="test-canvas"></div>
    </div>
  </div>
</template>

<script>
import p5 from "p5";
import { p5Setup, fallBall, stopBall, resetBall } from "../js/p5/test";
export default {
  name: "ProgrammingExperenceView",
  mounted() {
    new p5(p5Setup);
  },
  methods: {
    p5FallBall() {
      fallBall();
    },
    p5StopBall() {
      stopBall();
    },
    p5ResetBall() {
      resetBall();
    },
  },
};
</script>

<!-- <template>
  <div id="contents">
    <p>プログラミング体験</p>
    <div>
      <div class="d-flex justify-content-center" id="canvas"></div>
    </div>
  </div>
</template>

<script>
import p5 from "p5";
import { p5Setup, fallBall, stopBall, resetBall } from "../js/p5/fallBall";
export default {
  name: "ProgrammingExperenceView",
  mounted() {
    const script = function (p5) {
      var i;
      p5.setup = (_) => {
        var canvas = p5.createCanvas(300, 300);
        canvas.parent("p5Canvas");
        i = 0;
      };

      p5.draw = (_) => {
        p5.background(0);
        p5.ellipse(150, 100 + i, 50, 50);
        i++;
      };
    };
    new p5(script);
  },
};
</script> -->
