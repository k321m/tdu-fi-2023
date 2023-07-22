<template>
  <div id="contents">
    <Alert v-if="isViewAlert" @end-alert="isViewAlert = false">
      質問リストに追加しました
    </Alert>
    <div class="pa-4">
      <ContentTitle>
        <template v-slot:jp-title>よくある質問</template>
        <template v-slot:title>>FAQ</template>
        <template v-slot:info>
          よくある質問とその回答を抜粋して掲載しました。よろしければ参考にしてください。
        </template>
      </ContentTitle>
      <div class="pt-6">
        <!-- おすすめ質問 -->
        <div class="mb-8">
          <div v-for="(value, key) in allFAQData">
            <QuestionAccordion
              :questionValue="value"
              :questionKey="key"
              @start-alert="isViewAlert = true"
            />
          </div>
        </div>
      </div>
    </div>
    <FixedIcons />
  </div>
</template>

<script>
import ContentTitle from "../components/ContentTitle.vue";
import QuestionAccordion from "../components/QuestionAccordion.vue";
import FixedIcons from "../components/templates/FixedIcons.vue";
import Alert from "../components/parts/Alert.vue";

export default {
  name: "FaqView",
  components: {
    ContentTitle,
    QuestionAccordion,
    FixedIcons,
    Alert,
  },
  data() {
    return {
      isViewAlert: false,
      // allRecommendQuestionsData: {},
      allFAQData: {},
    };
  },
  methods: {},
  mounted() {
    // this.allRecommendQuestionsData =
    // this.$store.getters["questionsStore/getAllRecommendQuestionsData"];
    this.allFAQData = this.$store.getters["questionsStore/getAllFAQData"];
  },
};
</script>

<style scoped>
p {
  color: var(--black);
}
</style>
