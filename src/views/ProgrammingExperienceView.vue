<template>
  <div id="contents">
    <div class="pa-4">
      <ContentTitle>
        <template v-slot:jp-title>プログラミング体験</template>
        <template v-slot:title>>Programming</template>
        <template v-slot:info>
          情報メディア学科1年次の「コンピュータプログラミングI/Ⅱ」の授業で勉強する、Processingというプログラミング言語を使って、実際にプログラミングを体験することができます。全くプログラミング経験がない人も楽しめる問題になっているので、ぜひ入学後のイメージ固めにお役立てください。
        </template>
      </ContentTitle>
      <Button class="my-5" defaultBorder>Processing基本知識</Button>

      <div class="question-button my-2">
        <router-link to="/question1"></router-link>
        <div class="text-area">
          <p class="hack" style="font-size: 1.5em; line-height: 1em">Q1</p>
          <p class="hack" style="line-height: 1em; padding: 0.3em 0 0 1.5em">
            CreateFourCircles
          </p>
        </div>
        <div class="nextpage-button">
          <img src="../assets/pulldown-button-white.svg" />
        </div>
      </div>
      <div class="question-button my-2">
        <router-link to="/question2"></router-link>
        <div class="text-area">
          <p class="hack" style="font-size: 1.5em; line-height: 1em">Q2</p>
          <p class="hack" style="line-height: 1em; padding: 0.3em 0 0 1.5em">
            FalldownBall
          </p>
        </div>
        <div class="nextpage-button">
          <img src="../assets/pulldown-button-white.svg" />
        </div>
      </div>
      <div class="question-button my-2">
        <router-link to="/question3"></router-link>
        <div class="text-area">
          <p class="hack" style="font-size: 1.5em; line-height: 1em">Q3</p>
          <p class="hack" style="line-height: 1em; padding: 0.3em 0 0 1.5em">
            ReturnBall
          </p>
        </div>
        <div class="nextpage-button">
          <img src="../assets/pulldown-button-white.svg" />
        </div>
      </div>
      <div class="question-button my-2">
        <router-link to="/question4"></router-link>
        <div class="text-area">
          <p class="hack" style="font-size: 1.5em; line-height: 1em">Q4</p>
          <p class="hack" style="line-height: 1em; padding: 0.3em 0 0 1.5em">
            BouncingBall
          </p>
        </div>
        <div class="nextpage-button">
          <img src="../assets/pulldown-button-white.svg" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ContentTitle from "../components/ContentTitle.vue";
import Button from "../components/parts/Button.vue";
export default {
  name: "ProgrammingExperenceView",
  components: {
    ContentTitle,
    Button,
  },
};
</script>

<style scoped>
p {
  font-weight: var(--bold);
  color: var(--white);
}
.question-button {
  position: relative;
  min-height: 1em;
  padding: 1em;
  background-color: var(--pink);
  display: flex;
  align-items: center;
  border-radius: 0.2em;
}
.question-button a {
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.text-area {
  display: flex;
  align-items: flex-start;
  flex-grow: 1;
  overflow: hidden;
  border-radius: 0.3em;
}

.nextpage-button {
  transform: rotate(-90deg);
}
</style>
