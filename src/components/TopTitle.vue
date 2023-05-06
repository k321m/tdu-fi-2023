<template>
  <!-- background -->
  <div id="particles-js"></div>
  <div id="wrapper">
    <!-- mainTitle -->
    <div class="pa-6">
      <div>
        <VueTyper class="hack-h4" text=">2023" type-delay="50" :repeat="0" />
      </div>
      <div>
        <VueTyper
          class="hack-h4"
          text=">TOKYO DENKI UNIVERSITY"
          type-delay="50"
          pre-type-delay="500"
          :repeat="0"
        />
      </div>
      <div>
        <VueTyper
          class="hack-h1 custom"
          text="OPEN CAMPUS"
          type-delay="50"
          pre-type-delay="1900"
          :repeat="0"
        ></VueTyper>
      </div>
      <div>
        <VueTyper
          class="hack-h1"
          text="6.11"
          type-delay="50"
          pre-type-delay="2500"
          :repeat="0"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TopTitle",
};
</script>
