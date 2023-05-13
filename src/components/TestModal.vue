<template>
  <transition name="fade">
    <div class="modal-bg">
      <div class="modal">
        <div class="modal-content">
          <p>モーダルの内容</p>
          <a class="modalClose" @click="clickEvent">モーダルを閉じる</a>
          <div class="close-btn" @click="clickEvent">
            <div>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "Modal",
  props: ["message"],
  methods: {
    clickEvent() {
      this.$emit("from-modal");
    },
  },
};
</script>

<style scoped>
.modal-bg {
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  top: 0;
  left: 0;
  z-index: 2000;
}
.modal {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.modal-content {
  width: 400px;
  height: 200px;
  background-color: #fff;
  position: relative;
  padding: 40px;
  box-sizing: border-box;
}
.modal-content > p {
  text-align: center;
  margin-bottom: 20px;
}
.modalClose {
  display: block;
  text-align: center;
  color: #2675bc;
  transition: 0.5s;
}
.modalClose:hover {
  opacity: 0.5;
}
.close-btn {
  position: absolute;
  right: 0;
  top: -50px;
  cursor: pointer;
}
.close-btn > div {
  width: 30px;
  height: 30px;
  position: relative;
}
.close-btn > div > span {
  width: 100%;
  height: 1px;
  background-color: #fff;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}
.close-btn > div > span:first-of-type {
  transform: rotate(45deg);
}
.close-btn > div > span:last-of-type {
  transform: rotate(-45deg);
}
.modal-bg.active {
  display: block;
}
/* transition 追記*/
.fade-enter-active,
.fade-leave-active {
  animation-name: fade;
  animation-duration: 0.5s;
}
.fade-leave-active {
  animation-direction: reverse;
}
@keyframes fade {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
