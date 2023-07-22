<template>
  <v-dialog>
    <div class="background-dialog">
      <div class="pb-2" style="display: flex" @click="$emit('close-dialog')">
        <div style="margin: 0 0 0 auto">
          <v-icon style="color: var(--white)">mdi-close</v-icon>
        </div>
      </div>
      <template v-for="data in imgData">
        <img
          style="width: 100%; height: auto; margin-bottom: 1em"
          :src="data"
        />
      </template>
      <!-- <img style="width: 100%; height: auto" :src="imgData" /> -->
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
  display: flex;
  flex-direction: column;
  width: 100%;
  max-height: 90dvh;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;
}
</style>
