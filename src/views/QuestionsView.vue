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
          <QuestionAccordion />
          <QuestionAccordion />
          <QuestionAccordion />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ContentTitle from "../components/ContentTitle.vue";
import QuestionAccordion from "../components/QuestionAccordion.vue";
export default {
  name: "QuestionsView",
  components: {
    ContentTitle,
    QuestionAccordion,
  },
  data() {
    return {
      isOpen: false,
    };
  },
  methods: {},
  mounted() {},
};
</script>

<style scoped>
p {
  color: #010326;
}
</style>
