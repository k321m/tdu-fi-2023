<template>
  <v-dialog v-model="isDeleteDialogVisible">
    <MyNoteDeleteDialog
      @close-delete-dialog="isDeleteDialogVisible = false"
      @delete-data="deleteQuestion"
    >
      <template v-slot:type>質問項目</template>
      <template v-slot:title>{{ questionValue.title }}</template>
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
        <p class="pb-1" style="font-size: 1.5em; line-height: 1em">Q</p>
        <p
          class="pl-3 mr-3"
          style="line-height: 1.3em; padding-top: 0.2em"
          :class="{ 'text-ellipsis': !isOpen }"
        >
          {{ questionValue.title }}
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
          <div class="pt-5">
            <Button defaultBorder @click="openDeleteDialog">
              リストから削除
            </Button>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import Button from "./parts/Button.vue";
import MyNoteDeleteDialog from "./MyNoteDeleteDialog.vue";
export default {
  name: "MyNoteEventAcordion",
  props: ["questionValue", "questionKey"],
  components: {
    MyNoteDeleteDialog,
    Button,
  },
  data() {
    return {
      type: "questions",
      isOpen: false,
      memo: "",
      isDeleteDialogVisible: false,
      isCopied: false,
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
      this.isCopied = true;
      navigator.clipboard.writeText(this.memo);
      setTimeout(() => {
        this.isCopied = false;
      }, 3000);
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
p {
  font-weight: var(--medium);
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
textarea {
  padding: 8px;
  width: 100%;
  border: 1px solid var(--light-purple);
  background-color: var(--white);
  overflow: scroll;
  min-height: 12em;
}
textarea:focus {
  border: 1px solid var(--dark);
  background-color: var(--white);
  outline: none;
}
.contents > div {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
