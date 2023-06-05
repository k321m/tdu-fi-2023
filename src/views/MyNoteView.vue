<template>
  <div id="contents">
    <v-dialog persistent v-model="isTutorialVisible">
      <MyNoteTutorial
        @close-tutorial="isTutorialVisible = false"
      ></MyNoteTutorial>
    </v-dialog>
    <div class="pa-4">
      <ContentTitle :isHelpVisible="true" @open-help="isTutorialVisible = true">
        <template v-slot:jp-title>マイノート</template>
        <template v-slot:title>>MyNote</template>
        <template v-slot:info
          >説明説明説明説明説明説明説明説明説説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説説明
        </template>
      </ContentTitle>
      <div class="pt-6">
        <MyNoteVisitList :eventDetailData="changedMyNoteDetailData.events" />
      </div>
      <div class="pt-6">
        <MyNoteQuestionList
          :questionDetailData="changedMyNoteDetailData.questions"
        />
      </div>
      <div class="pt-2">
        <MyNoteAnythingMemo ref="anyMemoRef" />
      </div>
      <div class="pt-10">
        <MyNoteDownloadButton @click="downloadPDF" />
        <MyNoteAllDeleteButton @delete-data="$refs.anyMemoRef.clearMemo()" />
      </div>
    </div>
    <MyNoteExportView
      :eventsData="myNoteData.events"
      :quesData="myNoteData.questions"
      :anyData="myNoteData.anything"
      v-if="isViewExportData"
    />
  </div>
</template>

<script>
import ContentTitle from "../components/ContentTitle.vue";
import MyNoteVisitList from "../components/MyNoteVisitList.vue";
import MyNoteQuestionList from "../components/MyNoteQuestionList.vue";
import MyNoteAnythingMemo from "../components/MyNoteAnythingMemo.vue";
import MyNoteAllDeleteButton from "../components/MyNoteAllDeleteButton.vue";
import MyNoteDownloadButton from "../components/MyNoteDownloadButton.vue";
import MyNoteTutorial from "../components/MyNoteTutorial.vue";
import MyNoteExportView from "../components/MyNoteExportView.vue";
import pdfMake from "pdfmake/build/pdfmake.js";
import pdfFonts from "pdfmake/build/vfs_fonts.js";
import htmlToPdfmake from "html-to-pdfmake";
export default {
  name: "MyNote",
  components: {
    ContentTitle,
    MyNoteVisitList,
    MyNoteQuestionList,
    MyNoteAnythingMemo,
    MyNoteDownloadButton,
    MyNoteAllDeleteButton,
    MyNoteTutorial,
    MyNoteExportView,
  },
  data() {
    return {
      myNoteDetailData: {},
      isTutorialVisible: !this.$store.getters.getDoneMyNoteTutorial,
      isViewExportData: false,
      myNoteData: {},
    };
  },
  computed: {
    // myNoteのデータが更新されると、表示するデータも変わる
    changedMyNoteDetailData() {
      let myNoteDetailData = {};
      myNoteDetailData = this.$store.getters.getMyNoteDetailData;
      return myNoteDetailData;
    },
  },
  methods: {
    downloadPDF() {
      pdfMake.vfs = pdfFonts.pdfMake.vfs;
      pdfMake.fonts = {
        mplus: {
          normal: "MPLUS1-Regular.ttf",
          bold: "MPLUS1-Bold.ttf",
        },
      };

      this.myNoteData = this.$store.getters.getMyNote;
      // const html = `<div>
      //   <h1 style="color: red;">日本語</h1>
      //   <table style="width: 100%; font-size: 10px">
      //     <tr>
      //       <th>お客様ID</th>
      //       <td>0000</td>
      //     </tr>
      //     <tr>
      //       <th>契約者名</th><td>テスト太郎</td>
      //     </tr>
      //     <tr>
      //       <th>契約者住所</th><td>大阪府大阪市２－２－３　本末ビル２F</td>
      //     </tr>
      //   </table>
      // </div>`;
      var docDefinition = {
        pageSize: "A4", // PDF用紙サイズ設定
        pageMargins: [10, 10, 10, 30], // PDF用紙マージン設定[左、上、右、下]
        content: [
          // ドキュメントのコンテンツを指定します
          // htmlToPdfmake(html),
          {
            text: "This paragraph will have a bigger font",
            fontSize: 15,
            bold: true,
          },
          {
            text: "This paragraph will have a bigger font",
            fontSize: 15,
          },
        ],
        defaultStyle: {
          font: "mplus",
        },
      };
      this.isViewExportData = true;
      pdfMake.createPdf(docDefinition).open();
      // pdfMake.createPdf(docDefinition, null, null, pdfFonts.pdfMake.vfs).open();
    },
  },
  mounted() {
    this.myNoteDetailData = this.$store.getters.getMyNoteDetailData;
    // console.log(this.myNoteDetailData);
  },
};
</script>
