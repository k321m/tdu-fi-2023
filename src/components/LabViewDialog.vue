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
      <p class="zen-kaku-bold" style="color: #e345e6" v-if="labData.display">
        展示あり
      </p>
      <p class="zen-kaku-bold" style="color: #360a73" v-else>展示なし</p>
    </div>
    <p class="zen-kaku-bold lab-title pb-2" style="color: #010326">
      {{ labData.title }}
    </p>
    <!-- 先生名と展示場所 -->
    <div class="pb-1" style="font-size: 0.9em">
      <p class="lab-professor-place zen-kaku-regular">
      <img src="../assets/icon-person.svg" class="pr-1" />
      <div class="flex-end">
        {{ labData.professor["name"] }}
        <span class="pl-1" style="font-size: 0.8em">{{ labData.professor["type"] }}</span>
      </div>
      </p>
      <p class="lab-professor-place zen-kaku-regular" v-if="labData.place != ''">
        <img src="../assets/icon-map.svg" class="pr-1" />
        {{ labData.place }}
      </p>
    </div>
    <!-- タグ -->
    <div class="pb-4">
      <p v-for="tag in labData.tags" class="tag-item zen-kaku-medium">{{tag}}</p>
    </div>
    <!-- スクロールエリア -->
    <div class="pb-4 scroll-contents" style="font-size: 0.9em">
      <!-- info -->
      <p class="pb-3 zen-kaku-regular">{{ labData.info }}</p>
      <!-- theme -->
      <div class="pb-3">
        <p class="zen-kaku-bold pb-1">論文テーマ例</p>
        <li class="zen-kaku-regular" v-for="theme in labData.theme">{{ theme }}</li>
      </div>
      <div class="pb-3">
        <p class="zen-kaku-bold pb-1">就職先例</p>
        <p class="zen-kaku-regular">{{ labData.placeOfEmployment.join("、") }}</p>
      </div>
    </div>
    <!-- ボタン -->
    <div class="footer mt-6">
    <div class="button-group pb-2">
      <ButtonDefault :title="'地図を確認'" :to="'/#map'"  />
      <!-- <button class="default-btn btn-animation zen-kaku-bold">地図を確認</button> -->
      <button class="myNote-btn btn-animation zen-kaku-bold" @click="myNoteBtnClicked">MyNoteに追加</button>
    </div>
      <a v-for="linkData in labData.links" class="link zen-kaku-regular" style="font-size: 0.8em;display: block;margin-bottom: 0.2em;" :href="linkData['url']">{{ linkData['name'] }}</a>
  </div>
  </div>
  
  
  
</template>

<script>
import MyNoteAddAlert from "./MyNoteAddAlert.vue";
import ButtonDefault from "./ButtonDefault.vue";
export default {
  name: "LabViewDialog",
  props: ["labData", "labKey"],
  emits: ["close-dialog"],
  data() {
    return {
      isViewAlert: false,
      type: "events",
    };
  },
  components: {
    MyNoteAddAlert,
    ButtonDefault
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
  font-size: 1.6em;
  text-align: start;
}
/* アイコンと要素を上下中央揃えかつinline-blockで改行 */
.lab-professor-place {
  display: inline-flex;
  align-items: center;
  color: #010326;
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
  color: #360a73;
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
  font-size:0.8em;
  width: 49%;
}

a{
  text-decoration:none;
}
.link{
  color: #010326;
  word-break: break-all;
}
</style>
