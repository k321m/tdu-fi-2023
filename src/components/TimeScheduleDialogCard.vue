<template>
  <div class="background-dialog pa-4">
    <div class="right" @click="$emit('close-dialog')">
      <v-icon>mdi-close</v-icon>
    </div>
    <div class="pb-10">
      <p class="zen-kaku-bold py-4">{{ eventData.event }}</p>
      <p class="zen-kaku-h2">{{ eventData.title }}</p>
    </div>
    <div class="pt-10">
      <img class="icon-map" src="../assets/icon-map.svg" />
      <span class="zen-kaku-regular pl-1">{{ eventData.place }}</span>
    </div>
    <div class="py-4">
      <p class="zen-kaku-medium info">
        {{ eventData.info }}
      </p>
    </div>
    <div class="py-2">
      <v-btn
        rounded="xs"
        width="100%"
        height="60px"
        elevation="2"
        @click="$store.commit('addMyNote', this.eventKey)"
        >MyNoteに追加</v-btn
      >
    </div>
    <div class="py-2">
      <v-btn rounded="xs" width="100%" height="60px" elevation="2"
        >地図を確認</v-btn
      >
    </div>
  </div>
  <!-- <v-btn
    rounded="xs"
    width="100%"
    height="60px"
    elevation="2"
    @click="$store.commit('removeMyNote')"
    >データ削除</v-btn
  > -->
</template>

<script>
export default {
  name: "DialogCard",
  props: ["eventData", "eventKey"],
  emits: ["close-dialog"],
  methods: {
    addMyNote() {
      this.$store.commit("addMyNote", this.eventKey);
    },
  },
};
</script>

<style scoped>
.background-dialog {
  background-color: white;
  border-radius: 10px;
}
</style>
