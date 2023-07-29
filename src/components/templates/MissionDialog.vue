<template>
  <Dialog
    :model-value="view"
    @update:model-value="$emit('update:view', $event)"
    @close-dialog="$emit('close-dialog')"
  >
    <!-- タイトル -->
    <template v-slot:title>
      チュートリアルミッション
      <span style="display: block; font-size: 0.8rem; padding-top: 0.6rem">
        ミッションを達成して、「プログラミング体験」の追加問題をゲットしよう！
      </span>
    </template>

    <!-- 画像 -->
    <template v-slot:info>
      <v-row no-gutters justify="center" style="align-items: center; margin: 0">
        <template v-for="(image, index) in missionImages">
          <MissionImage
            :imgData="getIsPlay(index) ? image.clearImgData : image.imgData"
            :isLast="index == missionImages.length - 1"
            :isPlay="getIsPlay(index)"
          />
        </template>
      </v-row>
      <Button programming class="mt-3" :to="'/programming'"
        >プログラミング体験へ</Button
      >
    </template>
    <!-- 本文 -->
    <template v-slot:body-title>
      <h4 class="mb-2 mt-4">
        達成したミッション
        <span class="hack pl-2">
          {{ this.$store.getters.getClearedMissionNum }}/4
        </span>
      </h4>
    </template>
    <template v-slot:body>
      <div v-for="item in missionItems" :key="item.to">
        <MissionItem
          :to="item.to"
          :isClear="item.clear"
          @close-dialog="$emit('close-dialog')"
          >{{ item.content }}</MissionItem
        >
      </div>
    </template>
  </Dialog>
</template>

<script>
import Dialog from "../parts/Dialog.vue";
import Button from "../parts/Button.vue";
import MissionItem from "./MissionItem.vue";
import MissionImage from "../parts/MissionImage .vue";
import MissionImage01 from "/src/assets/missions/Mission01.png";
import MissionImage02 from "/src/assets/missions/Mission02.png";
import MissionImage03 from "/src/assets/missions/Mission03.png";
import MissionImage04 from "/src/assets/missions/Mission04.png";
import ClearMissionImage01 from "/src/assets/missions/Mission01-clear.png";
import ClearMissionImage02 from "/src/assets/missions/Mission02-clear.png";
import ClearMissionImage03 from "/src/assets/missions/Mission03-clear.png";
import ClearMissionImage04 from "/src/assets/missions/Mission04-clear.png";

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
    Button,
    MissionItem,
    MissionImage,
  },
  computed: {
    missionImages() {
      return [
        {
          imgData: MissionImage01,
          clearImgData: ClearMissionImage01,
        },
        {
          imgData: MissionImage02,
          clearImgData: ClearMissionImage02,
        },
        {
          imgData: MissionImage03,
          clearImgData: ClearMissionImage03,
        },
        {
          imgData: MissionImage04,
          clearImgData: ClearMissionImage04,
        },
      ];
    },
    missionItems() {
      return [
        {
          content: "「学科紹介」ページを閲覧しよう",
          to: "/department",
          clear: this.$store.getters.getIsClearedMission1,
        },
        {
          content: "MyNoteに「訪問項目」を追加しよう",
          to: "/#time-schedule",
          clear: this.$store.getters.getIsClearedMission2,
        },
        {
          content: "MyNoteに「質問項目」を追加しよう",
          to: "/questions-top10",
          clear: this.$store.getters.getIsClearedMission3,
        },
        {
          content: "「プログラミング体験」の問題1を解こう",
          to: "/programming",
          clear: this.$store.getters.getIsClearedMission4,
        },
      ];
    },
  },
  methods: {
    getIsPlay(index) {
      return index < this.$store.getters.getClearedMissionNum;
    },
  },
};
</script>
