<template>
  <div v-for="(value, key) in questionButtonData" :key="value">
    <div
      class="my-2 question-button"
      :class="
        value.questionNo <= missionNum + 1
          ? 'able-question-button'
          : 'disable-question-button'
      "
      :style="
        value.questionNo <= missionNum + 1
          ? value.backgroundColor
          : 'background-color:#E9E8FF'
      "
    >
      <router-link :to="{ name: value.linkName }"></router-link>
      <div class="text-area">
        <p class="hack" style="font-size: 1.5em; line-height: 1em">{{ key }}</p>
        <p class="hack" style="line-height: 1em; padding: 0.3em 0 0 1.5em">
          {{ value.name }}
        </p>
      </div>
      <img
        v-if="value.fireNum > 0"
        class="img-fire"
        src="../assets/fire.svg"
        style="right: 1.8rem"
      />
      <img
        v-if="value.fireNum > 1"
        class="img-fire"
        src="../assets/fire.svg"
        style="right: 5rem"
      />
      <img
        v-if="value.fireNum > 2"
        class="img-fire"
        src="../assets/fire.svg"
        style="right: 8.2rem"
      />
      <img
        v-if="value.fireNum > 3"
        class="img-fire"
        src="../assets/fire.svg"
        style="right: 11.4rem"
      />
      <v-icon v-if="value.questionNo <= missionNum + 1"
        >mdi-chevron-right</v-icon
      >
      <img
        v-if="value.questionNo > missionNum + 1"
        class="lock-icon"
        src="../assets/ionic-ios-lock.svg"
      />
    </div>
  </div>
</template>
<script>
export default {
  name: "ProgrammingQuestionButton",
  props: ["questionButtonData"],
  data() {
    return {
      isAble: true,
      missionNum: 0,
    };
  },
  mounted() {
    this.missionNum = this.$store.getters.getClearedMissionNum;
  },
};
</script>

<style scoped>
.question-button {
  position: relative;
  min-height: 1em;
  padding: 1em;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0.2em;
}
p {
  font-weight: var(--bold);
}
.able-question-button p {
  color: var(--white);
}
.able-question-button i {
  color: var(--white);
}
.disable-question-button p {
  color: #c9c8f4;
}
.disable-question-button::after {
  content: "";
  background-color: rgba(1, 4, 64, 0.6);
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  border-radius: 0.2em;
}

a {
  z-index: 10;
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.img-fire {
  margin: -1rem;
  position: absolute;
}
.text-area {
  display: flex;
  align-items: flex-start;
  flex-grow: 1;
  overflow: hidden;
  border-radius: 0.3em;
}

.lock-icon {
  z-index: 10;
  position: absolute;
}
</style>
