<template>
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
          <p
            class="zen-kaku-medium pb-1"
            style="font-size: 1.5em; line-height: 1em"
          >
            Q
          </p>
          <p
            class="pl-3 pr-3 zen-kaku-medium"
            style="line-height: 1.3em; padding-top: 0.2em"
            :class="{ 'text-ellipsis': !isOpen }"
          >
            質問質問質問質問質問質問質問質問質問質問質問質問質問質問質問質問質問質問質問質問質問質問質問質問質問質問質問質問質問質問質問質問
          </p>
        </div>
        <div class="pulldown-button">
          <img
            :class="{ openAcordionbutton: isOpen }"
            src="../assets/pulldown-button-down.svg"
          />
        </div>
      </div>
      <!-- 回答エリア -->
      <transition name="open">
        <div class="accordion-content" v-if="isOpen">
          <div class="answer-box">
            <div class="text-area">
              <p
                class="zen-kaku-medium pb-1"
                style="font-size: 1.5em; line-height: 1em"
              >
                A
              </p>
              <div style="display: flex; flex-direction: column" class="pb-2">
                <!-- 回答 -->
                <p
                  class="pl-3 pr-3 zen-kaku-medium pb-2"
                  style="line-height: 1.3em; padding-top: 0.2em"
                >
                  回答回答回答回答回答回答回答回答回答回答回答回答回答回答回答回答回答回答回答回答回答回答回答回答回答回答
                </p>
                <!-- リンク -->
                <a class="pl-3" style="font-size: 0.8em" href=""
                  >▶︎ リンクがあればここに貼る</a
                >
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
          <button class="myNote-btn btn-animation zen-kaku-bold">
            MyNoteに追加
          </button>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  name: "QuestionAccordion",
  props: ["questionValue", "questionKey"],
  data() {
    return {
      type: "questions",
      isOpen: false,
    };
  },
  methods: {},
};
</script>
<style scoped>
p {
  color: #010326;
}
.accordion {
  max-width: 100%;
  margin: 0.5em auto;
}
.title-box {
  min-height: 1em;
  padding: 1em;
  background-color: #ffffff;
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
  background-color: #ffffff;
  padding: 0.5em 1em 1.4em 1em;
  border-radius: 0 0 0.3em 0.3em;
}

.answer-box {
  padding: 0em;
  display: flex;
  align-items: center;
  padding-bottom: 1em;
}

.myNote-btn {
  width: 100%;
  font-size: 0.8em;
}
a {
  text-decoration: none;
  color: #010326;
}
</style>
