<template>
  <div>
    <div class="py-4">
      <p class="zen-kaku-bold pl-4 py-1"><slot name="jp-title"></slot></p>
      <p class="hack-h2 py-1"><slot name="title"></slot></p>
    </div>
    <div
      style="text-align: right"
      v-if="this.isHelpVisible || this.isAttentionVisible"
    >
      <v-icon style="color: #010326" @click="openHelp" v-if="this.isHelpVisible"
        >mdi-help-circle</v-icon
      >
      <router-link to="/attention#attention-mynote">
        <v-icon
          class="ml-2"
          style="color: #010326"
          v-if="this.isAttentionVisible"
          >mdi-alert-circle</v-icon
        >
      </router-link>
    </div>
    <div class="py-4">
      <p class="zen-kaku-medium"><slot name="info"></slot></p>
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
