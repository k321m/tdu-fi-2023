<template>
  <div>
    <div class="pb-1" style="display: flex; align-items: flex-end">
      <h4 class="py-3">なんでもメモ</h4>
      <v-icon
        style="margin: 0 0 0 auto; padding-right: 0.4rem; font-size: 1rem"
        @click="copyMemoToClipboard"
        v-if="!isCopied"
        >mdi-clipboard-multiple</v-icon
      >
      <v-icon
        style="margin: 0 0 0 auto; padding-right: 0.4rem; font-size: 1rem"
        @click="copyMemoToClipboard"
        v-else
        >mdi-clipboard-check-multiple</v-icon
      >
    </div>
    <textarea
      @blur="saveMemo()"
      placeholder="重要なことはメモに残そう！"
      v-model="memo"
    ></textarea>
  </div>
</template>

<script>
export default {
  name: "MyNoteAnythingMemo",
  data() {
    return {
      type: "anything",
      memo: "",
      isCopied: false,
    };
  },
  methods: {
    updateMemo() {
      var anythingMyNote = this.$store.getters.getMyNoteAnything;
      this.memo = anythingMyNote.memo;
    },
    saveMemo() {
      this.$store.commit("saveMemo", {
        type: this.type,
        memo: this.memo,
      });
    },
    copyMemoToClipboard() {
      this.isCopied = true;
      navigator.clipboard.writeText(this.memo);
      setTimeout(() => {
        this.isCopied = false;
      }, 3000);
    },
    clearMemo() {
      this.memo = "";
    },
  },
  mounted() {
    this.updateMemo();
  },
};
</script>

<style scoped>
textarea {
  padding: 8px;
  width: 100%;
  border: 1px solid var(--light-purple);
  background-color: var(--white);
  overflow: scroll;
  min-height: 12em;
}

textarea:focus {
  border: 1px solid var(--dark);
  background-color: var(--white);
  outline: none;
}
</style>
