<template>
  <div class="arrow_box">
    <div class="text-box">
      <p class="zen-kaku-h5-bold">
        やりたいことや聞いたことは<br />MyNoteに保存しよう！
      </p>
    </div>
  </div>
  <img class="my-note-icon" src="../assets/MyNote.svg" />
</template>

<script>
export default {
  name: "MyNoteIcon",
};
</script>

<style scoped>
.arrow_box {
  position: fixed;
  z-index: 100;
  right: 20px;
  bottom: 130px;
  width: 170px;
  height: 100px;
  background: #e345e6;
  padding: 10px;
  text-align: center;
  color: #ffffff;
  font-size: 8px;
  font-weight: bold;
  border-radius: 8px;
  -webkit-border-radius: 8px;
  -moz-border-radius: 8px;
}

.arrow_box:before,
.arrow_box:after {
  position: absolute;
  right: 40px;
  height: 0;
  width: 0;
  border: solid transparent;
  content: "";
}
.arrow_box:before {
  top: 100%;
  margin-left: -10px;
  border-color: transparent;
  border-top-color: #e345e6;
  border-right-color: #e345e6;
  border-width: 10px;
}

.text-box {
  position: absolute;
  width: 170%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
/* .arrow_box:after {
  border: solid transparent;
  content: "";
  height: 0;
  width: 0;
  pointer-events: none;
  position: absolute;
  border-color: rgba(227, 69, 230, 0);
  border-top-width: 19px;
  border-bottom-width: 19px;
  border-left-width: 10px;
  border-right-width: 10px;
  margin-left: -10px;
  border-top-color: #e345e6;
  top: 100%;
  left: 71%;
} */

.my-note-icon {
  position: fixed;
  z-index: 100;
  right: 20px;
  bottom: 20px;
  width: 70px;
  height: 80px;
  animation: poyopoyo 3s ease-out infinite;
}

/* .my-note-icon::after {
  content: "";
  position: absolute;
  top: -10%;
  left: -20%;
  width: 40px;
  height: 100%;
  clip-path: my-note-icon;
  transform: scale(2) rotate(20deg);
  background-image: linear-gradient(
    100deg,
    rgba(255, 255, 255, 0) 10%,
    rgba(255, 255, 255, 0.5) 100%,
    rgba(255, 255, 255, 0) 0%
  );


  animation-name: shiny;
  animation-duration: 3s;
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
} 
*/
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
