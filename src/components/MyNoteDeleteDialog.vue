<template>
  <div class="background-dialog pa-7">
    <p class="zen-kaku-bold" style="font-size: 1.8em">
      <slot name="type"></slot>を削除する
    </p>
    <div class="pt-10">
      <p class="zen-kaku-medium">
        この操作は取り消せません。 <br />削除すると<slot
          name="message-plane"
        ></slot
        ><span style="color: #e345e6"><slot name="message-caution"></slot></span
        >。
      </p>
    </div>
    <div class="delete-data-box">
      <p class="zen-kaku-bold"><slot name="title"></slot></p>
    </div>
    <div>
      <v-row class="pa-2">
        <v-col class="pa-1">
          <div
            class="default-border-btn btn-animation"
            @click="closeDeleteDialog"
          >
            <p class="zen-kaku-bold">キャンセル</p>
          </div>
        </v-col>
        <v-col class="pa-1">
          <div class="pink-btn btn-animation" @click="deleteData">
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
  min-height: 110px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
