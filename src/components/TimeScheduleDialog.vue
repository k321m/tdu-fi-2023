<template>
  <div class="background-dialog pa-4">
    <div style="display: flex" @click="$emit('close-dialog')">
      <div style="margin: 0 0 0 auto">
        <v-icon style="">mdi-close</v-icon>
      </div>
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
        @click="
          $store.commit('addMyNote', { type: this.type, key: this.eventKey })
        "
        >MyNoteに追加</v-btn
      >
    </div>
    <div class="py-2">
      <v-btn rounded="xs" width="100%" height="60px" elevation="2"
        >地図を確認</v-btn
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "TimeScheduleDialog",
  props: ["eventData", "eventKey"],
  emits: ["close-dialog"],
  data() {
    return {
      type: "events",
    };
  },
};
</script>

<style scoped>
.background-dialog {
  background-color: white;
  border-radius: 10px;
}
</style>
