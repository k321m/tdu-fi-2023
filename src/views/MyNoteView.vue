<template>
  <div id="contents">
    <div class="pa-4">
      <ContentTitle>
        <template v-slot:jp-title>マイノート</template>
        <template v-slot:title>>MyNote</template>
        <template v-slot:info
          >説明説明説明説明説明説明説明説明説説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説説明
        </template>
      </ContentTitle>
      <div class="pt-6">
        <p class="zen-kaku-bold">訪問リスト</p>
        <div v-for="(value, key) in myNoteDetailData.events" :key="value">
          <MyNoteEventAcordion :eventKey="key">
            <template v-slot:title>{{ value.title }}</template>
            <template v-slot:subTitle v-if="value.subTitle">
              <span class="zen-kaku-medium pr-2">{{ value.subTitle }}</span>
            </template>
            <template v-slot:eventType>{{ value.eventType }}</template>
            <template v-slot:time v-if="getEventTime(key)">
              <img class="pr-1" src="../assets/icon-time.svg" />
              <span class="zen-kaku-regular pr-2">{{ getEventTime(key) }}</span>
            </template>
            <template v-slot:place>
              <img class="pr-1" src="../assets/icon-map.svg" />
              <span class="zen-kaku-regular pr-2">{{ value.place }}</span>
            </template>
            <template v-slot:people v-if="value.peopleNum">
              <img class="pr-1" src="../assets/icon-people.svg" />
              <span class="zen-kaku-regular">{{ value.peopleNum }}</span>
            </template>
          </MyNoteEventAcordion>
        </div>

        <div class="py-4">
          <p class="zen-kaku-regular">▶︎ タイムスケジュール</p>
          <p class="zen-kaku-regular">▶︎ 研究室公開</p>
        </div>
      </div>
      <div class="pt-6">
        <p class="zen-kaku-bold">質問リスト</p>
        <div v-for="(value, key) in myNoteDetailData.questions" :key="value">
          <MyNoteEventAcordion :key="key">
            <template v-slot:title>{{ value.title }}</template>
            <template v-slot:event>{{ value.event }}</template>
            <template v-slot:place>{{ value.place }}</template>
          </MyNoteEventAcordion>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ContentTitle from "../components/ContentTitle.vue";
import MyNoteEventAcordion from "../components/MyNoteEventAcordion.vue";
import "../js/particles/top-particle";
export default {
  name: "MyNote",
  components: {
    ContentTitle,
    MyNoteEventAcordion,
  },
  data() {
    return {
      myNoteDetailData: {},
      timeScheduleData: {},
    };
  },
  methods: {
    getEventTime(key) {
      var keySplit = String(key).split("_");
      if (keySplit.length < 3) {
        return null;
      }
      var timeScheduleType = keySplit[2] + "_" + keySplit[3];
      return this.timeScheduleData[timeScheduleType][key].time;
    },
  },
  mounted() {
    this.myNoteDetailData = this.$store.getters.getMyNoteDetailData;
    this.timeScheduleData = this.$store.getters["eventsStore/getTimeSchedule"];
  },
};
</script>

<style scoped>
.contents > div {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
