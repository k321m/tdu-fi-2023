<template>
  <v-dialog v-model="isViewDialogVisible">
    <LectureVideoViewDialog
      :lectureData="clickedLectureData"
      @close-dialog="isViewDialogVisible = false"
    />
  </v-dialog>

  <div id="contents">
    <div class="pa-4">
      <!-- ページタイトル -->
      <ContentTitle>
        <template v-slot:jp-title>講義動画</template>
        <template v-slot:title>>Lecture</template>
        <template v-slot:info>
          情報メディア学科で実際に行われたオンライン講義を約10~15分ほどにまとめた動画です。気になる講義の体験はもちろん、オンライン／ハイブリッド講義の感覚を掴むことができます。情報メディア学科で受講できるその他の講義は、配布パンプレットまたは展示ポスターをご覧ください。
        </template>
      </ContentTitle>
      <!-- end ページタイトル -->
      <!-- 講義動画一覧 -->
      <section class="pt-6">
        <p class="zen-kaku-bold pb-4">
          講義動画一覧<span class="pl-3"
            >{{ Object.keys(allLecturesData).length }}件</span
          >
        </p>
        <!-- 講義動画カード -->
        <div v-for="(data, key) in allLecturesData" :key="key">
          <div
            id="card"
            class="mb-2 align-end"
            :key="key"
            @click="openViewDialog(key)"
          >
            <div class="v-responsive__sizer" style="padding-bottom: 75%"></div>
            <div class="card-img" :style="data.img"></div>
            <div
              class="card-img"
              style="background-color: rgba(36, 7, 77, 0.5)"
            ></div>
            <p
              class="card-title zen-kaku-bold text-white v-responsive__sizer v-responsive__content"
            >
              {{ data.cardTitle }}
            </p>
          </div>
        </div>
        <!-- end 講義動画カード -->
      </section>
      <!-- end 講義動画一覧 -->
    </div>
    <MyNoteIcon />
  </div>
</template>

<script>
import LectureVideoViewDialog from "../components/LectureVideoViewDialog.vue";
import MyNoteIcon from "../components/MyNoteIcon.vue";
import ContentTitle from "../components/ContentTitle.vue";
export default {
  name: "LectureVideo",
  data() {
    return {
      allLecturesData: {}, //全講義動画のデータ辞書
      isViewDialogVisible: false, //講義動画詳細モーダルの可視状態
      clickedLectureData: Array, //選択された講義動画のデータ
      clickedLectureKey: String, //選択された講義動画のデータのkey
    };
  },
  components: {
    LectureVideoViewDialog,
    ContentTitle,
    MyNoteIcon,
  },
  methods: {
    openViewDialog(key) {
      this.isViewDialogVisible = true;
      this.clickedLectureData = this.allLecturesData[key];
      this.clickedLectureKey = key;
    },
  },
  mounted() {
    // jsonから全講義動画のデータを取得して変数に格納
    this.allLecturesData =
      this.$store.getters["lectureStore/getAllLecturesData"];
    // console.log(this.allLecturesData);
  },
};
</script>

<style scoped>
#card {
  z-index: 0;
  height: 14em;
  display: flex;
  max-height: 100%;
  max-width: 100%;
  overflow: hidden;
  position: relative;
  box-shadow: 0px 2px 1px -1px var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, 0.2)),
    0px 1px 1px 0px var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, 0.14)),
    0px 1px 3px 0px var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, 0.12));
  border-radius: 0.2rem;
}
#card .card-img {
  z-index: -1;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
}
.card-title {
  display: block;
  font-size: 1.2rem;
  letter-spacing: 0rem;
  min-width: 0;
  padding: 0.8rem 1rem;
  text-align: right;
  white-space: pre-wrap;
}
</style>
