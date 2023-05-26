<template>
  <div class="background-dialog px-5 pt-5">
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
      {{ labData.mordalTitle }}
    </p>
    <!-- 先生名と展示場所 -->
    <div class="pb-1" style="font-size: 0.9em">
      <p class="lab-professor-place">
      <img src="../assets/icon-person.svg" class="pr-1" />
      <div class="flex-end">
        {{ labData.professor["name"] }}
        <span class="pl-1" style="font-size: 0.8em">{{ labData.professor["type"] }}</span>
      </div>
      </p>
      <p class="lab-professor-place">
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
      <p class="pb-3">{{ labData.info }}</p>
      <!-- theme -->
      <div class="pb-3">
        <p class="zen-kaku-bold pb-1">論文テーマ例</p>
        <li v-for="theme in labData.theme">{{ theme }}</li>
      </div>
      <div class="pb-3">
        <p class="zen-kaku-bold pb-1">就職先例</p>
        <p>{{ labData.placeOfEmployment.join("、") }}</p>
      </div>
    </div>
  </div>
  <!-- ボタン -->
  <div class="footer px-5">
    <div class="button-group pb-2">
      <button class="default-btn btn-animation zen-kaku-bold">地図を確認</button>
      <button class="myNote-btn btn-animation zen-kaku-bold">MyNoteに追加</button>
    </div>
    <div v-for="linkData in labData.links" class="links">
      <a style="font-size: 0.8em;" :href="linkData['url']">{{ linkData['name'] }}</a>
    </div>
  </div>
  
  
</template>

<script>
export default {
  name: "LabViewDialog",
  props: ["labData", "labKey"],
  emits: ["close-dialog"],
  data() {
    return {
      type: "events",
    };
  },
  methods: {
    myNoteBtnClicked() {
      this.$store.commit("addMyNote", {
        type: this.type,
        key: this.eventKey,
        time: "終日開催",
      });
    },
  },
};
</script>

<style scoped>
.background-dialog {
  display: flex;
  flex-direction: column;
  height: 90vh;
  max-height: 688px;
  background-color: white;
  border-radius: 10px;
  padding-bottom: 10rem;
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
  position: absolute;
  bottom: 0px;
  width: 100%;
  padding-bottom: 2rem;
}

.button-group{
  display: flex;
  justify-content: space-between
}
.button-group > button {
  font-size:0.8em;
  width: 49%;
}

a{
  text-decoration:none;
  color: #010326;
}
</style>
