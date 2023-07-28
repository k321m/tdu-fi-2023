const p5Setup1 = function (p5) {
  p5.setup = () => {
    // canvas 生成
    const canvas = p5.createCanvas(250, 250);
    // <div id="canvas"> に canvas を配置
    canvas.parent("canvas2-1");
    // canvas の背景色
    p5.background(220);
    // canvas 内の動きをなめらかにする
    p5.smooth();
    p5.ellipse(125, 125, 100, 100);
  };
};

const p5Setup2 = function (p5) {
  p5.setup = () => {
    // canvas 生成
    const canvas = p5.createCanvas(250, 250);
    // <div id="canvas"> に canvas を配置
    canvas.parent("canvas2-2");
    // canvas の背景色
    p5.background(220);
    // canvas 内の動きをなめらかにする
    p5.smooth();
    p5.rect(75, 75, 100, 100);
  };
};

export { p5Setup1, p5Setup2 };
