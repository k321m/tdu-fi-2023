<template>
  <div class="py-8">
    <ImageViewDialog
      v-model="isViewDialogVisible"
      :imgData="clickedMapData"
      @close-dialog="isViewDialogVisible = false"
    />
    <div id="map" style="padding-top: 72px; margin-top: -72px"></div>
    <div id="map">
      <div class="map py-4">
        <div class="v-container">
          <div class="py-4">
            <h4 class="pl-5 pb-2">地図</h4>
            <h1 class="hack-h1">>Map</h1>
          </div>
          <div class="py-2">
            <div v-for="(data, key) in allMapData" :key="key">
              <Card
                :key="key"
                @click="openViewDialog(data, key)"
                :img="data.img"
              >
                <template v-slot:sub-title>{{ data.site }}</template>
                <template v-slot:title>
                  {{ data.title }}
                </template>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ImageViewDialog from "./templates/ImageViewDialog.vue";
import Card from "./parts/Card.vue";
export default {
  name: "Map",
  data() {
    return {
      allMapData: {},
      isViewDialogVisible: false,
      clickedMapData: {},
    };
  },
  components: {
    ImageViewDialog,
    Card,
  },
  methods: {
    openViewDialog(data) {
      this.clickedMapData = data.img;
      this.isViewDialogVisible = true;
    },
    openViewDialogByKey(key) {
      this.openViewDialog(this.allMapData[key]);
    },
  },
  mounted() {
    this.allMapData = this.$store.getters["mapStore/getAllMapData"];
  },
};
</script>

<style scoped>
.map {
  position: relative;
  text-align: end;
}
</style>
