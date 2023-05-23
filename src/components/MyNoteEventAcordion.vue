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
  <div class="accordion">
    <div class="title-box">
      <div @click="checked()">
        <transition-group name="check" mode="out-in">
          <div :class="checkboxStyleSet()"></div>
        </transition-group>
      </div>
      <div class="pl-3 py-1">
        <span class="zen-kaku-medium pr-2">{{ eventValue.subTitle }}</span>
        <span class="zen-kaku-medium">{{ eventValue.title }}</span>
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
            <p
              class="zen-kaku-bold py-4"
              style="color: #e345e6"
              v-if="eventValue.eventType == '限定プログラム'"
            >
              {{ eventValue.eventType }}
            </p>
            <p class="zen-kaku-bold py-4" style="color: #360a73" v-else>
              {{ eventValue.eventType }}
            </p>
            <div class="contents">
              <div v-if="getEventTime()">
                <img class="pr-1" src="../assets/icon-time.svg" />
                <span class="zen-kaku-regular pr-2">{{ getEventTime() }}</span>
              </div>
              <div>
                <img class="pr-1" src="../assets/icon-map.svg" />
                <span class="zen-kaku-regular pr-2">{{
                  eventValue.place
                }}</span>
              </div>
              <div v-if="eventValue.peopleNum">
                <img class="pr-1" src="../assets/icon-people.svg" />
                <span class="zen-kaku-regular">{{ eventValue.peopleNum }}</span>
              </div>
            </div>
            <div class="pt-2">
              <p class="zen-kaku-bold py-3">メモ</p>
              <textarea
                @blur="saveMemo()"
                placeholder="重要なことはメモに残そう！"
                v-model="memo"
              ></textarea>
            </div>
            <div class="py-5">
              <v-row class="px-2">
                <v-col class="pa-1">
                  <div class="default-btn btn-animation">
                    <p class="zen-kaku-bold">地図を確認</p>
                  </div>
                </v-col>
                <v-col class="pa-1">
                  <div
                    class="default-border-btn btn-animation"
                    @click="
                      this.isDeleteDialogVisible = !this.isDeleteDialogVisible
                    "
                  >
                    <p class="zen-kaku-bold">リストから削除</p>
                  </div>
                </v-col>
              </v-row>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import MyNoteDeleteDialog from "./MyNoteDeleteDialog.vue";
export default {
  name: "MyNoteEventAcordion",
  props: ["eventValue", "eventKey"],
  components: {
    MyNoteDeleteDialog,
  },
  data() {
    return {
      type: "events",
      isOpen: false,
      isChecked: false,
      memo: "",
      isDeleteDialogVisible: false,
      timeScheduleData: {},
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
  },
  mounted() {
    this.updateIsChecked();
    this.updateMemo();
    this.timeScheduleData = this.$store.getters["eventsStore/getTimeSchedule"];
  },
};
</script>

<style scoped>
.accordion {
  max-width: 100%;
  margin: 10px auto;
}

.title-box {
  min-height: 64px;
  padding: 16px;
  background-color: #ffffff;
  display: flex;
  justify-content: space-between;
}
.checkbox {
  width: 30px;
  height: 30px;
  border: solid 1px #d3d1ff;
}
.checkedbox {
  width: 30px;
  height: 30px;
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
  background-color: #ffffff;
  padding: 0 15px;
  margin-bottom: 10px;
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

.contents {
  display: flex;
}

.contents > div {
  display: flex;
  align-items: center;
  justify-content: center;
}

textarea {
  padding: 10px;
  width: 100%;
  min-height: 200px;
  border: 1px solid #acaaf2;
  overflow: scroll;
}

::placeholder {
  font-family: zen-kaku-gothic-new, sans-serif;
  font-weight: 400;
  font-style: normal;
  line-height: 1.3;
  font-size: 14px;
  color: #d3d1ff;
}
</style>
