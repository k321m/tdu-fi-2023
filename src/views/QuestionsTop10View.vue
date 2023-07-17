<template>
  <div id="contents">
    <Alert v-if="isViewAlert" @end-alert="isViewAlert = false">
      質問リストに追加しました
    </Alert>
    <div class="pa-4">
      <ContentTitle>
        <template v-slot:jp-title>おすすめ質問TOP10</template>
        <template v-slot:title>>QuestionsTOP10</template>
        <template v-slot:info>
          OCは学生や教員に直接質問ができる貴重な機会です。下記に「おすすめ質問TOP10」を抜粋して掲載しました。是非こちらを参考に在学生と会話してみてください。
        </template>
      </ContentTitle>
      <div class="pt-6">
        <!-- おすすめ質問 -->
        <div class="mb-8">
          <!-- <h3 class="mb-4" style="font-size: 1.1em">おすすめ質問TOP10</h3> -->
          <div v-for="(value, key) in allRecommendQuestionsData">
            <QuestionAccordion
              :questionValue="value"
              :questionKey="key"
              @start-alert="isViewAlert = true"
            />
          </div>
        </div>
      </div>
      <!-- <div class="pt-6">
        <div class="mb-8">
          <h3 class="mb-4" style="font-size: 1.1em">
            FAQ：よくある質問とその回答
          </h3>
          <div v-for="(value, key) in allFAQData">
            <QuestionAccordion
              :questionValue="value"
              :questionKey="key"
              @start-alert="isViewAlert = true"
            />
          </div>
        </div>
      </div> -->
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
  name: "QuestionsView",
  components: {
    ContentTitle,
    QuestionAccordion,
    FixedIcons,
    Alert,
  },
  data() {
    return {
      isViewAlert: false,
      allRecommendQuestionsData: {},
      // allFAQData: {},
    };
  },
  methods: {},
  mounted() {
    this.allRecommendQuestionsData =
      this.$store.getters["questionsStore/getAllRecommendQuestionsData"];
    // this.allFAQData = this.$store.getters["questionsStore/getAllFAQData"];
  },
};
</script>

<style scoped>
p {
  color: var(--black);
}
</style>
