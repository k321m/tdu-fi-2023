// particlesJS("particles-js", {
//   particles: {
//     number: {
//       value: 125, //この数値を変更すると紙吹雪の数が増減できる
//       density: {
//         enable: false,
//         value_area: 400,
//       },
//     },
//     color: {
//       value: [
//         "#EA5532",
//         "#F6AD3C",
//         "#FFF33F",
//         "#00A95F",
//         "#00ADA9",
//         "#00AFEC",
//         "#4D4398",
//         "#E85298",
//       ], //紙吹雪の色の数を増やすことが出来る
//     },
//     shape: {
//       type: "polygon", //形状はpolygonを指定
//       stroke: {
//         width: 0,
//       },
//       polygon: {
//         nb_sides: 5, //多角形の角の数
//       },
//     },
//     opacity: {
//       value: 1,
//       random: false,
//       anim: {
//         enable: true,
//         speed: 20,
//         opacity_min: 0,
//         sync: false,
//       },
//     },
//     size: {
//       value: 5.305992965476349,
//       random: true, //サイズをランダムに
//       anim: {
//         enable: true,
//         speed: 1.345709068776642,
//         size_min: 0.8,
//         sync: false,
//       },
//     },
//     line_linked: {
//       enable: false,
//     },
//     move: {
//       enable: true,
//       speed: 10, //この数値を小さくするとゆっくりな動きになる
//       direction: "bottom", //下に向かって落ちる
//       random: false, //動きはランダムにならないように
//       straight: false, //動きをとどめない
//       out_mode: "out", //画面の外に出るように描写
//       bounce: false, //跳ね返りなし
//       attract: {
//         enable: false,
//         rotateX: 600,
//         rotateY: 1200,
//       },
//     },
//   },
//   interactivity: {
//     detect_on: "canvas",
//     events: {
//       onhover: {
//         enable: false,
//       },
//       onclick: {
//         enable: false,
//       },
//       resize: true,
//     },
//   },
//   retina_detect: true,
// });

particlesJS("particles-js", {
  particles: {
    number: { value: 72, density: { enable: true, value_area: 400 } },
    color: { value: "#a571d9" },
    shape: {
      type: "star",
      stroke: { width: 1, color: "#e345e6" },
      polygon: { nb_sides: 5 },
      image: { src: "img/github.svg", width: 100, height: 100 },
    },
    opacity: {
      value: 0.5,
      random: false,
      anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false },
    },
    size: {
      value: 2,
      random: true,
      anim: {
        enable: true,
        speed: 1,
        size_min: 1.6240621041348633,
        sync: false,
      },
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#00d1ff",
      opacity: 0.4,
      width: 1,
    },
    move: {
      enable: true,
      speed: 2,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: { enable: false, rotateX: 600, rotateY: 1200 },
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: { enable: false, mode: "repulse" },
      onclick: { enable: true, mode: "push" },
      resize: true,
    },
    modes: {
      grab: {
        distance: 611.3886113886114,
        line_linked: { opacity: 0.6960913660388353 },
      },
      bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 },
      repulse: { distance: 200, duration: 0.4 },
      push: { particles_nb: 4 },
      remove: { particles_nb: 2 },
    },
  },
  retina_detect: true,
});
var count_particles, stats, update;
stats = new Stats();
stats.setMode(0);
stats.domElement.style.position = "absolute";
stats.domElement.style.left = "0px";
stats.domElement.style.top = "0px";
document.body.appendChild(stats.domElement);
count_particles = document.querySelector(".js-count-particles");
update = function () {
  stats.begin();
  stats.end();
  if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) {
    count_particles.innerText = window.pJSDom[0].pJS.particles.array.length;
  }
  requestAnimationFrame(update);
};
requestAnimationFrame(update);
