<template>
  <div class="accordion">
    <div class="title-box">
      <div @click="checked()">
        <transition-group name="check" mode="out-in">
          <div :class="checkboxStyleSet()"></div>
        </transition-group>
      </div>

      <div class="pl-3 py-1">
        <p class="zen-kaku-medium"><slot name="title"></slot></p>
      </div>

      <div class="pulldown-button py-1" @click="isOpen = !isOpen">
        <transition-group name="rotate" mode="out-in">
          <img
            src="../assets/pulldown-button-down.svg"
            v-if="isOpen"
            key="rotate1"
          />
          <img src="../assets/pulldown-button-up.svg" v-else key="rotate2" />
        </transition-group>
      </div>
    </div>
    <transition name="open">
      <div class="accordion-content pa-4" v-if="isOpen">
        <div name="content">
          <div>
            <p class="zen-kaku-medium py-1" style="color: #360a73">
              <slot name="event"></slot>
            </p>
            <div class="contents">
              <!-- <div>
                <img class="icon-map" src="../assets/icon-map.svg" />
                <span>時間</span>
              </div> -->
              <div>
                <img class="icon-map" src="../assets/icon-map.svg" />
                <span class="zen-kaku-regular"><slot name="place"></slot></span>
              </div>
              <!-- <div>
                <img class="icon-map" src="../assets/icon-map.svg" />
                <span>人数</span>
              </div> -->
            </div>
            <div>
              <p class="zen-kaku-bold py-3">メモ</p>
              <textarea @blur="saveMemo()" v-model="memo"></textarea>
            </div>
            <div class="py-4" style="display: flex">
              <v-btn rounded="xs" width="50%" height="60px" elevation="2"
                >地図を確認</v-btn
              >
              <v-btn rounded="xs" width="50%" height="60px" elevation="2"
                >リストから削除</v-btn
              >
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "MyNoteAcordion",
  props: ["eventKey"],
  data() {
    return {
      isOpen: false,
      isChecked: false,
      memo: "",
    };
  },
  methods: {
    updateIsChecked() {
      var eventsMyNote = this.$store.getters.getMyNoteEvents;
      console.log(this.eventKey);
      console.log(JSON.stringify(eventsMyNote));
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
      this.$store.commit("saveEventMemo", {
        key: this.eventKey,
        memo: this.memo,
      });
    },
    checkboxStyleSet() {
      return {
        checkedbox: this.isChecked,
        checkbox: !this.isChecked,
      };
    },
  },
  mounted() {
    this.updateIsChecked();
    this.updateMemo();
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
img {
  width: 12px;
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
  animation: open 0.2s reverse;
}
@keyframes rotate {
  0% {
    transform: rotate(180deg);
  }
}
.rotate-enter-active {
  animation: rotate 0.2s linear;
}

.contents {
  display: flex;
}
textarea {
  font-size: 0.8rem;
  letter-spacing: 1px;
}

textarea {
  padding: 10px;
  width: 100%;
  min-height: 200px;
  border: 1px solid #acaaf2;
  overflow: scroll;
}
</style>
