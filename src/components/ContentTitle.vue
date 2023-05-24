<template>
  <div>
    <div class="py-4">
      <p class="zen-kaku-bold pl-4 py-1"><slot name="jp-title"></slot></p>
      <p class="hack-h2 py-1"><slot name="title"></slot></p>
    </div>
    <div style="text-align: right" @click="openHelp" v-if="this.isHelpVisible">
      <img src="../assets/icon-help.svg" />
    </div>
    <div class="py-4">
      <p class="zen-kaku-medium"><slot name="info"></slot></p>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContentTitle",
  props: ["isHelpVisible"],
  emit: ["open-help"],
  methods: {
    openHelp() {
      this.$emit("open-help");
    },
  },
};
</script>
