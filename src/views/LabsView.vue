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
      :allTagData="allTagData"
      :filteredTags="filteredTags"
      @close-dialog="isFilterDialogVisible = false"
      @update-filtered="onUpdateFilteredTags"
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
        <p class="zen-kaku-bold pb-4">
          研究室一覧<span class="pl-3">{{ filteredLabs.size }}件</span>
        </p>
        <!-- <div>FilteredTags: {{ filteredTags }}</div> -->
        <!-- 絞り込みボタン -->
        <div class="pb-2">
          <p class="filter_button zen-kaku-bold" @click="openFilterDialog()">
            <span class="mdi mdi-filter-menu pr-1"></span>
            絞り込み条件
          </p>
        </div>
        <!-- 適用中の絞り込み条件（タグ） -->
        <div class="pb-2">
          <ul>
            <template v-for="tag in filteredTags">
              <li class="zen-kaku-bold" v-if="tag == 'all'">なし</li>
              <li
                class="tag-item zen-kaku-bold mr-2"
                v-else-if="tag == 'display'"
              >
                展示あり<span
                  class="mdi mdi-close-thick pl-1"
                  @click="removeFilteredTag('display')"
                ></span>
              </li>
              <li
                class="tag-item zen-kaku-bold mr-2"
                v-else-if="tag == 'not-display'"
              >
                展示なし<span
                  class="mdi mdi-close-thick pl-1"
                  @click="removeFilteredTag('not-display')"
                ></span>
              </li>
              <li class="tag-item zen-kaku-bold mr-2" v-else>
                {{ tag
                }}<span
                  class="mdi mdi-close-thick pl-1"
                  @click="removeFilteredTag(tag)"
                ></span>
              </li>
            </template>
          </ul>
        </div>
        <!-- 研究室カード -->
        <div v-for="key in filteredLabs" :key="key">
          <div
            id="card"
            class="mb-2 align-end"
            :key="key"
            @click="openViewDialog(key)"
          >
            <div class="v-responsive__sizer" style="padding-bottom: 75%"></div>
            <div class="card-img" :style="allLabsData[key].img"></div>
            <div
              class="card-img"
              style="background-color: rgba(36, 7, 77, 0.5)"
            ></div>
            <p
              class="card-title zen-kaku-bold text-white v-responsive__sizer v-responsive__content"
            >
              {{ allLabsData[key].cardTitle }}
            </p>
          </div>
        </div>
      </section>
      <!-- end 研究室一覧 -->
    </div>
    <MyNoteIcon />
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
      allLabsData: {}, //全研究室のデータ辞書
      allTagData: {}, //タグと研究室key辞書
      isViewDialogVisible: false, //研究室詳細モーダルの可視状態
      clickedLabData: Array, //選択された研究室のデータ
      clickedLabKey: String, //選択された研究室のデータのkey
      isFilterDialogVisible: false,
      filteredLabsKey: Set, //現在表示している研究室のkey
      filteredTags: ["all"], //現在指定されている条件配列
    };
  },
  components: {
    LabViewDialog,
    LabFilterDialog,
    ContentTitle,
    MyNoteIcon,
  },
  computed: {
    // 指定される条件が変わると、表示する研究室も変わる
    filteredLabs() {
      const filteredLabsKey = new Set();
      if (this.filteredTags.length == 0) {
        this.filteredTags = ["all"];
      }
      // console.log(`computed: filteredLabs() : ${this.filteredTags}`);
      for (let tag of this.filteredTags) {
        let keyArray = this.allTagData[tag] || [];
        for (let key of keyArray) {
          filteredLabsKey.add(key);
        }
      }
      return filteredLabsKey;
    },
  },
  // 選択中の条件　→ 辞書を使って表示する研究室を決める
  methods: {
    updateTagData(key, data) {
      if (!this.allTagData[key]) {
        this.allTagData[key] = new Array(data);
      } else {
        let labsData = this.allTagData[key];
        labsData.push(data);
        this.allTagData[key] = labsData;
      }
    },
    openViewDialog(key) {
      this.isViewDialogVisible = true;
      this.clickedLabData = this.allLabsData[key];
      this.clickedLabKey = key;
    },
    openFilterDialog() {
      this.isFilterDialogVisible = true;
    },
    onUpdateFilteredTags(e) {
      // console.log(`onUpdateFilteredTags(): ${this.filteredTags}`);
      this.filteredTags = e;
    },
    removeFilteredTag(removeTag) {
      this.filteredTags = this.filteredTags.filter(
        (item) => item !== removeTag
      );
      // console.log(this.filteredTags);
    },
  },
  mounted() {
    // jsonから全研究室のデータを取得して変数に格納
    this.allLabsData = this.$store.getters["labsStore/getAllLabsData"];
    // console.log(this.allLabsData);
    // 全研究室のデータから{タグ:[研究室のkey]}からなる辞書を作成
    for (const item of Object.keys(this.allLabsData)) {
      this.updateTagData("all", item);
      for (const tag of this.allLabsData[item].tags) {
        this.updateTagData(tag, item);
      }
      // 展示有無もタグとして情報を登録
      if (this.allLabsData[item].display) {
        this.updateTagData("display", item);
      } else {
        this.updateTagData("not-display", item);
      }
    }
    this.filteredLabsKey = new Set(this.allTagData["all"]);
    // console.log(this.filteredLabsKey);
    // console.log(this.allTagData);
  },
};
</script>

<style scoped>
.filter_button {
  display: block;
  font-size: 0.8rem;
  color: #010440;
}

li {
  display: inline-block;
  font-size: 0.6rem;
  list-style: none;
  color: #360a73;
  margin-bottom: 0.1rem;
}
li.tag-item {
  background-color: #d3d1ff;
  padding: 0.35rem 0.4rem;
  border-radius: 100vh;
}

#card {
  z-index: 0;
  height: 15em;
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
