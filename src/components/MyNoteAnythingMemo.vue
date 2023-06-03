<template>
  <div>
    <p class="zen-kaku-bold py-3">なんでもメモ</p>
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
  },
  mounted() {
    this.updateMemo();
  },
};
</script>

<style scoped>
textarea {
  padding: 10px;
  width: 100%;
  min-height: 12em;
  border: 1px solid #acaaf2;
  background-color: white;
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
  font-size: 14px;
  color: #d3d1ff;
}
</style>
