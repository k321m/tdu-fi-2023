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
      <div class="pl-3 py-1">
        <span class="zen-kaku-medium">{{ questionValue.question }}</span>
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
            <p class="zen-kaku-bold py-3">メモ</p>
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
      console.log(this.questionKey);
      console.log(quesMyNote[this.questionKey]);
      this.memo = quesMyNote[this.questionKey].memo;
    },
    saveMemo() {
      console.log("save");
      console.log("questionkey" + this.questionKey);
      console.log(this.memo);
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
      console.log("delete:" + this.questionKey);
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
  justify-content: space-between;
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

textarea {
  padding: 10px;
  width: 100%;
  min-height: 200px;
  border: 1px solid #acaaf2;
  background-color: white;
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
