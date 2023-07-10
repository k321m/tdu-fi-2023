<template>
  <v-dialog v-model="isDeleteDialogVisible">
    <MyNoteDeleteDialog
      @close-delete-dialog="isDeleteDialogVisible = false"
      @delete-data="deleteEvent"
    >
      <template v-slot:type>訪問項目</template>
      <template v-slot:title
        >{{ eventValue.subTitle }} {{ eventValue.title }}</template
      >
      <template v-slot:message-caution>メモの内容が失われます</template>
    </MyNoteDeleteDialog>
  </v-dialog>
  <ImageViewDialog
    v-model="isMapDialogVisible"
    :imgData="mapData"
    @close-dialog="isMapDialogVisible = false"
  />
  <div class="accordion">
    <div class="title-box" :class="{ 'opened-border-radius': isOpen }">
      <div class="text-area">
        <div @click="checked()">
          <transition-group name="check">
            <div :class="checkboxStyleSet()" :key="eventKey"></div>
          </transition-group>
        </div>
        <div
          class="pl-3 mr-3"
          style="line-height: 1.3em; padding-top: 0.2em"
          @click="isOpen = !isOpen"
          :class="{ 'text-ellipsis': !isOpen }"
        >
          <p class="sub-strong">
            <span v-if="eventValue.subTitle != null" class="pr-1">{{
              eventValue.subTitle
            }}</span>
            <span>{{ eventValue.title }}</span>
          </p>
        </div>
      </div>

      <div class="pulldown-button py-1" @click="isOpen = !isOpen">
        <img
          :class="openAcordionStyleSet()"
          src="../assets/pulldown-button-down.svg"
        />
      </div>
    </div>
    <transition name="open">
      <div class="accordion-content pb-4" v-if="isOpen">
        <div name="content">
          <div>
            <h4
              class="pb-2 pink"
              v-if="eventValue.eventType == '限定プログラム'"
            >
              {{ eventValue.eventType }}
            </h4>
            <h4 class="purple pb-2" v-else>
              {{ eventValue.eventType }}
            </h4>
            <div class="contents">
              <div v-if="getEventTime()">
                <img class="pr-1" src="../assets/icon-clock.svg" />
                <p class="pr-2">{{ getEventTime() }}</p>
              </div>
              <div>
                <img class="pr-1" src="../assets/icon-map.svg" />
                <p class="pr-2">{{ eventValue.place }}</p>
              </div>
              <div v-if="eventValue.peopleNum">
                <img class="pr-1" src="../assets/icon-people.svg" />
                <p>{{ eventValue.peopleNum }}</p>
              </div>
            </div>
            <div class="pt-2">
              <div class="pb-1" style="display: flex; align-items: flex-end">
                <h4 class="py-3">メモ</h4>
                <v-icon
                  style="
                    margin: 0 0 0 auto;
                    padding-right: 0.4rem;
                    font-size: 1rem;
                  "
                  @click="copyMemoToClipboard"
                  v-if="!isCopied"
                  >mdi-clipboard-multiple</v-icon
                >
                <v-icon
                  style="
                    margin: 0 0 0 auto;
                    padding-right: 0.4rem;
                    font-size: 1rem;
                  "
                  @click="copyMemoToClipboard"
                  v-else
                  >mdi-clipboard-check-multiple</v-icon
                >
              </div>
              <textarea
                @blur="saveMemo()"
                placeholder="重要なことはメモに残そう！"
                v-model="memo"
              ></textarea>
            </div>
            <div class="py-5">
              <div class="footer">
                <div class="button-group">
                  <Button default @click="openMapDialog"> 地図を確認 </Button>
                  <Button
                    defaultBorder
                    @click="
                      this.isDeleteDialogVisible = !this.isDeleteDialogVisible
                    "
                    >リストから削除</Button
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import Button from "./parts/Button.vue";
import MyNoteDeleteDialog from "./MyNoteDeleteDialog.vue";
import ImageViewDialog from "./templates/ImageViewDialog.vue";
export default {
  name: "MyNoteEventAcordion",
  props: ["eventValue", "eventKey"],
  components: {
    Button,
    MyNoteDeleteDialog,
    ImageViewDialog,
  },
  data() {
    return {
      type: "events",
      isOpen: false,
      isChecked: false,
      memo: "",
      isDeleteDialogVisible: false,
      timeScheduleData: {},
      isCopied: false,
      allMapData: {},
      mapData: {},
      mapId: String,
      isMapDialogVisible: false,
    };
  },
  methods: {
    getEventTime() {
      var keySplit = String(this.eventKey).split("_");
      if (keySplit.length < 3) {
        return null;
      }
      var timeScheduleType = keySplit[2] + "_" + keySplit[3];
      return this.timeScheduleData[timeScheduleType][this.eventKey].time;
    },
    updateIsChecked() {
      var eventsMyNote = this.$store.getters.getMyNoteEvents;
      this.isChecked = eventsMyNote[this.eventKey].done;
    },
    updateMemo() {
      var eventsMyNote = this.$store.getters.getMyNoteEvents;
      this.memo = eventsMyNote[this.eventKey].memo;
    },
    checked() {
      this.$store.commit("updateEventDone", this.eventKey);
      this.updateIsChecked();
    },
    saveMemo() {
      this.$store.commit("saveMemo", {
        type: this.type,
        key: this.eventKey,
        memo: this.memo,
      });
    },
    deleteEvent() {
      this.$store.commit("deleteMyNote", {
        type: this.type,
        key: this.eventKey,
      });
    },
    checkboxStyleSet() {
      return {
        checkedbox: this.isChecked,
        checkbox: !this.isChecked,
      };
    },
    openAcordionStyleSet() {
      return {
        openAcordionbutton: this.isOpen,
        closeAcordionbutton: !this.isOpen,
      };
    },
    copyMemoToClipboard() {
      this.isCopied = true;
      navigator.clipboard.writeText(this.memo);
      setTimeout(() => {
        this.isCopied = false;
      }, 3000);
    },
    openMapDialog() {
      if (this.eventValue.buttons == undefined) {
        this.mapId = this.eventValue.mapKey;
      } else {
        this.mapId = this.eventValue.buttons[0].key;
      }
      this.mapData = this.allMapData[this.mapId];
      this.isMapDialogVisible = true;
    },
  },
  mounted() {
    this.updateIsChecked();
    this.updateMemo();
    this.timeScheduleData = this.$store.getters["eventsStore/getTimeSchedule"];
    this.allMapData = this.$store.getters["mapStore/getAllMapData"];
  },
};
</script>

