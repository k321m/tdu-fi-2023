<template>
  <v-dialog v-model="isDeleteDialogVisible">
    <MyNoteDeleteDialog
      @close-delete-dialog="isDeleteDialogVisible = false"
      @delete-data="deleteQuestion"
    >
      <template v-slot:type>質問項目</template>
      <template v-slot:title>{{ questionValue.question }}</template>
      <template v-slot:message-caution>メモの内容が失われます</template>
    </MyNoteDeleteDialog>
  </v-dialog>
  <div class="accordion">
    <div class="title-box">
      <div style="display: flex">
        <p
          class="zen-kaku-medium pb-1"
          style="font-size: 1.5em; line-height: 0"
        >
          Q
        </p>
      </div>
      <div class="question-box pl-3">
        <span class="zen-kaku-medium question">
          {{ questionValue.question }}
        </span>
      </div>
      <div class="pulldown-button pa-1" @click="isOpen = !isOpen">
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
            <div class="pb-1" style="display: flex; align-items: flex-end">
              <p class="zen-kaku-bold py-3">メモ</p>
              <v-icon
                style="
                  margin: 0 0 0 auto;
                  padding-right: 0.4rem;
                  font-size: 1rem;
                  color: #010326;
                "
                @click="copyMemoToClipboard"
                >mdi-clipboard-multiple</v-icon
              >
            </div>
            <textarea
              @blur="saveMemo()"
              placeholder="重要なことはメモに残そう！"
              v-model="memo"
            ></textarea>
          </div>
          <div class="py-5">
            <div
              class="default-border-btn btn-animation"
              @click="openDeleteDialog"
            >
              <p class="zen-kaku-bold">リストから削除</p>
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
  props: ["questionValue", "questionKey"],
  components: {
    MyNoteDeleteDialog,
  },
  data() {
    return {
      type: "questions",
      isOpen: false,
      memo: "",
      isDeleteDialogVisible: false,
    };
  },
  methods: {
    updateMemo() {
      var quesMyNote = this.$store.getters.getMyNoteQuestions;
      this.memo = quesMyNote[this.questionKey].memo;
    },
    saveMemo() {
      this.$store.commit("saveMemo", {
        type: this.type,
        key: this.questionKey,
        memo: this.memo,
      });
    },
    openDeleteDialog() {
      this.isDeleteDialogVisible = !this.isDeleteDialogVisible;
    },
    deleteQuestion() {
      this.$store.commit("deleteMyNote", {
        type: this.type,
        key: this.questionKey,
      });
    },
    openAcordionStyleSet() {
      return {
        openAcordionbutton: this.isOpen,
        closeAcordionbutton: !this.isOpen,
      };
    },
    copyMemoToClipboard() {
      navigator.clipboard.writeText(this.memo);
    },
  },
  mounted() {
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
  align-items: center;
  justify-content: center;
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

/* .question-box {
  width: 100%;
}

.question {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
} */

textarea {
  padding: 10px;
  width: 100%;
  min-height: 200px;
  border: 1px solid #acaaf2;
  background-color: white;
  overflow: scroll;
}
.contents > div {
  display: flex;
  align-items: center;
  justify-content: center;
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
