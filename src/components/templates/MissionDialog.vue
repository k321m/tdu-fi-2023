<template>
  <Dialog
    :model-value="view"
    @update:model-value="$emit('update:view', $event)"
    @close-dialog="$emit('close-dialog')"
  >
    <!-- タイトル -->
    <template v-slot:title> INUE研からの挑戦状 </template>
    <!-- 本文 -->
    <template v-slot:body> ここになんか書くあれ </template>
  </Dialog>
</template>

<script>
import Dialog from "../parts/Dialog.vue";
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
  },
};
</script>
