<template>
  <div class="py-8">
    <v-dialog v-model="isViewDialogVisible">
      <MapViewDialog
        :mapData="clickedMapData"
        :mapId="clickedMapId"
        @close-dialog="isViewDialogVisible = false"
      />
    </v-dialog>
    <div id="map" style="padding-top: 72px; margin-top: -72px"></div>
    <div id="map" class="background">
      <div class="map">
        <div class="py-4 pl-4">
          <h4 class="pl-5 pb-2">地図</h4>
          <h1 class="hack-h1">>Map</h1>
        </div>
        <div class="px-4 py-2">
          <div v-for="(data, key) in allMapData" :key="key">
            <Card :key="key" @click="openViewDialog(data, key)" :img="data.img">
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
</template>

<script>
import MapViewDialog from "./MapViewDialog.vue";
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
    MapViewDialog,
    Card,
  },
  methods: {
    openViewDialog(data) {
      this.clickedMapData = data;
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
.background {
  position: relative;
  background-color: white;
  background-size: cover;
  z-index: 0;
  width: calc(100% - 1.4em);
  border-radius: 0.8rem 0 0 0.8rem;
  left: 1.4em;
}
.map {
  margin: 0 0 0 -24px;
}
</style>
