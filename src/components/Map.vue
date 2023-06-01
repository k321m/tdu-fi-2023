<template>
  <div class="py-8">
    <v-dialog v-model="isViewDialogVisible">
      <MapViewDialog
        :mapData="clickedMapData"
        @close-dialog="isViewDialogVisible = false"
      />
    </v-dialog>
    <div id="map" class="background">
      <div class="map">
        <div class="py-4 pl-4">
          <p class="zen-kaku-h5 pl-5 pb-2">地図</p>
          <p class="hack-h2">>Map</p>
        </div>
        <div class="px-4 py-2">
          <div v-for="(data, key) in allMapData" :key="key">
            <div
              id="card"
              class="mb-2 align-end"
              :key="key"
              @click="openViewDialog(data)"
            >
              <div
                class="v-responsive__sizer"
                style="padding-bottom: 75%"
              ></div>
              <div class="card-img blur" :style="data.img"></div>
              <div
                class="card-img"
                style="background-color: rgba(36, 7, 77, 0.583)"
              ></div>
              <p
                class="card-title zen-kaku-bold text-white v-responsive__sizer v-responsive__content"
              >
                <span style="font-size: 1.1rem; margin-bottom: 0.2rem">
                  {{ data.site }}
                </span>
                {{ data.title }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MapViewDialog from "./MapViewDialog.vue";
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
  },
  methods: {
    openViewDialog(data) {
      this.clickedMapData = data;
      this.isViewDialogVisible = true;
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
  width: calc(100% - 24px);
  border-radius: 30px 0px 0px 30px;
  left: 24px;
}
.map {
  margin: 0 0 0 -24px;
}

#card {
  z-index: 0;
  height: 12.5em;
  display: flex;
  max-height: 100%;
  max-width: 100%;
  overflow: hidden;
  position: relative;
  box-shadow: 0px 2px 1px -1px var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, 0.2)),
    0px 1px 1px 0px var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, 0.14)),
    0px 1px 3px 0px var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, 0.12));
  border-radius: 0.2rem;
}
#card .card-img {
  z-index: -1;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
}

.blur {
  filter: blur(0.2rem);
}
.card-title {
  display: inline-flex;
  flex-direction: column;
  font-size: 1.6rem;
  letter-spacing: 0rem;
  min-width: 0;
  padding: 0.8rem 1rem;
  text-align: right;
  white-space: pre-wrap;
}
</style>
