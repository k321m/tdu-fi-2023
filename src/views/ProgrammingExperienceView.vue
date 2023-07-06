<template>
  <div id="contents">
    <div class="pa-4">
      <ContentTitle>
        <template v-slot:jp-title>プログラミング体験</template>
        <template v-slot:title>>Programming</template>
        <template v-slot:info>
          プログラミングを実際に体験してみよう！
        </template>
      </ContentTitle>
      <!-- <p5test></p5test> -->
      <FallingBall></FallingBall>
    </div>
  </div>
</template>

<script>
import ContentTitle from "../components/ContentTitle.vue";
import p5test from "../components/p5test.vue";
import FallingBall from "../components/FallingBall.vue";
export default {
  name: "ProgrammingExperenceView",
  components: {
    ContentTitle,
    p5test,
    FallingBall,
  },
};
</script>
