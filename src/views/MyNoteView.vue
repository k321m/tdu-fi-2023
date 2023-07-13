<template>
  <div id="contents">
    <v-dialog persistent v-model="isTutorialVisible">
      <MyNoteTutorial
        @close-tutorial="isTutorialVisible = false"
      ></MyNoteTutorial>
    </v-dialog>
    <div class="pa-4">
      <ContentTitle
        :isHelpVisible="true"
        :isAttentionVisible="true"
        @open-help="isTutorialVisible = true"
      >
        <template v-slot:jp-title>マイノート</template>
        <template v-slot:title>>MyNote</template>
        <template v-slot:info>
          MyNoteには、訪問したイベントや研究室、質問した項目や、それらに関するメモなどを保存・PDFとして出力することができます。本日得られた大切な情報は、MyNoteを活用して今後の大学選びや受験にお役立てください。
        </template>
      </ContentTitle>
      <div v-if="localStorageMessage != ''">
        <!-- localstorageチェック -->
        <p class="pink small">
          <b>{{ localStorageMessage }}</b>
        </p>
      </div>
      <!-- MyNote -->
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
  },
  data() {
    return {
      myNoteDetailData: {},
      isTutorialVisible: !this.$store.getters.getDoneMyNoteTutorial,
      isViewExportData: false,
      myNoteData: {},
      localStorageMessage: String,
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
    //タイトルをコンテンツに追加
    addTitleToContent(content, title) {
      content.push({
        text: title,
        fontSize: 20,
        bold: true,
        margin: [0, 16, 0, 8],
      });
      return content;
    },
    //項目とメモをコンテンツに追加
    addMemoToContent(content, data) {
      Object.entries(data).forEach(([key, value]) => {
        switch (key) {
          // なんでもメモの場合は.memoを追加
          case "memo":
            if (data.memo != "") {
              content.push({
                text: data.memo,
                fontSize: 12,
                marginBottom: 6,
              });
            } else {
              content.push({ text: "-", fontSize: 12, marginBottom: 6 });
            }
            break;
          default:
            // それ以外は項目名とメモを追加
            content.push({
              text: "・" + value.title,
              fontSize: 14,
              bold: true,
            });
            if (value.memo != "") {
              content.push({
                text: value.memo,
                fontSize: 12,
                margin: [12, 2, 0, 6],
              });
            } else {
              content.push({ text: "-", fontSize: 12, margin: [12, 2, 0, 6] });
            }
            break;
        }
      });
      return content;
    },
    downloadPDF() {
      pdfMake.fonts = {
        mplus: {
          normal: "MPLUS1-Regular.ttf",
          bold: "MPLUS1-Bold.ttf",
        },
      };
      this.myNoteData = this.$store.getters.getMyNote;
      let content = [];
      // イベントメモ
      this.addTitleToContent(content, "イベントメモ");
      this.addMemoToContent(content, this.myNoteData.events);
      // Q&Aメモ
      this.addTitleToContent(content, "Q&Aメモ");
      this.addMemoToContent(content, this.myNoteData.questions);
      // なんでもメモ
      this.addTitleToContent(content, "なんでもメモ");
      this.addMemoToContent(content, this.myNoteData.anything);
      var docDefinition = {
        pageSize: "A4",
        pageMargins: [10, 10, 10, 30], // PDF用紙マージン設定[左、上、右、下]
        content: [content],
        defaultStyle: {
          font: "mplus",
        },
      };
      this.isViewExportData = true;
      pdfMake.createPdf(docDefinition).open();
    },
    // localStorage利用可能チェック
    setLocalStorageMessage() {
      if (typeof localStorage !== "undefined") {
        try {
          localStorage.setItem("dummy", "1");
          if (localStorage.getItem("dummy") === "1") {
            localStorage.removeItem("dummy");
            this.localStorageMessage = "";
          } else {
            this.localStorageMessage =
              "※ご利用のブラウザにおいてlocalStorageが無効化されているため、MyNoteがご利用いただけません。詳しくは当サイトの「ご利用にあたって」またはブラウザのヘルプをご参照し、設定の変更を行ってください";
          }
        } catch (e) {
          this.localStorageMessage =
            "※ご利用のブラウザはlocalStorageの一部機能に未対応のため、MyNoteがご利用いただけません。推奨ブラウザについては当サイトの「ご利用にあたって」をご参照ください。";
        }
      } else {
        this.localStorageMessage =
          "※ご利用のブラウザはlocalStorage未対応のため、MyNoteがご利用いただけません。推奨ブラウザについては当サイトの「ご利用にあたって」をご参照ください。";
      }
    },
  },
  mounted() {
    this.myNoteDetailData = this.$store.getters.getMyNoteDetailData;
    // console.log(this.myNoteDetailData);
    this.setLocalStorageMessage();
    // console.log(this.localStorageMessage);
  },
};
</script>
