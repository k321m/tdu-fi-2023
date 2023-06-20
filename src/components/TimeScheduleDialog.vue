<template>
  <MyNoteAddAlert v-if="isViewAlert" @end-alert="isViewAlert = false" />
  <div class="background-dialog pa-5 pb-7">
    <div style="display: flex" @click="$emit('close-dialog')">
      <div style="margin: 0 0 0 auto">
        <v-icon>mdi-close</v-icon>
      </div>
    </div>
    <div class="pb-4">
      <h4 class="pb-2 pink" v-if="eventData.eventType == '限定プログラム'">
        {{ eventData.eventType }}
      </h4>
      <h4 class="pb-2 purple" v-else>
        {{ eventData.eventType }}
      </h4>
      <h2 v-if="eventData.subTitle">
        {{ eventData.subTitle }}
      </h2>
      <h2>{{ eventData.title }}</h2>
    </div>

    <div class="contents pb-4">
      <!-- TODO:表示されないため修正 -->
      <div v-if="eventTime">
        <img src="../assets/icon-clock.svg" class="pr-1" />
        <p>{{ eventTime }}</p>
      </div>
      <div>
        <img src="../assets/icon-map.svg" class="pr-1" />
        <p>{{ eventData.place }}</p>
      </div>
      <div v-if="eventData.peopleNum">
        <img src="../assets/icon-people.svg" class="pr-1" />
        <p>{{ eventData.peopleNum }}</p>
      </div>
    </div>
    <div class="scroll-contents" style="font-size: 0.9em; padding-bottom: 1em">
      <p>{{ eventData.info }}</p>
    </div>
    <!-- ボタン -->
    <div class="footer mt-6">
      <div class="button-group pb-2">
        <template v-for="button in eventData.buttons">
          <template v-if="button.name == 'default'">
            <ButtonDefault
              :title="'地図を確認'"
              :to="''"
              :clickEvent="() => openMap(button.key)"
            />
          </template>
          <template v-else-if="button.name == 'mynote'">
            <ButtonMyNote
              :title="'MyNoteに追加'"
              :clickEvent="myNoteBtnClicked"
            />
          </template>
          <template v-else-if="button.name == 'pink'">
            <ButtonPink :title="'研究室を確認'" :to="'/labs'" />
          </template>
        </template>
      </div>
      <a
        v-for="linkData in eventData.links"
        style="font-size: 0.8em; display: block; margin-bottom: 0.2em"
        :href="linkData['url']"
        >{{ linkData["name"] }}</a
      >
    </div>
  </div>
</template>

<script>
import MyNoteAddAlert from "./MyNoteAddAlert.vue";
import ButtonDefault from "./ButtonDefault.vue";
import ButtonMyNote from "./ButtonMyNote.vue";
import ButtonPink from "./ButtonPink.vue";
export default {
  name: "TimeScheduleDialog",
  props: ["eventData", "eventKey", "eventTime"],
  emits: ["close-dialog", "open-map"],
  data() {
    return {
      isViewAlert: false,
      type: "events",
    };
  },
  components: {
    MyNoteAddAlert,
    ButtonDefault,
    ButtonMyNote,
    ButtonPink,
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
    openMap(key) {
      this.$emit("open-map", key);
    },
  },
};
</script>

<style scoped>
.background-dialog {
  display: flex;
  flex-direction: column;
  min-height: 70dvh;
  max-height: 90dvh;
  background-color: white;
  border-radius: 0.8rem;
  padding-bottom: 10rem;
}

.contents > div {
  display: inline-flex;
  align-items: center;
  margin-right: 0.8rem;
  font-size: 0.9em;
}

.scroll-contents {
  flex-grow: 1;
  overflow-y: scroll;
}

.footer {
  width: 100%;
}

.button-group {
  display: flex;
  justify-content: space-between;
}
.button-group > * {
  width: 49%;
}
a {
  text-decoration: none;
}
</style>
