<script setup>
import { onMounted, ref } from "vue";

defineProps({
  msg: String,
});

const count = ref(0);
</script>
<template>
  <div id="background">
    <div class="pa-6">
      <div class="mb-n2">
        <VueTyper
          class="vueTyper-sub"
          text=">2023"
          type-delay="100"
          :repeat="0"
        />
      </div>
      <div class="mt-n2">
        <VueTyper
          class="vueTyper-sub"
          text=">TOKYO DENKI UNIVERSITY"
          type-delay="100"
          pre-type-delay="1000"
          :repeat="0"
        />
      </div>
      <div>
        <VueTyper
          class="vueTyper-h1 custom"
          text="OPEN CAMPUS"
          type-delay="100"
          pre-type-delay="3500"
          :repeat="0"
        />
      </div>
      <div>
        <VueTyper
          class="vueTyper-h1"
          text="6.11"
          type-delay="100"
          pre-type-delay="4500"
          :repeat="0"
        />
      </div>
    </div>
  </div>
</template>

<script>
import GLOBE from "vanta/dist/vanta.globe.min";
export default {
  mounted() {
    this.vantaEffect = GLOBE({
      el: "#background",
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.0,
      minWidth: 200.0,
      scale: 1.0,
      scaleMobile: 1.0,
      color: 0xa571d9,
      color2: 0x90f0f0,
      size: 1.2,
      backgroundColor: 0xf2f2f2,
    });
  },
};
</script>
