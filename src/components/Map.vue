<template>
  <div class="py-8">
    <div id="map" class="background py-3">
      <div class="map">
        <div class="py-4 pl-4">
          <p class="zen-kaku-h5 pl-5 pb-2">地図</p>
          <p class="hack-h2">>Map</p>
        </div>
        <div class="px-4 py-2">
          <div v-for="data in allMapData" :key="key">
            <div id="card" class="mb-2 align-end">
              <div
                class="v-responsive__sizer"
                style="padding-bottom: 75%"
              ></div>
              <div class="card-img"></div>
              <!-- :style="allLabsData[key].img" -->
              <div
                class="card-img"
                style="background-color: rgba(36, 7, 77, 0.5)"
              ></div>
              <p
                class="card-title zen-kaku-bold text-white v-responsive__sizer v-responsive__content"
              >
                <span style="font-size: 0.8rem; margin-bottom: 0.2rem">{{
                  data.site
                }}</span>
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
export default {
  name: "Map",
  data() {
    return {
      allMapData: {},
    };
  },
  mounted() {
    this.allMapData = this.$store.getters["mapStore/getAllMapData"];
    console.log(this.allMapData);
  },
};
</script>

<style scoped>
.background {
  position: relative;
  background-color: white;
  background-size: cover;
  z-index: -1; /*描画を一番下に*/
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
.card-title {
  display: inline-flex;
  flex-direction: column;
  font-size: 1.4rem;
  letter-spacing: 0rem;
  min-width: 0;
  padding: 0.8rem 1rem;
  text-align: right;
  white-space: pre-wrap;
}
</style>
