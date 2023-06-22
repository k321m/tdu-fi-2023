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
      <span
        :class="eventData.eventType == '限定プログラム' ? 'pink' : 'purple'"
      >
        {{ eventData.eventType }}
      </span>
    </template>
    <!-- タイトル -->
    <template v-slot:title>
      <span v-if="eventData.subTitle">{{ eventData.subTitle }}<br /></span>
      {{ eventData.title }}
    </template>
    <!-- イベント情報 -->
    <template v-slot:info>
      <DialogInfo v-if="eventTime" :imgSrc="'/src/assets/icon-clock.svg'">
        <template v-slot:item>
          {{ eventTime }}
        </template>
      </DialogInfo>
      <DialogInfo :imgSrc="'/src/assets/icon-map.svg'">
        <template v-slot:item>
          {{ eventData.place }}
        </template>
      </DialogInfo>
      <DialogInfo
        v-if="eventData.peopleNum"
        :imgSrc="'/src/assets/icon-people.svg'"
      >
        <template v-slot:item>
          {{ eventData.peopleNum }}
        </template>
      </DialogInfo>
    </template>
    <!-- 本文 -->
    <template v-slot:body>
      <p>{{ eventData.info }}</p>
      <div :class="{ 'mt-2': eventData.links.length != 0 }">
        <a
          v-for="linkData in eventData.links"
          style="font-size: 0.8em; display: block; margin-bottom: 0.4em"
          :href="linkData['url']"
        >
          {{ linkData["name"] }}
        </a>
      </div>
    </template>
    <!-- フッター -->
    <template v-slot:footer>
      <div class="button-group">
        <template v-for="button in eventData.buttons">
          <template v-if="button.name == 'default'">
            <Button @click="openMap(button.key)">地図を確認</Button>
          </template>
          <template v-else-if="button.name == 'mynote'">
            <Button myNote @click="myNoteBtnClicked">訪問リストに追加</Button>
          </template>
          <template v-else-if="button.name == 'pink'">
            <Button pink :to="'/labs'">研究室を確認</Button>
          </template>
        </template>
      </div>
    </template>
  </Dialog>
</template>

<script>
import Dialog from "../parts/Dialog.vue";
import DialogInfo from "../parts/DialogInfo.vue";
import Button from "../parts/Button.vue";
import Alert from "../parts/Alert.vue";
export default {
  name: "TimeScheduleDialog",
  props: {
    eventData: {
      type: [Object, Function],
    },
    eventKey: {
      type: [String, Function],
    },
    eventTime: {
      type: [String, Function],
    },
    view: {
      type: Boolean,
      required: true,
    },
  },
  emits: ["close-dialog", "open-map", "update:view"],
  data() {
    return {
      isViewAlert: false,
      type: "events",
    };
  },
  components: {
    Dialog,
    DialogInfo,
    Button,
    Alert,
  },
  methods: {
    myNoteBtnClicked() {
      this.isViewAlert = true;
      let addTitle = "";
      if (this.eventData.subTitle == null) {
        addTitle = this.eventData.title;
      } else {
        addTitle = this.eventData.subTitle + " " + this.eventData.title;
      }
      this.$store.commit("addMyNote", {
        type: this.type,
        key: this.eventKey,
        title: addTitle,
      });
    },
    openMap(key) {
      this.$emit("open-map", key);
    },
  },
  watch: {
    view(newValue) {
      this.$emit("update:view", newValue);
    },
  },
};
</script>
