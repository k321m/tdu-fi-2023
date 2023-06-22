<template>
  <div id="top-title" style="min-height: 225px">
    <div class="pl-4 pt-8 pb-4">
      <div>
        <VueTyper
          class="hack-h3"
          text=">2023"
          :type-delay="50"
          :repeat="0"
          @typed="isfirstTypeDone = true"
        />
      </div>
      <div v-show="isfirstTypeDone">
        <VueTyper
          class="hack-h3"
          text=">TOKYO DENKI UNIVERSITY"
          :type-delay="50"
          :pre-type-delay="500"
          :repeat="0"
          @typed="isSecondTypeDone = true"
        />
      </div>
      <div v-show="isSecondTypeDone">
        <VueTyper
          class="hack-extra custom"
          text="OPEN CAMPUS"
          :type-delay="55"
          :pre-type-delay="2000"
          :repeat="0"
          @typed="isThirdTypeDone = true"
        ></VueTyper>
      </div>
      <div v-show="isThirdTypeDone">
        <VueTyper
          class="hack-extra"
          text="6.11"
          :type-delay="55"
          :pre-type-delay="2800"
          :repeat="0"
          @typed="isForthTypeDone = true"
        />
        <span v-show="isForthTypeDone">
          <VueTyper
            class="pl-1 hack-h3"
            text="sun"
            :type-delay="55"
            :pre-type-delay="3100"
            :repeat="0"
          />
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TopTitle",
  data() {
    return {
      isfirstTypeDone: false,
      isSecondTypeDone: false,
      isThirdTypeDone: false,
      isForthTypeDone: false,
    };
  },
};
</script>

<style scoped>
.hack-h3 {
  font-size: 1.5em;
}
</style>
