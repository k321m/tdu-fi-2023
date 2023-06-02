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
          {{ questionValue.question }}
        </p>
      </div>
      <div class="pulldown-button py-1">
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
          <div class="pt-5">
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
  background-color: #ffffff;
  display: flex;
  align-items: center;
  border-radius: 0.3em;
}
.opened-border-radius {
  border-radius: 0.3em 0.3em 0 0 !important;
}

.pulldown-button {
  margin-left: auto;
}
.accordion-content {
  background-color: #ffffff;
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
