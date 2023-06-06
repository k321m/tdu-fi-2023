<template>
  <v-dialog v-model="isAddQueDialogVisible">
    <MyNoteAddQueDialog
      @close-add-dialog="isAddQueDialogVisible = false"
    ></MyNoteAddQueDialog>
  </v-dialog>
  <div>
    <p class="zen-kaku-bold">質問リスト</p>
    <div v-for="(value, key) in questionDetailData" :key="value">
      <MyNoteQuestionAcordion :questionValue="value" :questionKey="key">
      </MyNoteQuestionAcordion>
    </div>
    <div class="py-2">
      <div style="text-align: center" @click="openAddDialog">
        <img src="../assets/icon-add.svg" />
      </div>
    </div>
    <div class="py-4">
      <router-link class="routerLink" to="/questions">
        <p class="zen-kaku-regular">▶︎ 具体的な質問例</p>
      </router-link>
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
      this.isAddQueDialogVisible = !this.isAddQueDialogVisible;
    },
  },
};
</script>
<style scoped>
.routerLink {
  text-decoration: none;
  color: #010326;
}
</style>
