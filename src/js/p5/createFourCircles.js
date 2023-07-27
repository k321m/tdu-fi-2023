var x = 60;
var y = 150;
var d = 50;
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
    p5.ellipse(x, y, d, d);
    // canvas 内の動きをなめらかにする
    p5.smooth();
  };
};

const p5Slect1 = function (p5) {
  p5.background(220);
  for (var i = 1; i < 4; i++) {
    p5.ellipse(x, y, d, d);
    x += 60;
  }
};

const p5Slect2 = function (p5) {
  p5.background(220);
  for (var i = 1; i <= 3; i++) {
    p5.ellipse(x, y, d, d);
    x += 60;
  }
};

const p5Slect3 = function (p5) {
  p5.background(220);
  for (var i = 1; i > 4; i++) {
    p5.ellipse(x, y, d, d);
    x += 60;
  }
};
const p5Slect4 = function (p5) {
  p5.background(220);
  for (var i = 1; i <= 4; i++) {
    p5.ellipse(x, y, d, d);
    x += 60;
  }
};

export { p5Setup, p5Slect1, p5Slect2, p5Slect3, p5Slect4 };
