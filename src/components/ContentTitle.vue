<template>
  <div>
    <div class="py-4">
      <p class="pl-4 py-1">
        <b><slot name="jp-title"></slot></b>
      </p>
      <h1 class="hack-h1 py-1"><slot name="title"></slot></h1>
    </div>
    <div
      style="text-align: right"
      v-if="this.isHelpVisible || this.isAttentionVisible"
    >
      <v-icon @click="openHelp" v-if="this.isHelpVisible"
        >mdi-help-circle</v-icon
      >
      <router-link to="/attention#attention-mynote">
        <v-icon class="ml-2" v-if="this.isAttentionVisible"
          >mdi-alert-circle</v-icon
        >
      </router-link>
    </div>
    <div class="py-4">
      <p class="sub-strong"><slot name="info"></slot></p>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContentTitle",
  props: ["isHelpVisible", "isAttentionVisible"],
  emit: ["open-help"],
  methods: {
    openHelp() {
      this.$emit("open-help");
    },
  },
};
</script>
