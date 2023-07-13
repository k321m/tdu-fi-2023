let select1 = false;
let select2 = false;
let select3 = false;
let select4 = false;

var i;
const p5Setup = function (p5) {
  // はじめに呼ばれる
  p5.setup = () => {
    // canvas 生成
    const canvas = p5.createCanvas(300, 300);
    // <div id="canvas"> に canvas を配置
    canvas.parent("canvas");
    // canvas の背景色
    p5.background(220);
    // p5.ellipse(150, 100, 50, 50);
    // canvas 内の動きをなめらかにする
    p5.smooth();
    // draw()を 1/30秒ごとに実行
    // p5.frameRate(30);
    i = 0;
  };

  // // 1/frameRate 秒ごとに呼ばれる
  // p5.draw = () => {
  //   p5.background(220);
  //   if (!select1 && !select2 && !select3 && !select4) {
  //     p5.ellipse(150, 100, 50, 50);
  //   }
  //   if (select1) {
  //     p5.ellipse(150, 100, 50, 50);
  //   }
  //   if (select2) {
  //     p5.ellipse(150, 100 + i, 50, 50);
  //     i++;
  //   }
  //   if (select3) {
  //     p5.ellipse(150, 250, 50, 50);
  //   }
  //   if (select4) {
  //     p5.ellipse(150, 100 - i, 50, 50);
  //     i++;
  //   }
  // };
};

// ボール追加フラグの変更
const p5Slect1 = () => {
  // i = 0;
  // select1 = true;
  // select2 = false;
  // select3 = false;
  // select4 = false;
  p5.background(220);
  if (select1) {
    p5.ellipse(150, 100, 50, 50);
  }
};

const p5Slect2 = function (p5) {
  console.log("p5Slect2");
  // i = 0;
  // select1 = false;
  // select2 = true;
  // select3 = false;
  // select4 = false;
  var i = 0;
  p5.draw = () => {
    p5.background(220);
    p5.ellipse(150, 100 + i, 50, 50);
    i++;
    p5.print(i);
    if (p5.frameCount > 100) {
      p5.noLoop();
    }
  };
};

const p5Slect3 = () => {
  i = 0;
  select1 = false;
  select2 = false;
  select3 = true;
  select4 = false;
};
const p5Slect4 = () => {
  i = 0;
  select1 = false;
  select2 = false;
  select3 = false;
  select4 = true;
};
export { p5Setup, p5Slect1, p5Slect2, p5Slect3, p5Slect4 };
