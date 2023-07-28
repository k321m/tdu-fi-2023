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
            class="banner-mobile"
            src="/src/assets/school-information-session-banner-mobile.svg"
          />
          <img
            class="banner-tablet"
            src="/src/assets/school-information-session-banner-tablet.svg"
          />
        </a>

        <div class="department-video py-8 my-8">
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
              class="pt-6 mb-3"
            ></iframe>
            <a
              style="font-size: 0.8em"
              href="https://www.im.dendai.ac.jp/curriculum/"
              >▶︎ カリキュラムの特色（情報メディア学科公式サイト）</a
            >
          </div>
        </div>
        <div class="department-data py-8">
          <div class="v-container">
            <h2 class="pb-7">学科データ</h2>
            <v-row no-gutters style="width: 100%">
              <!-- 入学者定員 -->
              <v-col
                cols="6"
                sm="4"
                class="pb-5"
                style="
                  display: flex;
                  flex-direction: column;
                  align-items: center;
                "
              >
                <v-icon class="dark">mdi-account-group</v-icon>
                <h3 class="pb-3 dark"><b>入学者定員</b></h3>
                <p>
                  <span
                    class="hack"
                    style="font-size: 3.2rem; padding: 0 0.4rem 0 0.8rem"
                    >110</span
                  >名
                </p>
              </v-col>
              <!-- 卒業者数 -->
              <v-col
                cols="6"
                sm="4"
                style="
                  display: flex;
                  flex-direction: column;
                  align-items: center;
                "
                class="pb-5"
              >
                <v-icon class="dark">mdi-school</v-icon>
                <h3 class="pb-3 dark"><b>卒業者数</b></h3>
                <p>
                  <span
                    class="hack"
                    style="font-size: 3.2rem; padding: 0 0.4rem 0 0.8rem"
                    >116</span
                  >名
                </p>
              </v-col>
              <v-col
                cols="6"
                sm="4"
                style="
                  display: flex;
                  flex-direction: column;
                  align-items: center;
                "
                class="pb-5"
              >
                <v-icon class="dark">mdi-account-group</v-icon>
                <h3 class="pb-3 dark"><b>進学者数</b></h3>
                <p>
                  <span
                    class="hack"
                    style="font-size: 3.2rem; padding: 0 0.4rem 0 0.8rem"
                    >38</span
                  >名<span class="hack">(32.8%) </span>
                </p>
              </v-col>
              <v-col
                cols="6"
                sm="4"
                style="
                  display: flex;
                  flex-direction: column;
                  align-items: center;
                "
                class="pb-5"
              >
                <v-icon class="dark">mdi-domain</v-icon>
                <h3 class="pb-3 dark"><b>就職内定率</b></h3>
                <p>
                  <span
                    class="hack"
                    style="font-size: 3.2rem; padding: 0 0.4rem 0 0.8rem"
                    >98.7</span
                  >%
                </p>
              </v-col>
            </v-row>
            <a
              style="font-size: 0.8em; display: inline-block"
              href="https://www.dendai.ac.jp/about/admission/undergraduate/shiken-nittei.html"
            >
              ▶︎ 入試種別・募集人員一覧（東京電機大学公式サイト）
            </a>
            <a
              style="font-size: 0.8em; display: inline-block"
              href="https://www.im.dendai.ac.jp/qualif/#career"
            >
              ▶︎ 就職先（情報メディア学科公式サイト）
            </a>
            <a
              style="font-size: 0.8em; display: inline-block"
              href="https://www.im.dendai.ac.jp/qualif/#career"
            >
              ▶︎ 就職実績（東京電機大学公式サイト）
            </a>
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
.department-video,
.department-data {
  position: relative;
}
.department-data {
  text-align: end;
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
