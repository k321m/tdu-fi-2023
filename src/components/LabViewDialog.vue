<template>
  <MyNoteAddAlert v-if="isViewAlert" @end-alert="isViewAlert = false" />
  <div class="background-dialog pa-5">
    <!-- ×ボタン -->
    <div style="display: flex" @click="$emit('close-dialog')">
      <div style="margin: 0 0 0 auto">
        <v-icon>mdi-close</v-icon>
      </div>
    </div>
    <!-- 展示情報 -->
    <div class="pb-2">
      <h4 class="pink" v-if="labData.display">
        展示あり
      </h4>
      <h4 class="purple" v-else>展示なし</h4>
    </div>
    <h2 class="lab-title pb-2">
      {{ labData.title }}
    </h2>
    <!-- 先生名と展示場所 -->
    <div class="pb-1" style="font-size: 0.9em">
      <p class="lab-professor-place">
      <img src="../assets/icon-person.svg" class="pr-1" />
      <div class="flex-end">
        {{ labData.professor["name"] }}
        <span class="pl-1 small">{{ labData.professor["type"] }}</span>
      </div>
      </p>
      <p class="lab-professor-place" v-if="labData.place != ''">
        <img src="../assets/icon-map.svg" class="pr-1" />
        {{ labData.place }}
      </p>
    </div>
    <!-- タグ -->
    <div class="pb-4">
      <p v-for="tag in labData.tags" class="tag-item sub-strong">{{tag}}</p>
    </div>
    <!-- スクロールエリア -->
    <div class="pb-4 scroll-contents" style="font-size: 0.9em">
      <!-- info -->
      <p class="pb-3">{{ labData.info }}</p>
      <!-- theme -->
      <div class="pb-3">
        <h4 class="pb-1">論文テーマ例</h4>
        <li v-for="theme in labData.theme">{{ theme }}</li>
      </div>
      <div class="pb-3">
        <h4 class="pb-1">就職先例</h4>
        <p>{{ labData.placeOfEmployment.join("、") }}</p>
      </div>
    </div>
    <!-- ボタン -->
    <div class="footer mt-6">
    <div class="button-group pb-2" v-if="labData.display">
      <Button @click="openMapDialog">地図を確認</Button>
      <Button myNote @click="myNoteBtnClicked">MyNoteに追加</Button>
    </div>
      <a v-for="linkData in labData.links" class="" style="font-size: 0.8em;display: block;margin-bottom: 0.2em;" :href="linkData['url']">{{ linkData['name'] }}</a>
  </div>
  </div>
</template>

<script>
import Button from "./parts/Button.vue";
import MyNoteAddAlert from "./MyNoteAddAlert.vue";
export default {
  name: "LabViewDialog",
  props: ["labData", "labKey"],
  emits: ["close-dialog","open-map-dialog"],
  data() {
    return {
      isViewAlert: false,
      type: "events",
    };
  },
  components: {
    MyNoteAddAlert,
    Button
  },
  methods: {
    myNoteBtnClicked() {
      this.isViewAlert = true;
      this.$store.commit("addMyNote", {
        type: this.type,
        key: this.labKey,
        time: "終日開催",
        title:this.labData.title,
      });
    },
    openMapDialog(){
      console.log(this.labData.mapKey);
      this.$emit('open-map-dialog',this.labData.mapKey);
    }
  },
};
</script>

<style scoped>
.background-dialog {
  display: flex;
  flex-direction: column;
  min-height: 88dvh;
  max-height: 90dvh;
  background-color: white;
  border-radius: 0.8rem;
  padding-bottom: 10rem;
}
.lab-title {
  text-align: start;
}
/* アイコンと要素を上下中央揃えかつinline-blockで改行 */
.lab-professor-place {
  display: inline-flex;
  align-items: center;
  margin-right: 0.8rem;
}
/* 名前と役職で下揃え */
.flex-end {
  display: inline-flex;
  align-items: flex-end;
}
.tag-item {
  display: inline-block;
  font-size: 0.4rem;
  color: var(--purple);
  background-color: #ECEBFF;
  padding: 0.35rem 0.8rem;
  border-radius: 100vh;
  margin-right: 0.2rem;
  margin-bottom: 0.3rem;
}
.scroll-contents{
  flex-grow: 1;
  overflow-y: scroll;
}

.footer{
  width: 100%;
}

.button-group{
  display: flex;
  justify-content: space-between
}
.button-group > * {
  width: 49%;
}
</style>
