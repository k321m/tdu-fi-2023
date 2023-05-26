<template>
  <div id="top-title" style="min-height: 270px">
    <div class="pl-4 pt-8 pb-4">
      <div>
        <VueTyper
          class="hack-h4"
          text=">2023"
          type-delay="50"
          :repeat="0"
          @typed="isfirstTypeDone = true"
        />
      </div>
      <div v-show="isfirstTypeDone">
        <VueTyper
          class="hack-h4"
          text=">TOKYO DENKI UNIVERSITY"
          type-delay="50"
          pre-type-delay="500"
          :repeat="0"
          @typed="isSecondTypeDone = true"
        />
      </div>
      <div class="py-1">
        <div v-show="isSecondTypeDone">
          <VueTyper
            class="hack-h1 custom"
            text="OPEN CAMPUS"
            type-delay="55"
            pre-type-delay="2000"
            :repeat="0"
            @typed="isThirdTypeDone = true"
          ></VueTyper>
        </div>
        <div v-show="isThirdTypeDone">
          <VueTyper
            class="hack-h4 custom"
            text="SPECIAL WEB PAGE"
            type-delay="55"
            pre-type-delay="2600"
            :repeat="0"
            @typed="isForthTypeDone = true"
          ></VueTyper>
        </div>
      </div>
      <div v-show="isForthTypeDone" style="font-size: large">
        <VueTyper
          class="hack-h1"
          text="6.11"
          type-delay="55"
          pre-type-delay="3500"
          :repeat="0"
          @typed="isFifthTypeDone = true"
        />
        <span v-show="isFifthTypeDone">
          <VueTyper
            class="pl-1 hack-h4"
            text="sun"
            type-delay="55"
            pre-type-delay="3800"
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
      isFifthTypeDone: false,
    };
  },
};
</script>
