<template>
  <!-- currentFilteredTags[0]が「all」だったら「現在適用している絞り込み条件はありません」を表示 -->
  <!-- それ以外なら -->
  <template v-if="currentFilteredTags[0] == 'all'">
    <div class="background-clear-dialog px-5 pt-5 message">
      <p
        style="
          flex-grow: 1;
          display: flex;
          align-items: center;
          justify-content: center;
        "
      >
        <b>現在適用している条件はありません。</b>
      </p>
      <div class="footer">
        <button
          class="btn default-border-btn btn-animation back-button"
          style="width: 100%"
          @click="$emit('close-dialog')"
        >
          とじる
        </button>
      </div>
    </div>
  </template>

  <template v-else>
    <div class="background-clear-dialog px-5 pt-5 clear">
      <h2 class="lab-title pb-7" s>全ての絞り込み条件を解除する</h2>
      <div class="pb-2">
        <h3 class="pb-2">現在の絞り込み条件</h3>
      </div>
      <div class="scroll-contents pb-3 mb-4">
        <ul>
          <li class="pb-1" v-for="tag in currentFilteredTags">・{{ tag }}</li>
        </ul>
      </div>
      <!-- ボタン -->
      <div class="footer">
        <div class="button-group">
          <button
            class="btn default-border-btn btn-animation"
            @click="$emit('close-dialog')"
          >
            キャンセル
          </button>
          <button
            class="btn default-btn btn-animation"
            @click="clearFilterTags"
          >
            解除
          </button>
        </div>
      </div>
    </div>
  </template>
</template>

<script>
export default {
  name: "ClearFilterDialog",
  props: ["currentFilteredTags"],
  emits: ["close-dialog", "update-filtered"],
  methods: {
    clearFilterTags() {
      this.$emit("close-dialog");
      this.$emit("update-filtered");
    },
  },
};
</script>

<style scoped>
.background-clear-dialog {
  display: flex;
  flex-direction: column;
  background-color: white;
  border-radius: 0.8rem;
  padding-bottom: 2rem;
  max-width: 580px;
  justify-content: space-between;
}

.background-clear-dialog.message {
  height: 40dvh;
}
.background-clear-dialog.clear {
  min-height: 40dvh;
  max-height: 68dvh;
}
.lab-title {
  font-size: 1.6em;
  text-align: start;
}

.scroll-contents {
  flex-grow: 1;
  overflow-y: scroll;
}

.footer {
  width: 100%;
}

.button-group {
  display: flex;
  justify-content: space-between;
}
.button-group > button,
.back-button {
  width: 49%;
}
</style>
