// 初期状態のcanvasセットアップ
const p5Setup = function (p5) {
  p5.setup = () => {
    // canvas 生成
    const canvas = p5.createCanvas(300, 300);
    // <div id="canvas"> に canvas を配置
    canvas.parent("canvas");
    // canvas の背景色
    p5.background(220);
    // canvas 内の動きをなめらかにする
    p5.smooth();
  };
};

const p5Slect1 = function (p5) {
  p5.rect(80, 80, 140, 140);
};

const p5Slect2 = function (p5) {
  p5.triangle(150, 80, 80, 220, 220, 220);
};

const p5Slect3 = function (p5) {
  p5.ellipse(150, 150, 140, 140);
};
const p5Slect4 = function (p5) {
  p5.line(80, 80, 220, 220);
};

export { p5Setup, p5Slect1, p5Slect2, p5Slect3, p5Slect4 };
