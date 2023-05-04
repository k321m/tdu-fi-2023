<script setup>
import { onMounted, ref } from "vue";

defineProps({
  msg: String,
});

const count = ref(0);
</script>
<template>
  <div id="background">
    <div class="m-6">
      <VueTyper
        class="vueTyper-sub"
        text=">2023"
        type-delay="100"
        :repeat="0"
      /><br />
      <VueTyper
        class="vueTyper-sub"
        text=">TOKYO DENKI UNIVERSITY"
        type-delay="100"
        pre-type-delay="1000"
        :repeat="0"
      /><br />
      <VueTyper
        class="vueTyper-h1"
        text="OPEN CAMPUS"
        type-delay="100"
        pre-type-delay="3500"
        :repeat="0"
      />
    </div>
  </div>
</template>

<script>
import NET from "vanta/dist/vanta.net.min";
export default {
  mounted() {
    this.vantaEffect = NET({
      el: "#background",
      mouseControls: false,
      touchControls: false,
      gyroControls: false,
      minHeight: 500.0,
      scale: 1.0,
      scaleMobile: 1.0,
      color: 0x360a73,
      backgroundColor: 0xd3d1ff,
      maxDistance: 23.0,
      spacing: 20.0,
    });
  },
};
</script>
