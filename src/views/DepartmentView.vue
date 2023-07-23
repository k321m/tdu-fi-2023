<template>
  <div id="contents">
    <div class="py-4">
      <!-- ページタイトル -->
      <ContentTitle class="px-4 pb-6">
        <template v-slot:jp-title>学科紹介</template>
        <template v-slot:title>>Department</template>
        <template v-slot:info>
          情報メディア学科では、ITサービスを研究・開発するために必要とされるコンピュータサイエンスと、多様性の時代に求められる創造力、表現力、感性を養うデジタルメディア技術について学ぶことができます。
        </template>
      </ContentTitle>
      <!-- end ページタイトル -->
      <section>
        <div class="department-video py-6">
          <div class="v-container">
            <h2 class="pb-3">カリキュラム紹介動画</h2>
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
              class="pt-4"
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
};
</script>

<style scoped>
.department-video {
  position: relative;
}
</style>
