<template>
  <div class="background-dialog pa-7">
    <h2>質問項目を追加する</h2>
    <div class="pt-7" style="flex-grow: 1; display: flex">
      <textarea placeholder="何を聞く？" v-model="question"></textarea>
    </div>
    <div class="pt-5">
      <v-row class="pa-2">
        <v-col class="pa-1">
          <div class="btn default-border-btn" @click="closeAddDialog">
            キャンセル
          </div>
        </v-col>
        <v-col class="pa-1">
          <div class="btn myNote-btn btn-animation" @click="addQuestion">
            追加
          </div>
        </v-col>
      </v-row>
    </div>
  </div>
</template>
<script>
export default {
  name: "MyNoteAddQueDialog",
  emits: ["close-add-dialog"],
  data() {
    return {
      type: "questions",
      question: "",
    };
  },
  methods: {
    closeAddDialog() {
      this.$emit("close-add-dialog");
    },
    addQuestion() {
      if (this.question == "") {
        return;
      }
      var counter = this.$store.getters.getAddQueCounter;
      var key = "addself-question-" + (counter + 1);
      this.$store.commit("countAddQuestion");
      this.$store.commit("addMyNote", {
        type: this.type,
        key: key,
        question: this.question,
      });
      this.closeAddDialog();
    },
  },
};
</script>

<style scoped>
.background-dialog {
  min-height: 60dvh;
  max-height: 90dvh;
  background-color: white;
  border-radius: 0.8rem;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 580px;
}

textarea {
  padding: 8px;
  width: 100%;
  border: 1px solid var(--light-purple);
  background-color: var(--white);
  overflow: scroll;
  height: auto;
}
textarea:focus {
  border: 1px solid var(--dark);
  background-color: var(--white);
  outline: none;
}
</style>
