<template>
  <LabViewDialog
    :view="isViewDialogVisible"
    @update:view="isViewDialogVisible = $event"
    :labData="clickedLabData"
    :labKey="clickedLabKey"
    @open-map-dialog="openMapDialog"
  />
  <v-dialog v-model="isFilterDialogVisible">
    <LabFilterDialog
      :allTagData="allTagData"
      :filteredTags="filteredTags"
      @close-dialog="isFilterDialogVisible = false"
      @update-filtered="onUpdateFilteredTags"
    />
  </v-dialog>
  <v-dialog v-model="isMapDialogVisible">
    <MapViewDialog
      :mapData="mapData"
      :mapId="mapId"
      @close-dialog="isMapDialogVisible = false"
    />
  </v-dialog>

  <div id="contents">
    <div class="pa-4">
      <!-- ページタイトル -->
      <ContentTitle>
        <template v-slot:jp-title>研究室公開</template>
        <template v-slot:title>>Laboratory</template>
        <template v-slot:info
          >現在情報メディア学科には教員15名、研究室が10登録されています。研究室によって論文テーマや就職先、雰囲気などが変わるため、学生や教員に直接お話を伺って違いを体感してください。また、研究室探しや理解の補助として、ぜひ絞り込み機能やMyNoteをご活用ください。
        </template>
      </ContentTitle>
      <!-- end ページタイトル -->
      <!-- 研究室一覧 -->
      <section class="pt-6">
        <p class="pb-4">
          <b
            >研究室一覧<span class="pl-3">{{ filteredLabs.size }}件</span></b
          >
        </p>
        <!-- <div>FilteredTags: {{ filteredTags }}</div> -->
        <!-- 絞り込みボタン -->
        <div class="pb-2">
          <p class="filter_button" @click="openFilterDialog()">
            <span class="mdi mdi-filter-menu pr-1"></span>
            <b>絞り込む</b>
          </p>
        </div>
        <!-- 適用中の絞り込み条件（タグ） -->
        <div class="pb-2">
          <ul>
            <template v-for="tag in filteredTags">
              <li v-if="tag == 'all'"><b>なし</b></li>
              <li class="tag-item mr-2" v-else-if="tag == 'display'">
                <b>展示あり</b
                ><span
                  class="mdi mdi-close-thick pl-1"
                  @click="removeFilteredTag('display')"
                ></span>
              </li>
              <li class="tag-item mr-2" v-else-if="tag == 'not-display'">
                <b>展示なし</b
                ><span
                  class="mdi mdi-close-thick pl-1"
                  @click="removeFilteredTag('not-display')"
                ></span>
              </li>
              <li class="tag-item mr-2" v-else>
                <b>{{ tag }}</b>
                <span
                  class="mdi mdi-close-thick pl-1"
                  @click="removeFilteredTag(tag)"
                ></span>
              </li>
            </template>
          </ul>
        </div>
        <!-- 研究室カード -->
        <div v-for="key in filteredLabs" :key="key">
          <Card
            :key="key"
            @click="openLabViewDialog(key)"
            :img="allLabsData[key].img"
          >
            <template v-slot:title>
              {{ allLabsData[key].cardTitle }}
            </template>
          </Card>
        </div>
      </section>
      <!-- end 研究室一覧 -->
    </div>
    <MyNoteIcon />
  </div>
</template>

<script>
import LabViewDialog from "../components/templates/LabViewDialog.vue";
import LabFilterDialog from "../components/LabFilterDialog.vue";
import MyNoteIcon from "../components/parts/MyNoteIcon.vue";
import ContentTitle from "../components/ContentTitle.vue";
import MapViewDialog from "../components/MapViewDialog.vue";
import Card from "../components/parts/Card.vue";
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
      allMapData: {},
      mapData: {},
      mapId: String,
      isMapDialogVisible: false,
    };
  },
  components: {
    LabViewDialog,
    LabFilterDialog,
    ContentTitle,
    MyNoteIcon,
    MapViewDialog,
    Card,
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
    openLabViewDialog(key) {
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
    openMapDialog(mapId) {
      this.mapId = mapId;
      this.mapData = this.allMapData[mapId];
      this.isMapDialogVisible = true;
    },
  },
  mounted() {
    // jsonから全研究室のデータを取得して変数に格納
    this.allLabsData = this.$store.getters["labsStore/getAllLabsData"];
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
    // マップデータを取得
    this.allMapData = this.$store.getters["mapStore/getAllMapData"];
  },
};
</script>

<style scoped>
.filter_button {
  display: inline-block;
  font-size: 0.8rem;
  color: var(--dark);
  border: 1px solid var(--dark);
  background-color: var(--white);
  border-radius: 100dvh;
  padding: 0.35rem 0.6rem;
}

li {
  display: inline-block;
  font-size: 0.6rem;
  list-style: none;
  color: var(--purple);
  margin-bottom: 0.1rem;
}
li.tag-item {
  background-color: var(--light-purple);
  padding: 0.35rem 0.6rem;
  border-radius: 100vh;
}
</style>
