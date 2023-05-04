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
import GLOBE from "vanta/dist/vanta.globe.min";
export default {
  mounted() {
    this.vantaEffect = GLOBE({
      el: "#background",
      mouseControls: false,
      touchControls: false,
      gyroControls: false,
      minHeight: 500.0,
      scale: 2.0,
      scaleMobile: 2.0,
      color2: 0xe345e6,
      size: 1.2,
      backgroundColor: 0xd3d1ff,
      points: 0,
    });
  },
};
</script>
