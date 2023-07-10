<template>
  <Dialog
    :model-value="view"
    @update:model-value="$emit('update:view', $event)"
    @close-dialog="view = false"
  >
    <!-- アラート -->
    <template v-slot:alert>
      <Alert v-if="isViewAlert" @end-alert="isViewAlert = false">
        訪問リストに追加しました
      </Alert>
    </template>
    <!-- サブタイトル -->
    <template v-slot:sub-title>
      <template v-if="labData.display">
        <span class="pink">展示あり</span>
      </template>
      <template v-else>
        <span class="purple">展示なし</span>
      </template>
    </template>
    <!-- タイトル -->
    <template v-slot:title>
      {{ labData.title }}
    </template>
    <!-- イベント情報 -->
    <template v-slot:info>
      <DialogInfo :imgSrc="'/src/assets/icon-person.svg'">
        <template v-slot:item> {{ labData.professor["name"] }}</template>
        <template v-slot:small-item>{{ labData.professor["type"] }}</template>
      </DialogInfo>
      <DialogInfo
        v-if="labData.place != ''"
        :imgSrc="'/src/assets/icon-map.svg'"
      >
        <template v-slot:item> {{ labData.place }}</template>
      </DialogInfo>
      <div class="tags mt-1">
        <template v-for="tag in labData.tags">
          <Tag>{{ tag }}</Tag>
        </template>
      </div>
    </template>
    <!-- 本文 -->
    <template v-slot:body>
      <p class="pb-3">{{ labData.info }}</p>
      <div class="pb-3">
        <h4 class="pb-1">論文テーマ例</h4>
        <li v-for="theme in labData.theme">{{ theme }}</li>
      </div>
      <div class="pb-4">
        <h4 class="pb-1">就職先例</h4>
        <p>{{ labData.placeOfEmployment.join("、") }}</p>
      </div>

      <Button
        style="border-radius: 100dvh"
        defaultBorder
        class="mb-4"
        :to="labData.links[0]['url']"
      >
        <v-icon class="pr-1" style="color: var(--dark)">mdi-school</v-icon>
        もっと{{ labData.professor["type"] }}の研究について知る
      </Button>

      <a
        v-for="linkData in labData.links"
        class=""
        style="font-size: 0.9em; display: block; margin-bottom: 0.2em"
        :href="linkData['url']"
        >{{ linkData["name"] }}</a
      >
    </template>
    <!-- フッター -->
    <template v-slot:footer>
      <div class="button-group pb-2" v-if="labData.display">
        <Button @click="openMapDialog">地図を確認</Button>
        <Button myNote @click="myNoteBtnClicked">訪問リストに追加</Button>
      </div>
    </template>
  </Dialog>
</template>

<script>
import Dialog from "../parts/Dialog.vue";
import DialogInfo from "../parts/DialogInfo.vue";
import Tag from "../parts/Tag.vue";
import Button from "../parts/Button.vue";
import Alert from "../parts/Alert.vue";
export default {
  name: "LabViewDialog",
  props: {
    labData: {
      type: [Object, Function],
    },
    labKey: {
      type: [String, Function],
    },
    view: {
      type: Boolean,
      required: true,
    },
  },
  emits: ["close-dialog", "open-map-dialog", "update:view"],
  data() {
    return {
      isViewAlert: false,
      type: "events",
    };
  },
  components: {
    Dialog,
    DialogInfo,
    Tag,
    Button,
    Alert,
  },
  methods: {
    myNoteBtnClicked() {
      this.isViewAlert = true;
      this.$store.commit("addMyNote", {
        type: this.type,
        key: this.labKey,
        time: "終日開催",
        title: this.labData.title,
      });
    },
    openMapDialog() {
      // console.log(this.labData.mapKey);
      this.$emit("open-map-dialog", this.labData.mapKey);
    },
  },
};
</script>