<style scoped>
.accordion {
  max-width: 100%;
  margin: 0.5em auto;
}

.text-area {
  display: flex;
  align-items: flex-start;
  flex-grow: 1;
  overflow: hidden;
}
.text-ellipsis {
  flex-grow: 1;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.title-box {
  min-height: 1em;
  padding: 1em;
  background-color: var(--white);
  display: flex;
  align-items: center;
  border-radius: 0.3em;
}
.opened-border-radius {
  border-radius: 0.3em 0.3em 0 0 !important;
}
.checkbox {
  width: 1.8em;
  height: 1.8em;
  border: solid 1px var(--light-purple);
}
.checkedbox {
  width: 1.8em;
  height: 1.8em;
  background-image: url(../assets/checkbox.svg);
}

@keyframes check {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

.check-leave-active {
  animation: open 0.2s reverse;
}

.pulldown-button {
  margin-left: auto;
}
.accordion-content {
  background-color: var(--white);
  padding: 0.5em 1em 1.4em 1em;
  border-radius: 0 0 0.3em 0.3em;
}
@keyframes open {
  0% {
    opacity: 0;
    transform: translateY(-5px);
  }
  100% {
    opacity: 1;
    transform: translateY(0px);
  }
}
.open-enter-active {
  animation: open 0.2s;
}
.open-leave-active {
  animation: open 0.1s reverse;
}

.openAcordionbutton {
  transform: scaleY(-1);
}

.contents > div {
  font-size: 0.9em;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

textarea {
  padding: 8px;
  width: 100%;
  border: 1px solid var(--light-purple);
  background-color: var(--white);
  overflow: scroll;
  min-height: 200px;
}
textarea:focus {
  border: 1px solid var(--dark);
  background-color: var(--white);
  outline: none;
}

.footer {
  width: 100%;
}
.button-group {
  display: flex;
  justify-content: space-between;
}
.button-group > * {
  font-size: 0.8em;
  width: 49%;
}

a {
  text-decoration: none;
}
.link {
  color: var(--black);
  word-break: break-all;
}
</style>
