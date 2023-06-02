<template>
  <div id="contents">
    <div class="pa-4">
      <ContentTitle>
        <template v-slot:jp-title>具体的な質問例</template>
        <template v-slot:title>>Questions</template>
        <template v-slot:info
          >説明説明説明説明説明説明説明説明説説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説説明
        </template>
      </ContentTitle>
      <div class="pt-6">
        <!-- おすすめ質問 -->
        <div class="mb-8">
          <p class="zen-kaku-bold mb-4" style="font-size: 1.1em">
            おすすめ質問
          </p>
          <div v-for="(value, key) in allRecommendQuestionsData">
            <QuestionAccordion :questionValue="value" :questionKey="key" />
          </div>
        </div>
      </div>
      <div class="pt-6">
        <!-- おすすめ質問 -->
        <div class="mb-8">
          <p class="zen-kaku-bold mb-4" style="font-size: 1.1em">FAQ</p>
          <div v-for="(value, key) in allFAQData">
            <QuestionAccordion :questionValue="value" :questionKey="key" />
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

export default {
  name: "QuestionsView",
  components: {
    ContentTitle,
    QuestionAccordion,
    MyNoteIcon,
  },
  data() {
    return {
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
  color: #010326;
}
</style>
