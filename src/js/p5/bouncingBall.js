var windowWidth = 300;
var windowHeight = 300;
// 初期状態のcanvasセットアップ
const p5Setup = function (p5) {
  p5.setup = () => {
    // canvas 生成
    const canvas = p5.createCanvas(windowWidth, windowHeight);
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
  var x = 150;
  var y = 100;
  var d = 50;
  var v = 0;
  p5.draw = () => {
    p5.background(225);
    p5.ellipse(x, y, d, d);
    v = v + 9.8;
    y = y + v;
    if (y + d / 2 > windowHeight) {
      y = windowHeight - d / 2;
      v = -v * 0.8;
    }
    if (p5.frameCount > 500) {
      p5.noLoop();
    }
  };
};

const p5Slect2 = function (p5) {
  var x = 150;
  var y = 100;
  var d = 50;
  var v = 0;
  p5.draw = () => {
    p5.background(225);
    p5.ellipse(x, y, d, d);
    v = 9.8;
    y = y + v;
    if (y + d / 2 > windowHeight) {
      y = windowHeight - d / 2;
      v = -v * 0.8;
    }
    if (p5.frameCount > 500) {
      p5.noLoop();
    }
  };
};

const p5Slect3 = function (p5) {
  var x = 150;
  var y = 100;
  var d = 50;
  var v = 0;
  p5.draw = () => {
    p5.background(225);
    p5.ellipse(x, y, d, d);
    v = v + 9.8 / 60;
    y = y + v;
    if (y + d / 2 > windowHeight) {
      y = windowHeight - d / 2;
      v = -v * 0.8;
    }
    if (p5.frameCount > 500) {
      p5.noLoop();
    }
  };
};
const p5Slect4 = function (p5) {
  var x = 150;
  var y = 100;
  var d = 50;
  var v = 0;
  p5.draw = () => {
    p5.background(225);
    p5.ellipse(x, y, d, d);
    v = v * 9.8;
    y = y + v;
    if (y + d / 2 > windowHeight) {
      y = windowHeight - d / 2;
      v = -v * 0.8;
    }
    if (p5.frameCount > 500) {
      p5.noLoop();
    }
  };
};
export { p5Setup, p5Slect1, p5Slect2, p5Slect3, p5Slect4 };
