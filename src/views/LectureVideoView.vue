<template>
  <LectureVideoViewDialog
    :view="isDialogVisible"
    @update:view="isDialogVisible = $event"
    @close-dialog="isDialogVisible = false"
    :lectureData="clickedLectureData"
  ></LectureVideoViewDialog>
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
        <h3 class="pb-4">
          講義動画一覧<span class="pl-3"
            >{{ Object.keys(allLecturesData).length }}件</span
          >
        </h3>
        <v-row no-gutters style="width: 100%">
          <!-- 講義動画カード -->
          <v-col
            v-for="(data, key) in allLecturesData"
            :key="key"
            cols="12"
            sm="6"
            lg="4"
            xl="3"
          >
            <Card
              :key="key"
              @click="openViewDialog(key)"
              :img="data.img"
              :id="key"
            >
              <template v-slot:title>
                {{ data.cardTitle }}
              </template>
            </Card>
          </v-col>
        </v-row>
        <!-- end 講義動画カード -->
      </section>
      <!-- end 講義動画一覧 -->
    </div>
    <FixedIcons />
  </div>
</template>

<script>
import LectureVideoViewDialog from "../components/templates/LectureVideoViewDialog.vue";
import FixedIcons from "../components/templates/FixedIcons.vue";
import ContentTitle from "../components/ContentTitle.vue";
import Card from "../components/parts/Card.vue";
export default {
  name: "LectureVideo",
  data() {
    return {
      allLecturesData: {}, //全講義動画のデータ辞書
      isDialogVisible: false, //講義動画詳細モーダルの可視状態
      clickedLectureData: Array, //選択された講義動画のデータ
      clickedLectureKey: String, //選択された講義動画のデータのkey
    };
  },
  components: {
    LectureVideoViewDialog,
    ContentTitle,
    FixedIcons,
    Card,
  },
  methods: {
    openViewDialog(key) {
      this.isDialogVisible = true;
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
