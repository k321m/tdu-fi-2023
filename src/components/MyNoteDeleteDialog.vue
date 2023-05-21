<template>
  <div class="background-dialog pa-7">
    <p class="zen-kaku-bold" style="font-size: 1.8em">訪問項目を削除する</p>
    <div class="pt-10">
      <p class="zen-kaku-medium">
        この操作は取り消せません。 <br />削除すると<span style="color: #e345e6"
          >メモの内容が失われます</span
        >。
      </p>
    </div>
    <div class="delete-data-box py-10">
      <p class="zen-kaku-bold"><slot name="title"></slot></p>
    </div>
    <div>
      <v-row class="pa-2">
        <v-col class="pa-1">
          <div class="default-sub-btn btn-animation" @click="closeDeleteDialog">
            <p class="zen-kaku-bold">キャンセル</p>
          </div>
        </v-col>
        <v-col class="pa-1">
          <div class="delete-btn btn-animation" @click="deleteData">
            <p class="zen-kaku-bold">削除</p>
          </div>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
export default {
  name: "MyNoteDeleteDialog",
  emits: ["close-delete-dialog", "delete-data"],
  methods: {
    closeDeleteDialog() {
      this.$emit("close-delete-dialog");
    },
    deleteData() {
      this.$emit("delete-data");
      window.location.reload();
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
.delete-data-box {
  min-height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
