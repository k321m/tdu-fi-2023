<template>
  <div class="background-dialog px-5 pt-5">
    <!-- ×ボタン -->
    <!-- <div class="pb-1" style="display: flex" @click="$emit('close-dialog')">
      <div style="margin: 0 0 0 auto">
        <v-icon>mdi-close</v-icon>
      </div>
    </div> -->
    <p class="zen-kaku-bold lab-title pb-7" style="color: #010326">
      全ての絞り込み条件を解除する
    </p>

    <!-- <div>CheckedTags: {{ checkedTags }}</div> -->
    <div class="pb-2">
      <p class="zen-kaku-bold pb-2" style="color: #010326">
        現在選択中の絞り込み条件
      </p>
    </div>
    <div class="scroll-contents">
      <ul>
        <li class="pb-1">・あいあい</li>
        <li class="pb-1">・あいあい</li>
        <li class="pb-1">・あいあい</li>
        <li class="pb-1">・あいあい</li>
        <li class="pb-1">・あいあい</li>
        <li class="pb-1">・あいあい</li>
        <li class="pb-1">・あいあい</li>
        <li class="pb-1">・あいあい</li>
        <li class="pb-1">・あいあい</li>
        <li class="pb-1">・あいあい</li>
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
        @click="onFilteredButton"
      >
        解除
      </button>
    </div>
  </div>
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
    // 絞り込みボタンを押すと親のメソッドを動かす。｢現在指定されている条件｣を子の｢選択中の条件｣にする。
    onFilteredButton() {
      this.$emit("close-dialog");
      this.$emit("update-filtered", this.checkedTags);
    },
  },
  mounted() {
    console.log(this.currentFilteredTags);
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
  color: #010326; /* フォントの色を指定 */
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
  border: 1px solid #d3d1ff; /* ボックスの境界線を実線で指定する */
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
  height: 90%;
  max-height: 400px;
  background-color: white;
  border-radius: 10px;
  padding-bottom: 7rem;
}
.lab-title {
  font-size: 1.8em;
}
/* アイコンと要素を上下中央揃えかつinline-blockで改行 */
.lab-professor-place {
  display: inline-flex;
  align-items: center;
  color: #010326;
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
  width: 49%;
}

a {
  text-decoration: none;
  color: #010326;
}
</style>
