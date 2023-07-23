<template>
  <Dialog
    :model-value="view"
    @update:model-value="$emit('update:view', $event)"
    @close-dialog="$emit('close-dialog')"
  >
    <!-- サブタイトル -->
    <template v-slot:sub-title>
      <span class="purple">{{ lectureData.year_of_enrollment }}</span>
    </template>
    <!-- タイトル -->
    <template v-slot:title>
      {{ lectureData.mordalTitle }}
    </template>
    <!-- イベント情報 -->
    <template v-slot:info>
      <template v-for="(data, index) in lectureData.professor">
        <DialogInfo :peopleIcon="index == 0 ? true : false">
          <template v-slot:item> {{ data["name"] }}</template>
          <template v-slot:small-item>{{ data["type"] }}</template>
          <template v-if="index !== lectureData.professor.length - 1">
            ,
          </template>
        </DialogInfo>
      </template>
    </template>
    <!-- 本文 -->
    <template v-slot:body>
      <p class="pb-7">{{ lectureData.info }}</p>
      <div class="pb-3" v-html="lectureData.video" />
      <div :class="{ 'mt-2': lectureData.links.length != 0 }">
        <a
          v-for="linkData in lectureData.links"
          style="font-size: 0.9em; display: block; margin-bottom: 0.4em"
          :href="linkData['url']"
        >
          {{ linkData["name"] }}
        </a>
      </div>
    </template>
  </Dialog>
</template>

<script>
import Dialog from "../parts/Dialog.vue";
import DialogInfo from "../parts/DialogInfo.vue";
export default {
  name: "LectureVideoViewDialog",
  props: {
    lectureData: {
      type: [Object, Function],
    },
    view: {
      type: Boolean,
      required: true,
    },
  },
  emits: ["close-dialog", "update:view"],
  components: {
    Dialog,
    DialogInfo,
  },
};
</script>
