<template>
  <MyNoteAddAlert v-if="isViewAlert" @end-alert="isViewAlert = false" />
  <div class="background-dialog px-5 pt-5">
    <div style="display: flex" @click="$emit('close-dialog')">
      <div style="margin: 0 0 0 auto">
        <v-icon>mdi-close</v-icon>
      </div>
    </div>
    <div class="pb-4">
      <p
        class="zen-kaku-bold pb-3"
        style="color: #e345e6"
        v-if="eventData.eventType == '限定プログラム'"
      >
        {{ eventData.eventType }}
      </p>
      <p class="zen-kaku-bold pb-2" style="color: #360a73" v-else>
        {{ eventData.eventType }}
      </p>
      <p
        class="zen-kaku-h2 pb-2"
        style="font-size: 1.7em"
        v-if="eventData.subTitle"
      >
        {{ eventData.subTitle }}
      </p>
      <p class="zen-kaku-h2" style="font-size: 1.7em">{{ eventData.title }}</p>
    </div>

    <div class="contents pb-4">
      <!-- TODO:表示されないため修正 -->
      <div v-if="eventTime">
        <img src="../assets/icon-clock.svg" />
        <span class="zen-kaku-regular pl-1">{{ eventTime }}</span>
      </div>
      <div>
        <img src="../assets/icon-map.svg" />
        <span class="zen-kaku-regular pl-1">{{ eventData.place }}</span>
      </div>
      <div v-if="eventData.peopleNum">
        <img src="../assets/icon-people.svg" />
        <span class="zen-kaku-regular pl-1">{{ eventData.peopleNum }}</span>
      </div>
    </div>
    <div class="scroll-contents" style="font-size: 0.9em">
      <p class="zen-kaku-regular">{{ eventData.info }}</p>
    </div>
  </div>
  <div class="footer px-5">
    <div class="button-group pb-2">
      <button class="default-btn btn-animation zen-kaku-bold">
        地図を確認
      </button>
      <button
        class="myNote-btn btn-animation zen-kaku-bold"
        @click="myNoteBtnClicked"
      >
        MyNoteに追加
      </button>
    </div>
    <div v-for="linkData in eventData.links">
      <a
        class="zen-kaku-regular"
        style="font-size: 0.8em"
        :href="linkData['url']"
        >{{ linkData["name"] }}</a
      >
    </div>
  </div>
</template>

<script>
import MyNoteAddAlert from "./MyNoteAddAlert.vue";
export default {
  name: "TimeScheduleDialog",
  props: ["eventData", "eventKey", "eventTime"],
  emits: ["close-dialog"],
  data() {
    return {
      isViewAlert: false,
      type: "events",
    };
  },
  components: {
    MyNoteAddAlert,
  },
  methods: {
    myNoteBtnClicked() {
      let addTitle = "";
      if (this.eventData.subTitle == null) {
        addTitle = this.eventData.title;
      } else {
        addTitle = this.eventData.subTitle + " " + this.eventData.title;
      }
      this.isViewAlert = true;
      this.$store.commit("addMyNote", {
        type: this.type,
        key: this.eventKey,
        title: addTitle,
      });
    },
  },
};
</script>

<style scoped>
.background-dialog {
  display: flex;
  flex-direction: column;
  min-height: 88dvh;
  max-height: 90dvh;
  background-color: white;
  border-radius: 0.8rem;
  padding-bottom: 10rem;
}

.contents > div {
  display: inline-flex;
  align-items: center;
  margin-right: 0.8rem;
  margin-right: 0.8rem;
}

.scroll-contents {
  flex-grow: 1;
  overflow-y: scroll;
}

.footer {
  position: absolute;
  bottom: 0px;
  width: 100%;
  padding-bottom: 2rem;
}

.button-group {
  display: flex;
  justify-content: space-between;
}
.button-group > button {
  font-size: 0.8em;
  width: 49%;
}
a {
  text-decoration: none;
  color: #010326;
}
</style>
