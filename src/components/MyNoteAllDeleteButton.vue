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
  <div class="py-1">
    <p
      @click="isDeleteDialogVisible = !isDeleteDialogVisible"
      class="pink small"
      style="text-align: center; text-decoration: underline"
    >
      <b>データ削除</b>
    </p>
  </div>
</template>

<script>
import MyNoteDeleteDialog from "./MyNoteDeleteDialog.vue";

export default {
  name: "MyNoteAllDeleteButton",
  emits: ["delete-data"],
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
      this.$emit("delete-data");
      this.$store.commit("deleteMyNote", {
        type: this.type,
      });
    },
  },
};
</script>
