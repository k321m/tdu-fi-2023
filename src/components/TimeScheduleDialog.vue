<template>
  <div class="background-dialog pa-5">
    <div style="display: flex" @click="$emit('close-dialog')">
      <div style="margin: 0 0 0 auto">
        <v-icon>mdi-close</v-icon>
      </div>
    </div>
    <div class="pb-10">
      <p class="zen-kaku-bold py-4">{{ eventData.eventType }}</p>
      <p class="zen-kaku-h2 pb-1" v-if="eventData.subTitle">
        {{ eventData.subTitle }}
      </p>
      <p class="zen-kaku-h2">{{ eventData.title }}</p>
    </div>
    <div class="pt-10">
      <div class="contents">
        <div class="pr-2" v-if="eventTime">
          <img src="../assets/icon-time.svg" />
          <span class="zen-kaku-regular pl-1">{{ eventTime }}</span>
        </div>
        <div class="pr-2">
          <img src="../assets/icon-map.svg" />
          <span class="zen-kaku-regular pl-1">{{ eventData.place }}</span>
        </div>
        <div v-if="eventData.peopleNum">
          <img src="../assets/icon-people.svg" />
          <span class="zen-kaku-regular pl-1">{{ eventData.peopleNum }}</span>
        </div>
      </div>
    </div>
    <div class="py-4">
      <p class="zen-kaku-medium info">
        {{ eventData.info }}
      </p>
    </div>
    <div class="py-10">
      <div class="py-2">
        <div class="myNote-btn btn-animation" @click="myNoteBtnClicked()">
          <p class="zen-kaku-bold">MyNoteに追加</p>
        </div>
      </div>
      <div class="py-2">
        <div class="map-btn btn-animation">
          <p class="zen-kaku-bold">地図を確認</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TimeScheduleDialog",
  props: ["eventData", "eventKey", "eventTime"],
  emits: ["close-dialog"],
  data() {
    return {
      type: "events",
    };
  },
  methods: {
    myNoteBtnClicked() {
      this.$store.commit("addMyNote", {
        type: this.type,
        key: this.eventKey,
        time: this.eventTime,
      });
    },
  },
};
</script>

<style scoped>
.background-dialog {
  height: 688px;
  background-color: white;
  border-radius: 10px;
}

.contents {
  display: flex;
}
.contents > div {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
