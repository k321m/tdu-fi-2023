<template>
  <Dialog
    :model-value="view"
    @update:model-value="$emit('update:view', $event)"
    @close-dialog="$emit('close-dialog')"
  >
    <!-- タイトル -->
    <template v-slot:title> INUE研からの挑戦状 </template>
    <!-- 画像 -->
    <template v-slot:info>
      <v-row no-gutters justify="center" style="align-items: center; margin: 0">
        <MissionImage
          :imgSrc="'/src/assets/missions/Mission01.png'"
        ></MissionImage>
        <MissionImage
          :imgSrc="'/src/assets/missions/Mission02.png'"
        ></MissionImage>
        <MissionImage
          :imgSrc="'/src/assets/missions/Mission03.png'"
        ></MissionImage>
        <MissionImage
          :imgSrc="'/src/assets/missions/Mission04.png'"
          isLast
        ></MissionImage>
      </v-row>
    </template>
    <!-- 本文 -->
    <template v-slot:body>
      <h4 class="mb-2">
        達成したミッション<span class="hack pl-2"
          >{{ this.$store.getters.getClearedMissionNum }}/4</span
        >
      </h4>
      <div v-for="item in missionItems" :key="item.to">
        <MissionItem :to="item.to" :isClear="item.clear">{{
          item.content
        }}</MissionItem>
      </div>
    </template>
  </Dialog>
</template>

<script>
import Dialog from "../parts/Dialog.vue";
import MissionItem from "./MissionItem.vue";
import MissionImage from "../parts/MissionImage .vue";
export default {
  name: "MissionDialog",
  props: {
    view: {
      type: Boolean,
      required: true,
    },
  },
  emits: ["close-dialog", "update:view"],
  components: {
    Dialog,
    MissionItem,
    MissionImage,
  },
  computed: {
    missionItems() {
      return [
        {
          content: "学科紹介ページを閲覧しよう",
          to: "/department",
          clear: this.$store.getters.getIsClearedMission1,
        },
        {
          content: "MyNoteに「質問項目」を追加しよう",
          to: "/questions-top10",
          clear: this.$store.getters.getIsClearedMission2,
        },
        {
          content: "MyNoteに「訪問項目」を追加しよう",
          to: "/#time-schedule",
          clear: this.$store.getters.getIsClearedMission3,
        },
        {
          content: "プログラミング体験の一問目を解こう",
          to: "/programming",
          clear: this.$store.getters.getIsClearedMission4,
        },
      ];
    },
  },
};
</script>

<style scoped>
.mission-img {
  width: 4em;
  height: auto;
}
</style>
