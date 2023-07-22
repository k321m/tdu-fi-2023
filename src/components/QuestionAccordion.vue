<template>
  <ImageViewDialog
    v-model="isImageDialogVisible"
    :imgData="clickedImg"
    @close-dialog="isImageDialogVisible = false"
  />
  <!-- おすすめ質問 -->
  <div class="mb-2">
    <div class="accordion">
      <!-- 質問エリア -->
      <div
        class="title-box"
        :class="{ 'opened-border-radius': isOpen }"
        @click="isOpen = !isOpen"
      >
        <div class="text-area">
          <p class="pb-1" style="font-size: 1.5em; line-height: 1em">Q</p>
          <p
            class="pl-3 mr-3"
            style="line-height: 1.3em; padding-top: 0.2em"
            :class="{ 'text-ellipsis': !isOpen }"
          >
            {{ questionValue.ques }}
          </p>
        </div>
        <div class="pulldown-button py-1">
          <img
            :class="{ openAcordionbutton: isOpen }"
            src="../assets/pulldown-button-down.svg"
          />
        </div>
      </div>
      <!-- アコーディオン -->
      <transition name="open">
        <div class="accordion-content" v-if="isOpen">
          <!-- 回答 -->
          <div class="answer-box" v-if="questionValue.ans != ''">
            <div class="text-area">
              <p class="pb-1" style="font-size: 1.5em; line-height: 1em">A</p>
              <div style="display: flex; flex-direction: column" class="pb-2">
                <p
                  class="pl-3 mr-3 pb-2"
                  style="line-height: 1.3em; padding-top: 0.2em"
                >
                  {{ questionValue.ans }}
                </p>
                <!-- 画像 -->
                <template v-if="questionValue.images">
                  <template v-for="imgSrc in questionValue.images">
                    <img
                      style="width: 100%; height: auto"
                      :src="imgSrc"
                      @click="openImgDialog(imgSrc)"
                    />
                  </template>
                </template>
                <!-- リンク -->
                <div v-for="linkData in questionValue.links">
                  <a
                    class="pl-3"
                    style="font-size: 0.8em"
                    :href="linkData['url']"
                    >{{ linkData["name"] }}</a
                  >
                </div>
              </div>
            </div>
            <!-- 透明ボタン -->
            <div class="pulldown-button">
              <img
                :class="{ openAcordionbutton: isOpen }"
                src="../assets/pulldown-button-down.svg"
                style="opacity: 0"
              />
            </div>
          </div>
          <!-- MyNoteに追加ボタン -->
          <Button myNote @click="myNoteBtnClicked">質問リストに追加</Button>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import Button from "./parts/Button.vue";
import ImageViewDialog from "./templates/ImageViewDialog.vue";
export default {
  name: "QuestionAccordion",
  props: ["questionValue", "questionKey"],
  emits: ["start-alert"],
  components: {
    Button,
    ImageViewDialog,
  },
  data() {
    return {
      type: "questions",
      isOpen: false,
      isImageDialogVisible: false,
      clickedImg: {},
    };
  },
  methods: {
    myNoteBtnClicked() {
      this.$emit("start-alert");
      this.$store.commit("countAddQuestion");
      this.$store.commit("addMyNote", {
        type: this.type,
        key: this.questionKey,
        question: this.questionValue.ques,
      });
    },
    openImgDialog(data) {
      this.clickedImg = [data];
      this.isImageDialogVisible = true;
    },
  },
};
</script>
<style scoped>
p {
  font-weight: var(--medium);
}
.accordion {
  max-width: 100%;
  margin: 0.5em auto;
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
  border-radius: 0.3em 0.3em 0 0;
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

.pulldown-button {
  margin-left: auto;
}
.openAcordionbutton {
  transform: scaleY(-1);
}

/* transition */
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

.accordion-content {
  background-color: var(--white);
  padding: 0.5em 1em 1.4em 1em;
  border-radius: 0 0 0.3em 0.3em;
}

.answer-box {
  padding: 0em;
  display: flex;
  align-items: center;
  padding-bottom: 1em;
}
</style>
