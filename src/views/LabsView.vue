<template>
  <v-dialog v-model="isViewDialogVisible">
    <LabViewDialog
      :labData="clickedLabData"
      :labKey="clickedLabKey"
      @close-dialog="isViewDialogVisible = false"
    />
  </v-dialog>
  <v-dialog v-model="isFilterDialogVisible">
    <LabFilterDialog
      :tagData="allTagData"
      @close-dialog="isFilterDialogVisible = false"
    />
  </v-dialog>

  <div id="contents">
    <div class="pa-4">
      <!-- ページタイトル -->
      <ContentTitle>
        <template v-slot:jp-title>研究室公開</template>
        <template v-slot:title>>Laboratory</template>
        <template v-slot:info
          >説明説明説明説明説明説明説明説明説説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説説明
        </template>
      </ContentTitle>
      <!-- end ページタイトル -->
      <!-- 研究室一覧 -->
      <section class="pt-6">
        <p class="zen-kaku-bold pb-4">研究室一覧</p>
        <!-- 絞り込みボタン -->
        <p class="filter_button zen-kaku-bold pb-2" @click="openFilterDialog()">
          <span class="mdi mdi-filter-menu pr-1"></span>
          絞り込む
          <span class="pl-2">13件</span>
        </p>
        <!-- 適用中の絞り込み条件（タグ） -->
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
        <!-- 研究室カード -->
        <div v-for="(lab, key) in this.allLabsData">
          <div
            id="card"
            class="mb-2 align-end"
            :key="key"
            @click="openViewDialog(key)"
          >
            <div class="v-responsive__sizer" style="padding-bottom: 75%"></div>
            <div class="card-img" :style="lab.img"></div>
            <div
              class="card-img"
              style="background-color: rgba(36, 7, 77, 0.5)"
            ></div>
            <p
              class="card-title zen-kaku-bold text-white v-responsive__sizer v-responsive__content"
            >
              {{ lab.cardTitle }}
            </p>
          </div>
        </div>
      </section>
      <!-- end 研究室一覧 -->
    </div>
    <!-- <MyNoteIcon /> -->
  </div>
</template>

<script>
import LabViewDialog from "../components/LabViewDialog.vue";
import LabFilterDialog from "../components/LabFilterDialog.vue";
import MyNoteIcon from "../components/MyNoteIcon.vue";
import ContentTitle from "../components/ContentTitle.vue";
export default {
  name: "Labs",
  data() {
    return {
      allLabsData: {}, //全研究室のデータ
      isViewDialogVisible: false, //研究室詳細モーダルの可視状態
      clickedLabData: Array, //選択された研究室のデータ
      clickedLabKey: String, //選択された研究室のデータのkey
      allTagData: {}, //タグと研究室key
      displayLabs: [], //現在表示している研究室
      filteredTags: ["all"], //現在指定されている条件
      isFilterDialogVisible: false,
    };
  },
  components: {
    LabViewDialog,
    LabFilterDialog,
    ContentTitle,
    MyNoteIcon,
  },
  methods: {
    openViewDialog(key) {
      this.isViewDialogVisible = true;
      this.clickedLabData = this.allLabsData[key];
      // console.log(this.clickedLabData.display);
      this.clickedLabKey = key;
    },
    openFilterDialog() {
      this.isFilterDialogVisible = true;
    },
  },
  mounted() {
    // jsonから全研究室のデータを取得して変数に格納
    this.allLabsData = this.$store.getters["labsStore/getAllLabsData"];
    // 全研究室のデータからタグの辞書を作成
    for (const item of Object.keys(this.allLabsData)) {
      if (!this.allTagData["all"]) {
        this.allTagData["all"] = [item];
      } else {
        let labItem = this.allTagData["all"];
        labItem.push(item);
        this.allTagData["all"] = labItem;
      }
      for (const tag of this.allLabsData[item].tags) {
        if (!this.allTagData[tag]) {
          this.allTagData[tag] = [item];
        } else {
          let labItem = this.allTagData[tag];
          labItem.push(item);
          this.allTagData[tag] = labItem;
        }
      }
    }
    console.log(this.allTagData);
  },
};
</script>

<style scoped>
/* .background-dialog {
  height: 688px;
  background-color: white;
  border-radius: 10px;
} */
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

#card {
  z-index: 0;
  height: 12.5em;
  display: flex;
  max-height: 100%;
  max-width: 100%;
  overflow: hidden;
  position: relative;
  box-shadow: 0px 2px 1px -1px var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, 0.2)),
    0px 1px 1px 0px var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, 0.14)),
    0px 1px 3px 0px var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, 0.12));
  border-radius: 0.2rem;
}
#card .card-img {
  z-index: -1;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
}
.card-title {
  display: block;
  font-size: 1.2rem;
  letter-spacing: 0rem;
  min-width: 0;
  padding: 0.8rem 1rem;
  text-align: right;
  white-space: pre-wrap;
}
</style>
