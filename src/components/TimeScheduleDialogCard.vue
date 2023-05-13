<template>
  <div class="background-dialog pa-4">
    <div class="right" @click="dialogClose()">
      <v-icon>mdi-close</v-icon>
    </div>
    <div class="pb-10">
      <p class="zen-kaku-bold py-4">{{ data.event }}</p>
      <p class="zen-kaku-h2">{{ data.title }}</p>
    </div>
    <div class="pt-10">
      <img class="icon-map" src="../assets/icon-map.svg" />
      <span class="zen-kaku-regular pl-1">{{ data.place }}</span>
    </div>
    <div class="py-4">
      <p class="zen-kaku-medium info">
        {{ data.info }}
      </p>
    </div>
    <div class="py-2">
      <v-btn
        rounded="xs"
        width="100%"
        height="60px"
        elevation="2"
        @click="addMyNote()"
        >MyNoteに追加</v-btn
      >
    </div>
    <div class="py-2">
      <v-btn
        rounded="xs"
        width="100%"
        height="60px"
        elevation="2"
        @click="getMyNote()"
        >地図を確認</v-btn
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "DialogCard",
  props: ["data"],
  methods: {
    dialogClose() {
      this.$emit("close-dialog");
    },
    addMyNote() {
      console.log(this.data);
      this.$store.commit("addMyNote", this.data);
    },
    getMyNote() {
      console.log(this.$store.commit("getMyNote"));
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
