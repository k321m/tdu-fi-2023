<template>
  <div id="contents">
    <div class="pa-4">
      <ContentTitle>
        <template v-slot:jp-title>研究室公開</template>
        <template v-slot:title>>Laboratory</template>
        <template v-slot:info
          >説明説明説明説明説明説明説明説明説説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説説明
        </template>
      </ContentTitle>
      <div class="pt-6">
        <p class="zen-kaku-bold pb-4">研究室一覧</p>
        <p class="filter_button zen-kaku-bold pb-2">
          <span class="mdi mdi-filter-menu pr-1"></span>
          絞り込む
          <span class="pl-2">13件</span>
        </p>
        <div id="tags" class="pb-2">
          <ul>
            <li class="tag-item zen-kaku-bold mr-2">
              コンピュータグラフィックス<span
                class="mdi mdi-close-thick pl-1"
              ></span>
            </li>
            <li class="tag-item zen-kaku-bold mr-2">
              タグ00<span class="mdi mdi-close-thick pl-1"></span>
            </li>
            <li class="tag-item zen-kaku-bold mr-2">
              タグ00<span class="mdi mdi-close-thick pl-1"></span>
            </li>
            <li class="tag-item zen-kaku-bold mr-2">
              タグ00<span class="mdi mdi-close-thick pl-1"></span>
            </li>
            <li class="tag-item zen-kaku-bold mr-2">
              タグ00<span class="mdi mdi-close-thick pl-1"></span>
            </li>
            <li class="tag-item zen-kaku-bold mr-2">
              タグ00<span class="mdi mdi-close-thick pl-1"></span>
            </li>
          </ul>
        </div>
        <div class="pb-2">
          <v-card height="12.5em">
            <v-img
              class="align-end text-white"
              src="/src/assets/labs/ビジュアルコンピューティング.svg"
              gradient="to top right, rgba(36,7,77,.5), rgba(36,7,77,.5)"
              cover
            >
              <p class="card-title zen-kaku-bold">
                ビジュアルコンピューティング<br />研究室
              </p>
            </v-img>
          </v-card>
        </div>
        <div class="pb-2">
          <v-card height="12.5em">
            <v-img
              class="align-end text-white"
              src="/src/assets/labs/ビジュアルコンピューティング.svg"
              gradient="to top right, rgba(36,7,77,.5), rgba(36,7,77,.5)"
              cover
            >
              <p class="card-title zen-kaku-bold">
                ビジュアルコンピューティング<br />研究室
              </p>
            </v-img>
          </v-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ContentTitle from "../components/ContentTitle.vue";
export default {
  name: "Labs",
  components: {
    ContentTitle,
  },
};
</script>

<style scoped>
.filter_button {
  display: block;
  font-size: 0.8rem;
  color: #010440;
}
.tag-item {
  display: inline-block;
  font-size: 0.6rem;
  list-style: none;
  color: #360a73;
  background-color: #d3d1ff;
  padding: 0.35rem 0.4rem;
  border-radius: 100vh;
  margin-bottom: 0.1rem;
}
.card-title {
  display: block;
  font-size: 1.2rem;
  letter-spacing: 0rem;
  min-width: 0;
  padding: 0.8rem 1rem;
  text-align: right;
}
</style>
