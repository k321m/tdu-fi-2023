<template>
  <v-dialog v-model="isDeleteDialogVisible">
    <MyNoteDeleteDialog
      @close-delete-dialog="isDeleteDialogVisible = false"
      @delete-data="deleteAll"
    >
      <template v-slot:type>データ</template>
      <template v-slot:message-plane>MyNoteに追加されている</template>
      <template v-slot:message-caution>全ての項目、メモが失われます</template>
    </MyNoteDeleteDialog>
  </v-dialog>
  <div class="py-2">
    <div
      class="pink-btn"
      @click="isDeleteDialogVisible = !isDeleteDialogVisible"
    >
      <p class="zen-kaku-bold">MyNoteのデータを削除</p>
    </div>
  </div>
</template>

<script>
import MyNoteDeleteDialog from "./MyNoteDeleteDialog.vue";

export default {
  name: "MyNoteAllDeleteButton",
  components: {
    MyNoteDeleteDialog,
  },
  data() {
    return {
      type: "all",
      isDeleteDialogVisible: false,
    };
  },
  methods: {
    deleteAll() {
      this.$store.commit("deleteMyNote", {
        type: this.type,
      });
    },
  },
};
</script>
