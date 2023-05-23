<template>
  <div class="background-dialog pa-7">
    <p class="zen-kaku-bold" style="font-size: 1.8em">質問項目を追加する</p>
    <div class="pt-7">
      <textarea
        @blur="saveMemo()"
        placeholder="何を聞く？"
        v-model="memo"
      ></textarea>
    </div>
    <div class="pt-4">
      <v-row class="pa-2">
        <v-col class="pa-1">
          <div class="default-sub-btn" @click="closeAddDialog">
            <p class="zen-kaku-bold">キャンセル</p>
          </div>
        </v-col>
        <v-col class="pa-1">
          <div class="myNote-btn btn-animation" @click="deleteData">
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
      memo: "",
    };
  },
  methods: {
    closeAddDialog() {
      this.$emit("close-add-dialog");
    },
  },
};
</script>

<style scoped>
.background-dialog {
  min-height: 350px;
  background-color: white;
  border-radius: 10px;
}

textarea {
  padding: 10px;
  width: 100%;
  min-height: 220px;
  border: 1px solid #acaaf2;
  overflow: scroll;
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
