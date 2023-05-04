<script setup>
import { onMounted, ref } from "vue";
import { useHead } from "@vueuse/head";

defineProps({
  msg: String,
});

const count = ref(0);
</script>

<template>
  <p>HelloWorld</p>
  <div id="background"></div>
</template>

<script>
import NET from "vanta/dist/vanta.net.min";
export default {
  mounted() {
    this.vantaEffect = NET({
      el: "#background",
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 500.0,
      minWidth: 500.0,
      scale: 1.0,
      scaleMobile: 1.0,
      color: 0xffffff,
    });
  },
};
</script>
