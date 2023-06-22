<template>
  <div class="wrap" v-if="isVisible">
    <Transition name="fade">
      <div class="background fade-item">
        <p class="white small" style="text-align: center">
          <b><slot /></b>
        </p>
      </div>
    </Transition>
  </div>
</template>

<script>
import { ref, onMounted, onUnmounted } from "vue";
export default {
  name: "Alert",
  emits: ["end-alert"],
  setup(_, context) {
    const isVisible = ref(false);

    onMounted(() => {
      isVisible.value = true;
      setTimeout(() => {
        context.emit("end-alert");
        isVisible.value = false;
      }, 1000); // 1秒後にフェードアウト
    });

    onUnmounted(() => {
      clearTimeout();
    });

    return {
      isVisible,
    };
  },
};
</script>

<style scoped>
.wrap {
  position: fixed;
  width: 100dvw;
  height: 100dvh;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
}
.background {
  background-color: rgb(0, 0, 0, 0.8);
  border-radius: 100vh;
  padding: 0.8rem 2rem;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
