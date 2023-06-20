<template>
  <div class="background-dialog pa-7">
    <h2><slot name="type"></slot>を削除する</h2>
    <div class="pt-8">
      <p>
        この操作は取り消せません。 <br />削除すると<slot
          name="message-plane"
        ></slot
        ><span class="pink"><slot name="message-caution"></slot></span>。
      </p>
    </div>
    <div class="delete-data-box">
      <p>
        <b><slot name="title"></slot></b>
      </p>
    </div>
    <div>
      <v-row class="pa-2">
        <v-col class="pa-1">
          <div
            class="btn default-border-btn btn-animation"
            @click="closeDeleteDialog"
          >
            キャンセル
          </div>
        </v-col>
        <v-col class="pa-1">
          <div class="btn pink-btn btn-animation" @click="deleteData">削除</div>
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
      this.closeDeleteDialog();
    },
  },
};
</script>

<style scoped>
.background-dialog {
  max-height: 90dvh;
  background-color: white;
  border-radius: 0.8rem;
  width: 100%;
  max-width: 580px;
}
.delete-data-box {
  min-height: 8rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

p {
  font-weight: var(--medium);
}
</style>
