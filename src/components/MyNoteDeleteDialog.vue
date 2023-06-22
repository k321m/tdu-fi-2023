<template>
  <div class="background-dialog px-5 pt-5">
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
    <div class="footer">
      <div class="button-group">
        <Button defaultBorder @click="closeDeleteDialog"> キャンセル </Button>
        <Button pink @click="deleteData">削除</Button>
      </div>
    </div>
  </div>
</template>

<script>
import Button from "./parts/Button.vue";
export default {
  name: "MyNoteDeleteDialog",
  emits: ["close-delete-dialog", "delete-data"],
  components: {
    Button,
  },
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
.delete-data-box {
  min-height: 8rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

p {
  font-weight: var(--medium);
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
