<template>
  <div id="contents">
    <div class="py-4">
      <!-- ページタイトル -->
      <ContentTitle class="px-4 pb-6">
        <template v-slot:jp-title>学科紹介</template>
        <template v-slot:title>>Department</template>
        <template v-slot:info>
          未来科学部情報メディア学科（通称<b>FI</b>科：School of Science and
          Technology for <b>Future</b> Life, Department of
          <b>Information</b> Systems and Multimedia
          Design）では、ITサービスを研究・開発するために必要とされるコンピュータサイエンスと、多様性の時代に求められる創造力、表現力、感性を養うデジタルメディア技術について学ぶことができます。
        </template>
      </ContentTitle>
      <!-- end ページタイトル -->
      <section>
        <a href="/#timeline">
          <img
            class="mb-8 banner-mobile"
            src="/src/assets/school-information-session-banner-mobile.svg"
          />
          <img
            class="mb-8 banner-tablet"
            src="/src/assets/school-information-session-banner-tablet.svg"
          />
        </a>

        <div class="department-video py-8">
          <div class="v-container">
            <h2 class="pb-6">カリキュラム紹介動画</h2>
            <p>
              情報メディア学科のカリキュラムの特色と卒業後の進路に関して、井ノ上
              寛人助教から受験生へのメッセージを聞くことができます（この動画は、現在、電大YouTubeキャンパスに公開されていません）。
            </p>
            <iframe
              width="100%"
              height="auto"
              src="https://www.youtube-nocookie.com/embed/r2HoMUIYbKc"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
              class="pt-6"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
    <FixedIcons />
  </div>
</template>

<script>
import FixedIcons from "../components/templates/FixedIcons.vue";
import ContentTitle from "../components/ContentTitle.vue";
export default {
  name: "DepartmentView",
  components: {
    ContentTitle,
    FixedIcons,
  },
  mounted() {
    this.$store.commit("updateIsClearedMission1");
  },
};
</script>

<style scoped>
.department-video {
  position: relative;
}
.banner-mobile {
  display: none;
}
.banner-tablet {
  display: block;
  width: 100%;
}
@media only screen and (max-width: 600px) {
  .banner-mobile {
    display: block;
    width: 100%;
  }
  .banner-tablet {
    display: none;
    width: 100%;
  }
}
</style>
