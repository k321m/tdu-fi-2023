<template>
  <v-dialog v-model="isAddQueDialogVisible">
    <MyNoteAddQueDialog
      @close-add-dialog="isAddQueDialogVisible = false"
    ></MyNoteAddQueDialog>
  </v-dialog>
  <div>
    <p class="zen-kaku-bold">質問リスト</p>
    <!-- <div v-for="(value, key) in questionDetailData" :key="value">
      <MyNoteQuestionAcordion :key="key">
        <template v-slot:title>{{ value.title }}</template>
        <template v-slot:event>{{ value.event }}</template>
        <template v-slot:place>{{ value.place }}</template>
      </MyNoteQuestionAcordion>
    </div> -->
    <div class="py-2">
      <div style="text-align: center" @click="openAddDialog">
        <img src="../assets/icon-add.svg" />
      </div>
    </div>
    <div class="py-4">
      <p class="zen-kaku-regular">▶︎ 具体的な質問例</p>
    </div>
  </div>
</template>

<script>
import MyNoteQuestionAcordion from "./MyNoteQuestionAcordion.vue";
import MyNoteAddQueDialog from "./MyNoteAddQueDialog.vue";
import MyNoteDeleteDialog from "./MyNoteDeleteDialog.vue";
export default {
  name: "MyNoteQuestionList",
  props: ["questionDetailData"],
  components: {
    MyNoteQuestionAcordion,
    MyNoteAddQueDialog,
    MyNoteDeleteDialog,
  },
  data() {
    return {
      isAddQueDialogVisible: false,
    };
  },
  methods: {
    openAddDialog() {
      console.log("おされた");
      this.isAddQueDialogVisible = !this.isAddQueDialogVisible;
    },
  },
};
</script>
