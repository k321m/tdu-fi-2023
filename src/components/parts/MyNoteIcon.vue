<template>
  <router-link to="/my-note" :class="className">
    <img src="/src/assets/mynote-3d-icon.png" class="fixed-icon-img" />
  </router-link>
</template>
<!-- <transition :name="doneMyNoteTutorial ? 'fade' : ''">
    <div class="arrow_box" v-if="isArrowVisible">
      <div class="text-box">
        <h4 style="text-align: center" class="white">
          やりたいことや聞いたことは<br />MyNoteに保存しよう！
        </h4>
      </div>
    </div>
  </transition> -->

<!-- <div class="btnripple2" v-if="doneMyNoteTutorial"></div> -->
<!-- :class="iconAnimationStyleSet()" -->
<script>
export default {
  name: "MyNoteIcon",
  props: {
    className: String,
  },
  data() {
    return {
      doneMyNoteTutorial: false,
      // isArrowVisible: true,
    };
  },
  // created() {
  //   window.addEventListener("scroll", this.handleScroll);
  // },
  // methods: {
  // handleScroll() {
  //   if (this.isArrowVisible) {
  //     this.isArrowVisible = window.scrollY <= 500;
  //   }
  // },
  // iconAnimationStyleSet() {
  //   return {
  //     loudAnimation: this.doneMyNoteTutorial,
  //     quietAnimation: !this.doneMyNoteTutorial,
  //   };
  // },
  // },
  mounted() {
    this.doneMyNoteTutorial = !this.$store.getters.getDoneMyNoteTutorial;
    this.isArrowVisible = this.doneMyNoteTutorial;
  },
};
</script>

<style scoped>
/* .arrow_box {
  position: fixed;
  z-index: 102;
  right: 20px;
  bottom: 130px;
  width: 170px;
  height: 100px;
  background: var(--pink);
  padding: 10px;
  text-align: center;
  color: var(--white);
  font-size: 8px;
  font-weight: bold;
  border-radius: 8px;
  -webkit-border-radius: 8px;
  -moz-border-radius: 8px;
} */

/* .arrow_box:before,
.arrow_box:after {
  position: absolute;
  right: 40px;
  height: 0;
  width: 0;
  border: solid transparent;
  content: "";
} */
/* .arrow_box:before {
  top: 100%;
  margin-left: -10px;
  border-color: transparent;
  border-top-color: var(--pink);
  border-right-color: var(--pink);
  border-width: 10px;
} */
/* 
.text-box {
  position: absolute;
  width: 100%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
} */
/* 
.fade-leave-active {
  animation: fade 0.5s reverse;
}
@keyframes fade {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
} */

/* .my-note-icon {
  position: fixed;
  z-index: 100;
  right: 20px;
  bottom: 20px;
} */

/* .loudAnimation {
  position: absolute;
  z-index: 101;
  width: 70px;
  height: 80px;
  right: 5px;
  bottom: 5px;
  animation: poyopoyo 3s ease-out infinite;
} */

/* @keyframes poyopoyo {
  0%,
  40%,
  60%,
  80% {
    transform: scale(1);
  }
  50%,
  70% {
    transform: scale(0.9);
  }
} */

/* .btnripple2 { */
/*波紋の基点とするためrelativeを指定*/
/* position: relative; */
/*波紋の形状*/
/* display: inline-block;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  outline: none; */
/*アニメーションの設定*/
/* transition: all 0.5s;
} */

/*hoverした際の背景色の設定*/
/* .btnripple2:hover {
  background: #666;
} */

/*波形を2つ設定*/
/* .btnripple2::after,
.btnripple2::before {
  content: ""; */
/*絶対配置で波形の位置を決める*/
/* position: absolute;
  left: -25%;
  top: -25%; */
/*波形の形状*/
/* border: 1px solid #c063f9;
  width: 150%;
  height: 150%;
  border-radius: 50%; */
/*はじめは不透明*/
/* opacity: 1; */
/*ループするアニメーションの設定*/
/* animation: 1s circleanime linear infinite;
} */

/*波形の2つ目は0.5秒遅らせてアニメーション*/
/* .btnripple2::before {
  animation-delay: 0.5s;
} */

/*波形のアニメーション*/
/* @keyframes circleanime {
  0% {
    transform: scale(0.68);
  }
  100% {
    transform: scale(1.2);
    opacity: 0;
  }
} */

/* .quietAnimation {
  animation: fuwafuwa 3s infinite ease-in-out alternate;
  display: inline-block;
}
@keyframes fuwafuwa {
  0% {
    transform: translate(0, 0px) rotate(-4deg);
  }
  50% {
    transform: translate(0, -3px) rotate(0deg);
  }
  100% {
    transform: translate(0, 0px) rotate(4deg);
  }
} */
</style>
