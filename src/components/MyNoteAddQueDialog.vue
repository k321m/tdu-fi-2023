<template>
  <div class="background-dialog px-5 pt-5">
    <h2>質問項目を追加する</h2>
    <div class="pt-7" style="flex-grow: 1; display: flex">
      <textarea placeholder="何を聞く？" v-model="question"></textarea>
    </div>
    <div class="pt-5">
      <div class="footer">
        <div class="button-group">
          <Button defaultBorder @click="closeAddDialog">キャンセル</Button>
          <Button myNote @click="addQuestion">追加</Button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Button from "./parts/Button.vue";
export default {
  name: "MyNoteAddQueDialog",
  emits: ["close-add-dialog"],
  components: {
    Button,
  },
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
  /* min-height: 60dvh;
  max-height: 90dvh;
  background-color: white;
  border-radius: 0.8rem;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 580px; */
  display: flex;
  flex-direction: column;
  background-color: white;
  border-radius: 0.8rem;
  padding-bottom: 2rem;
  width: 90dvw;
  max-width: 580px;
  min-height: 40dvh;
  max-height: 68dvh;
  justify-content: space-between;
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
.footer {
  width: 100%;
}

.button-group {
  display: flex;
  justify-content: space-between;
}
.button-group > * {
  width: 49%;
}
</style>
