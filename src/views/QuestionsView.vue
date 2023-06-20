<template>
  <div id="contents">
    <MyNoteAddAlert v-if="isViewAlert" @end-alert="isViewAlert = false" />
    <div class="pa-4">
      <ContentTitle>
        <template v-slot:jp-title>おすすめ質問TOP10</template>
        <template v-slot:title>>Questions</template>
        <template v-slot:info>
          OCは学生や教員に直接質問ができる貴重な機会です。下記に「おすすめ質問TOP10」と「よくある質問とその回答」を抜粋して掲載しました。よろしければ参考にしてください。
        </template>
      </ContentTitle>
      <div class="pt-6">
        <!-- おすすめ質問 -->
        <div class="mb-8">
          <h3 class="mb-4" style="font-size: 1.1em">おすすめ質問TOP10</h3>
          <div v-for="(value, key) in allRecommendQuestionsData">
            <QuestionAccordion
              :questionValue="value"
              :questionKey="key"
              @start-alert="isViewAlert = true"
            />
          </div>
        </div>
      </div>
      <div class="pt-6">
        <!-- おすすめ質問 -->
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
      </div>
    </div>
    <MyNoteIcon />
  </div>
</template>

<script>
import ContentTitle from "../components/ContentTitle.vue";
import QuestionAccordion from "../components/QuestionAccordion.vue";
import MyNoteIcon from "../components/MyNoteIcon.vue";
import MyNoteAddAlert from "../components/MyNoteAddAlert.vue";

export default {
  name: "QuestionsView",
  components: {
    ContentTitle,
    QuestionAccordion,
    MyNoteIcon,
    MyNoteAddAlert,
  },
  data() {
    return {
      isViewAlert: false,
      allRecommendQuestionsData: {},
      allFAQData: {},
    };
  },
  methods: {},
  mounted() {
    this.allRecommendQuestionsData =
      this.$store.getters["questionsStore/getAllRecommendQuestionsData"];
    this.allFAQData = this.$store.getters["questionsStore/getAllFAQData"];
    console.log(this.allRecommendQuestionsData);
    console.log(this.allFAQData);
  },
};
</script>

<style scoped>
p {
  color: var(--black);
}
</style>
