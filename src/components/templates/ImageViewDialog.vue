<template>
  <v-dialog>
    <div class="background-dialog">
      <!-- × -->
      <div class="pb-2" style="display: flex" @click="$emit('close-dialog')">
        <div style="margin: 0 0 0 auto">
          <v-icon style="color: var(--white)">mdi-close</v-icon>
        </div>
      </div>
      <!-- 画像 -->
      <template v-for="data in imgData">
        <img
          style="width: 100%; height: auto; margin-bottom: 1em"
          :src="data"
        />
      </template>
    </div>
  </v-dialog>
</template>

<script>
export default {
  name: "ImageViewDialog",
  props: ["imgData"],
  emits: ["close-dialog"],
  data() {
    return {};
  },
};
</script>

<style scoped>
.background-dialog {
  max-width: 580px;
  width: 100%;
  height: auto;
  margin: 0 auto;
}
</style>
