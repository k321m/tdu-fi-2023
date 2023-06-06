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
      class="zen-kaku-bold"
      style="
        font-size: 0.8em;
        color: #e345e6;
        text-align: center;
        text-decoration: underline;
      "
    >
      データ削除
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
