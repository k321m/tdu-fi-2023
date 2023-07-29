<template>
  <div class="loading-screen">
    <!-- ローディング画面のコンテンツ -->
    <div class="progress-bar"></div>
    <div class="progress-percentage hack" :class="{ play: playAnimation }">
      <span v-if="!playAnimation" class="small">Loading… </span
      ><b>{{ progressPercentage }}</b
      ><span v-if="!playAnimation" class="small"> %</span>
    </div>
  </div>
</template>

<script>
// import ProgressBar from "../js/particles/top-particle";
export default {
  name: "ProgressBar",
  emits: ["end-loading"],
  data() {
    return {
      progressPercentage: 0,
      playAnimation: false,
    };
  },
  methods: {
    // ダミーローディングをシミュレートする関数
    simulateLoading() {
      const interval = setInterval(() => {
        this.progressPercentage++;
        if (this.progressPercentage >= 101) {
          // 100%に達したら点滅アニメーション
          clearInterval(interval);
          this.playAnimation = true;
          this.progressPercentage = "complete!";
          setTimeout(() => {
            // ダミーローディング終了
            this.$emit("end-loading");
          }, 1500);
        }
      }, 10);
    },
  },
  mounted() {
    // アプリケーションがマウントされた後にダミーローディングを開始
    this.simulateLoading();
  },
};
</script>

<style scoped>
.loading-screen {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  /* background-color: rgba(1, 4, 64, 0.9); */
  background-color: transparent;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  z-index: 1;
  padding: 0 1.4rem;
}
.progress-bar {
  position: relative;
  width: 100%;
  height: 1.4rem;
  background: url(/src/assets/progressbar-bg.png);
  background-size: contain;
}
.progress-bar::after {
  content: "";
  position: absolute;
  height: 100%;
  width: v-bind(progressPercentage + "%");
  max-width: 100%;
  /* background: var(--light-purple); */
  background: var(--dark);
}

.progress-percentage {
  /* color: var(--white); */
  color: var(--dark);
  margin: 1rem auto 0 auto;
  font-size: 1.2rem;
}

.progress-percentage.play {
  animation: flash 0.5s linear infinite;
}
@keyframes flash {
  0%,
  100% {
    opacity: 1;
  }

  50% {
    opacity: 0;
  }
}
</style>
