<template>
  <v-dialog v-model="isClearFilterDialogVisible" :transition="false">
    <ClearFilterDialog
      @close-dialog="isClearFilterDialogVisible = false"
      @update-filtered="clearFilterTags"
      :currentFilteredTags="filteredTags"
    />
  </v-dialog>
  <div class="background-dialog px-5 pt-5">
    <!-- ×ボタン -->
    <div class="pb-1" style="display: flex" @click="$emit('close-dialog')">
      <div style="margin: 0 0 0 auto">
        <v-icon>mdi-close</v-icon>
      </div>
    </div>
    <h2 class="lab-title pb-5">絞り込み条件</h2>

    <div class="pb-4 scroll-contents">
      <div class="pb-3">
        <h4 class="pb-2">展示の有無</h4>

        <div class="pb-4">
          <div class="checkbox">
            <input
              type="checkbox"
              value="display"
              id="display-true"
              v-model="checkedTags"
            />
            <label
              for="display-true"
              class="checkbox-label"
              :class="{ 'sub-strong': checkedTags.includes('display') }"
              >あり</label
            >
          </div>

          <div class="checkbox">
            <input
              type="checkbox"
              value="not-display"
              id="display-false"
              v-model="checkedTags"
            /><label
              for="display-false"
              class="checkbox-label"
              :class="{
                'sub-strong': checkedTags.includes('not-display'),
              }"
              >なし</label
            >
          </div>
        </div>

        <h4 class="pb-2">キーワード</h4>
        <template v-for="(data, tag) in allTagData">
          <div
            class="checkbox"
            v-if="tag != 'all' && tag != 'display' && tag != 'not-display'"
          >
            <input
              type="checkbox"
              :value="tag"
              :id="tag"
              v-model="checkedTags"
            />
            <label
              :for="tag"
              class="checkbox-label"
              :class="{ 'sub-strong': checkedTags.includes(tag) }"
              >{{ tag }}</label
            >
          </div>
        </template>
      </div>
    </div>
  </div>
  <!-- ボタン -->
  <div class="footer px-5">
    <div class="button-group pb-2">
      <Button
        defaultBorder
        @click="isClearFilterDialogVisible = true"
        class="clear-button"
      >
        クリア
      </Button>
      <Button @click="onFilteredButton" class="filter-button">
        この条件で絞り込む
      </Button>
    </div>
  </div>
</template>

<script>
import Button from "./parts/Button.vue";
import ClearFilterDialog from "./ClearFilterDialog.vue";
export default {
  name: "LabFilterDialog",
  props: ["allTagData", "filteredTags"], // allだったら何もしないfilteredTagsならチェック状態にする
  emits: ["close-dialog", "update-filtered"],
  data() {
    return {
      checkedTags: [],
      isClearFilterDialogVisible: false,
    };
  },
  components: {
    ClearFilterDialog,
    Button,
  },
  methods: {
    // 絞り込みボタンを押すと親のメソッドを動かす。｢現在指定されている条件｣を子の｢選択中の条件｣にする。
    onFilteredButton() {
      // console.log("onFilteredButton()");
      this.$emit("close-dialog");
      this.$emit("update-filtered", this.checkedTags);
    },
    clearFilterTags() {
      // console.log("clearFilterTags()");
      this.checkedTags = [];
      this.onFilteredButton();
    },
  },
  mounted() {
    if (this.filteredTags[0] != "all") this.checkedTags = this.filteredTags;
  },
};
</script>

<style scoped>
input[type="checkbox"] {
  display: none; /* checkboxを非表示にする */
}

.checkbox {
  display: inline-block;
  margin-right: 0.8em;
  margin-bottom: 0.2em;
}
/* チェックボックス＋ラベル */
.checkbox-label {
  position: relative;
  display: inline-flex; /* ブロックレベル要素化する */
  align-items: center;
  padding-left: 1.4em;
}

/* チェックボックス共通 */
.checkbox-label::before,
.checkbox-label::after {
  content: "";
  position: absolute; /* ボックスの位置を指定する */
  left: 0;
  display: block; /* ブロックレベル要素化する */
  width: 1em;
  height: 1em;
}
/* チェックボックス（チェックなし） */
.checkbox-label::before {
  border: 1px solid var(--light-purple); /* ボックスの境界線を実線で指定する */
}
/* チェックマーク */
.checkbox-label::after {
  background-image: url(../assets/icon-check.svg);
  background-size: 80%;
  background-position: center center;
  opacity: 0;
}
input[type="checkbox"]:checked + .checkbox-label:after {
  /* チェックされたらチェックマークを表示する */
  opacity: 1;
}
/* チェックされた時ボックスの色を変更する */
input[type="checkbox"]:checked + .checkbox-label:before {
  background: transparent
    linear-gradient(153deg, #eb57ed 0%, #8f9eed 77%, #29eded 100%) 0% 0%
    no-repeat padding-box;
  border: none;
}

.background-dialog {
  display: flex;
  flex-direction: column;
  min-height: 88dvh;
  max-height: 90dvh;
  background-color: white;
  border-radius: 0.8rem;
  padding-bottom: 8rem;
}

/* アイコンと要素を上下中央揃えかつinline-blockで改行 */
.lab-professor-place {
  display: inline-flex;
  align-items: center;
  color: var(--black);
  margin-right: 0.8rem;
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
.button-group > button {
  font-size: 0.8em;
}
.button-group .clear-button {
  width: 39%;
}
.button-group .filter-button {
  width: 59%;
}
</style>
