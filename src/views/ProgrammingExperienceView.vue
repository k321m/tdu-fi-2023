<template>
  <div id="contents">
    <div class="pa-4">
      <ContentTitle>
        <template v-slot:jp-title>プログラミング体験</template>
        <template v-slot:title>>Programming</template>
        <template v-slot:info>
          情報メディア学科1年次の「コンピュータプログラミングI/Ⅱ」の授業で勉強するProcessing（Java）でプログラミングを体験するコーナーを設けました。プログラミングが初めての人も楽しめる問題になっているので、ぜひ入学後のイメージ固めにお役立てください。
        </template>
      </ContentTitle>
      <Button class="my-5" to="/basics" defaultBorder
        >Processing基本知識</Button
      >
      <ProgrammingQuestionButton
        :questionButtonData="this.questionButtonData"
      />
    </div>
    <FixedIcons />
  </div>
</template>

<script>
import ContentTitle from "../components/ContentTitle.vue";
import Button from "../components/parts/Button.vue";
import ProgrammingQuestionButton from "../components/ProgrammingQuestionButton.vue";
import FixedIcons from "../components/templates/FixedIcons.vue";
export default {
  name: "ProgrammingExperenceView",
  components: {
    ContentTitle,
    Button,
    ProgrammingQuestionButton,
    FixedIcons,
  },
  data() {
    return {
      questionButtonData: {
        Q1: {
          questionNo: 1,
          name: "MakeCircle",
          backgroundColor: "background-color: var(--pink)",
          fireNum: 0,
          linkName: "question1",
        },
        Q2: {
          questionNo: 2,
          name: "MakeFourCircles",
          backgroundColor: "background-color: #ba37ca",
          fireNum: 1,
          linkName: "question2",
        },
        Q3: {
          questionNo: 3,
          name: "FalldownBall",
          backgroundColor: "background-color: #8f29ae",
          fireNum: 2,
          linkName: "question3",
        },
        Q4: {
          questionNo: 4,
          name: "ReboundBall",
          backgroundColor: "background-color: #661b93",
          fireNum: 3,
          linkName: "question4",
        },
        Q5: {
          questionNo: 5,
          name: "BouncingBall",
          backgroundColor: "background-color: var(--purple)",
          fireNum: 4,
          linkName: "question5",
        },
      },
    };
  },
};
</script>

<style scoped></style>
