<template>
  <!-- currentFilteredTags[0]が「all」だったら「現在適用している絞り込み条件はありません」を表示 -->
  <!-- それ以外なら -->
  <template v-if="currentFilteredTags[0] == 'all'">
    <div class="background-dialog px-5 pt-5 message">
      <p class="zen-kaku-bold pt-6" style="color: #010326; text-align: center">
        現在適用している条件はありません。
      </p>
    </div>
    <div class="footer px-5">
      <button
        class="default-border-btn btn-animation zen-kaku-bold back-button"
        style="width: 100%"
        @click="$emit('close-dialog')"
      >
        とじる
      </button>
    </div>
  </template>

  <template v-else>
    <div class="background-dialog px-5 pt-5 clear">
      <p class="zen-kaku-bold lab-title pb-7" style="color: #010326">
        全ての絞り込み条件を解除する
      </p>
      <div class="pb-2">
        <p class="zen-kaku-bold pb-2" style="color: #010326">
          現在の絞り込み条件
        </p>
      </div>
      <div class="scroll-contents">
        <ul>
          <li class="pb-1 zen-kaku-regular" v-for="tag in currentFilteredTags">
            ・{{ tag }}
          </li>
        </ul>
      </div>
    </div>
    <!-- ボタン -->
    <div class="footer px-5">
      <div class="button-group pb-2">
        <button
          class="default-border-btn btn-animation zen-kaku-bold"
          @click="$emit('close-dialog')"
        >
          キャンセル
        </button>
        <button
          class="default-btn btn-animation zen-kaku-bold"
          @click="clearFilterTags"
        >
          解除
        </button>
      </div>
    </div>
  </template>
</template>

<script>
export default {
  name: "ClearFilterDialog",
  props: ["currentFilteredTags"],
  emits: ["close-dialog", "update-filtered"],
  data() {
    return {
      type: "events",
    };
  },
  methods: {
    clearFilterTags() {
      this.$emit("close-dialog");
      this.$emit("update-filtered");
    },
  },
};
</script>

<style scoped>
.background-dialog {
  display: flex;
  flex-direction: column;
  max-height: 400px;
  background-color: white;
  border-radius: 10px;
  padding-bottom: 6rem;
}

.background-dialog.message {
  height: 40vh;
  flex-direction: column;
  justify-content: center;
}
.background-dialog.clear {
  height: 60vh;
}
.lab-title {
  font-size: 1.8em;
}

.scroll-contents {
  flex-grow: 1;
  overflow-y: scroll;
}

.footer {
  position: absolute;
  bottom: 0px;
  width: 100%;
  padding-bottom: 2rem;
}

.button-group {
  display: flex;
  justify-content: space-between;
}
.button-group > button,
.back-button {
  font-size: 0.8em;
  width: 49%;
}
</style>
