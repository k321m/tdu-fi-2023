<template>
  <div class="background-dialog pa-7">
    <p class="zen-kaku-bold" style="font-size: 1.8em">質問項目を追加する</p>
    <div class="pt-7" style="flex-grow: 1; display: flex">
      <textarea placeholder="何を聞く？" v-model="question"></textarea>
    </div>
    <div class="pt-5">
      <v-row class="pa-2">
        <v-col class="pa-1">
          <div class="default-border-btn" @click="closeAddDialog">
            <p class="zen-kaku-bold">キャンセル</p>
          </div>
        </v-col>
        <v-col class="pa-1">
          <div class="myNote-btn btn-animation" @click="addQuestion">
            <p class="zen-kaku-bold">追加</p>
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
}

textarea {
  padding: 10px;
  width: 100%;
  height: auto;
  border: 1px solid #acaaf2;
  overflow: scroll;
}
textarea:focus {
  border: 1px solid #010440;
  background-color: white;
  outline: none;
}
::placeholder {
  font-family: zen-kaku-gothic-new, sans-serif;
  font-weight: 400;
  font-style: normal;
  line-height: 1.3;
  font-size: 1rem;
  color: #d3d1ff;
}
</style>
