<template>
  <div id="contents">
    <p>プログラミング体験</p>
    <div>
      <div class="d-flex justify-content-center" id="p5Canvas"></div>
    </div>
  </div>
</template>

<script>
import p5 from "p5";
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
</script>
