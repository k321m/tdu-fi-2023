<template>
  <div id="contents">
    <div class="pa-4">
      <ContentTitle>
        <template v-slot:jp-title>マイノート</template>
        <template v-slot:title>>MyNote</template>
        <template v-slot:info
          >説明説明説明説明説明説明説明説明説説明説明説明説
          明説明説明説明説明説明説明説明説明説明説明説明説
          明説明説明説明説明説明説明説明説明説明説明説説明
        </template>
      </ContentTitle>
      <div class="pt-6">
        <p class="zen-kaku-bold">訪問リスト</p>
        <!-- <div>
          <v-expansion-panels>
            <v-expansion-panel
              class="my-1"
              v-for="data in myNoteData"
              :key="data"
            >
              <v-expansion-panel-title>
                {{ data.title }}
              </v-expansion-panel-title>
              <v-expansion-panel-text>
                <div>
                  <p>
                    {{ data.event }}
                  </p>
                  <p>
                    <span>{{ data.place }}</span>
                  </p>
                  <v-btn>地図を確認</v-btn>
                  <v-btn>リストから削除</v-btn>
                </div>
              </v-expansion-panel-text>
            </v-expansion-panel>
          </v-expansion-panels>
        </div> -->
        <div v-for="data in myNoteData" :key="data">
          <MyNoteAcordion :id="data.id">
            <template v-slot:title>{{ data.title }}</template>
            <template v-slot:event>{{ data.event }}</template>
            <template v-slot:place>{{ data.place }}</template>
          </MyNoteAcordion>
        </div>

        <div class="py-4">
          <p class="zen-kaku-regular">▶︎ タイムスケジュール</p>
          <p class="zen-kaku-regular">▶︎ 研究室公開</p>
        </div>
      </div>
      <div class="pt-6">
        <p class="zen-kaku-bold">質問リスト</p>
        <div>
          <v-expansion-panels>
            <v-expansion-panel
              class="my-1"
              v-for="i in this.myNoteData.length"
              :key="i"
              title="item"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            ></v-expansion-panel>
          </v-expansion-panels>
        </div>
      </div>
      <v-btn @click="$store.commit('removeMyNote')">MyNote削除</v-btn>
    </div>
  </div>
</template>

<script>
import ContentTitle from "../components/ContentTitle.vue";
import MyNoteAcordion from "../components/MyNoteAcordion.vue";
import "../js/particles/top-particle";
export default {
  name: "MyNote",
  components: {
    ContentTitle,
    MyNoteAcordion,
  },
  data() {
    return {
      myNoteData: [],
    };
  },
  mounted() {
    this.myNoteData = this.$store.getters.getMyNoteDataSet;
  },
};
</script>
