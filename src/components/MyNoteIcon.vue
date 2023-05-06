<template>
  <div class="my-note-icon">My Note</div>
</template>

<script>
export default {
  name: "MyNoteIcon",
};
</script>

<style scoped>
.my-note-icon {
  position: fixed;
  right: 20px;
  bottom: 20px;
  width: 100px;
  height: 100px;
  line-height: 100px;
  background-color: black;
  border-radius: 50%;
  color: #fff;
  text-align: center;
  animation: poyopoyo 3s ease-out infinite;
}

.my-note-icon::after {
  content: "";
  position: absolute;
  top: -10%;
  left: -20%;
  width: 40px;
  height: 100%;
  transform: scale(2) rotate(20deg);
  background-image: linear-gradient(
    100deg,
    rgba(255, 255, 255, 0) 10%,
    rgba(255, 255, 255, 0.5) 100%,
    rgba(255, 255, 255, 0) 0%
  );

  /* アニメーション */
  animation-name: shiny;
  animation-duration: 3s;
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
}

@keyframes shiny {
  0% {
    left: -20%;
  }
  10% {
    left: 120%;
  }
  100% {
    left: 120%;
  }
}

@keyframes poyopoyo {
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
}
</style>
