<template>
  <v-dialog>
    <slot name="alert" />
    <div class="background-dialog pt-5 px-5 pb-8">
      <div style="display: flex; justify-content: flex-end">
        <v-icon @click="$emit('close-dialog')">mdi-close</v-icon>
      </div>
      <div class="pb-4">
        <h4 class="pb-2"><slot name="sub-title" /></h4>
        <h2><slot name="title" /></h2>
      </div>
      <div class="dialog-info pb-4">
        <slot name="info" />
      </div>

      <slot name="body-title" />
      <div
        class="scroll-contents"
        style="font-size: 0.9em; padding-bottom: 1em"
      >
        <slot name="body" />
      </div>
      <div class="footer mt-6">
        <slot name="footer" />
      </div>
    </div>
  </v-dialog>
</template>
<script>
export default {
  name: "Dialog",
  props: {
    img: {
      type: Object,
    },
    clickEvent: {
      type: Function,
    },
    isViewDialog: false,
  },
  emits: ["close-dialog"],
  methods: {
    handleClick() {
      if (this.clickEvent) {
        this.clickEvent();
      }
    },
    setImgStyle() {
      return "background-image: url(" + this.img + ")";
    },
  },
};
</script>
<style scoped>
.background-dialog {
  display: flex;
  flex-direction: column;
  width: 90dvw;
  max-width: 400px;
  min-height: 400px;
  max-height: 648px;
  background-color: white;
  border-radius: 0.8rem;
  margin: auto;
}
</style>
