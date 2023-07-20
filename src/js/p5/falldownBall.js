// 初期状態のcanvasセットアップ
const p5Setup = function (p5) {
  p5.setup = () => {
    // canvas 生成
    const canvas = p5.createCanvas(300, 300);
    // <div id="canvas"> に canvas を配置
    canvas.parent("canvas");
    // canvas の背景色
    p5.background(220);
    // 円
    p5.ellipse(150, 100, 50, 50);
    // canvas 内の動きをなめらかにする
    p5.smooth();
  };
};

const p5Slect1 = function (p5) {
  p5.draw = () => {
    p5.background(220);
    p5.ellipse(150, 100, 50, 50);
    if (p5.frameCount > 500) {
      p5.noLoop();
    }
  };
};

const p5Slect2 = function (p5) {
  var i = 0;
  p5.draw = () => {
    p5.background(220);
    p5.ellipse(150, 100 + i, 50, 50);
    i++;
    if (p5.frameCount > 500) {
      p5.noLoop();
    }
  };
};

const p5Slect3 = function (p5) {
  p5.draw = () => {
    p5.background(220);
    p5.ellipse(150, 150, 50, 50);
    if (p5.frameCount > 500) {
      p5.noLoop();
    }
  };
};
const p5Slect4 = function (p5) {
  var i = 0;
  p5.draw = () => {
    p5.background(220);
    p5.ellipse(150, 100 + i, 50, 50);
    i++;
    if (p5.frameCount > 500) {
      p5.noLoop();
    }
  };
};
export { p5Setup, p5Slect1, p5Slect2, p5Slect3, p5Slect4 };