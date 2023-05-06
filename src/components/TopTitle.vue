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
          ><span class="custom"></span
        ></VueTyper>
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
// import NET from "vanta/dist/vanta.net.min";
export default {
  name: "TopTitle",
  //   mounted() {
  //     this.vantaEffect = NET({
  //       el: "#background",
  //       mouseControls: false,
  //       touchControls: false,
  //       gyroControls: false,
  //       minHeight: 400.0,
  //       scale: 1.0,
  //       scaleMobile: 1.0,
  //       color: 0xa571d9,
  //       backgroundColor: 0xf2f2f2,
  //       maxDistance: 23.0,
  //       spacing: 20.0,
  //     });
  //   },
};
</script>
