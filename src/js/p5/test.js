let fallBallFlag = false;
let stopBallFlag = false;
let resetBallFlag = false;

const p5Setup = function (p5) {
  var i;
  // はじめに呼ばれる
  p5.setup = () => {
    // canvas 生成
    const canvas = p5.createCanvas(300, 300);
    // <div id="canvas"> に canvas を配置
    canvas.parent("test-canvas");
    // canvas の背景色
    p5.background(220);
    // canvas 内の動きをなめらかにする
    p5.smooth();
    // draw()を 1/30秒ごとに実行
    // p5.frameRate(30);
    i = 0;
  };

  // 1/frameRate 秒ごとに呼ばれる
  p5.draw = () => {
    p5.background(220);
    if (!fallBallFlag && !stopBallFlag && !resetBallFlag) {
      p5.ellipse(150, 100, 50, 50);
    }
    if (fallBallFlag) {
      // ボールを追加
      p5.ellipse(150, 100 + i, 50, 50);
      i++;
    }
    // ボールを全て削除
    if (stopBallFlag) {
      p5.ellipse(150, 100 + i, 50, 50);
    }
    if (resetBallFlag) {
      p5.ellipse(150, 100, 50, 50);
      i = 0;
    }
  };
};

// ボール追加フラグの変更
const fallBall = () => {
  fallBallFlag = true;
  stopBallFlag = false;
  resetBallFlag = false;
};

// ボール削除フラグの変更
const stopBall = () => {
  stopBallFlag = true;
  fallBallFlag = false;
  resetBallFlag = false;
};

const resetBall = () => {
  resetBallFlag = true;
  fallBallFlag = false;
  stopBallFlag = false;
};
export { p5Setup, fallBall, stopBall, resetBall };
