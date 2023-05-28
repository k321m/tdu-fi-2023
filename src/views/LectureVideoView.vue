<template>
  <!-- <v-dialog v-model="isViewDialogVisible">
    <LabViewDialog
      :labData="clickedLabData"
      :labKey="clickedLabKey"
      @close-dialog="isViewDialogVisible = false"
    />
  </v-dialog> -->

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
      <!-- 研究室一覧 -->
      <section class="pt-6">
        <p class="zen-kaku-bold pb-4">
          講義動画一覧<span class="pl-3"
            >{{ Object.keys(allLabsData).length }}件</span
          >
        </p>
        <!-- <div>FilteredTags: {{ filteredTags }}</div> -->

        <!-- 研究室カード -->
        <div v-for="(data, key) in allLabsData" :key="key">
          <div id="card" class="mb-2 align-end" :key="key">
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

        <!-- <div id="card" class="mb-2 align-end" :key="key">
          <div class="v-responsive__sizer" style="padding-bottom: 75%"></div>
          <div class="card-img"></div>
          <div
            class="card-img"
            style="background-color: rgba(36, 7, 77, 0.5)"
          ></div>
          <p
            class="card-title zen-kaku-bold text-white v-responsive__sizer v-responsive__content"
          >
            あいあい
          </p>
        </div> -->
      </section>
      <!-- end 研究室一覧 -->
    </div>
    <!-- <MyNoteIcon /> -->
  </div>
</template>

<script>
import LabViewDialog from "../components/LabViewDialog.vue";
import MyNoteIcon from "../components/MyNoteIcon.vue";
import ContentTitle from "../components/ContentTitle.vue";
export default {
  name: "LectureVideo",
  data() {
    return {
      allLabsData: {}, //全研究室のデータ辞書
      isViewDialogVisible: false, //研究室詳細モーダルの可視状態
      clickedLabData: Array, //選択された研究室のデータ
      clickedLabKey: String, //選択された研究室のデータのkey
    };
  },
  components: {
    LabViewDialog,
    ContentTitle,
    MyNoteIcon,
  },

  // 選択中の条件　→ 辞書を使って表示する研究室を決める
  methods: {
    openViewDialog(key) {
      this.isViewDialogVisible = true;
      this.clickedLabData = this.allLabsData[key];
      this.clickedLabKey = key;
    },
  },
  mounted() {
    // jsonから全研究室のデータを取得して変数に格納
    this.allLabsData = this.$store.getters["lectureStore/getAllLecturesData"];
    // console.log(this.allLabsData);
  },
};
</script>

<style scoped>
#card {
  z-index: 0;
  height: 12.5em;
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
  /* background-image: url(/src/assets/labs/情報セキュリティ.svg); */
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
