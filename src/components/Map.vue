<template>
  <div class="py-8">
    <div id="map" class="background py-3">
      <div class="map">
        <div class="py-4 pl-4">
          <p class="zen-kaku-h5 pl-5 pb-2">地図</p>
          <p class="hack-h2">>Map</p>
        </div>
        <div class="px-4">
          <div class="py-2">
            <v-card height="14em" color="gray">
              <v-img
                class="align-end text-white"
                src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
                cover
              >
                <v-card-title>Top 10 Australian beaches</v-card-title>
              </v-img>
            </v-card>
          </div>
          <div class="py-2">
            <v-card height="14em" color="gray">
              <v-img
                class="align-end text-white"
                src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
                cover
              >
                <v-card-title>Top 10 Australian beaches</v-card-title>
              </v-img>
            </v-card>
          </div>
          <div class="py-2">
            <v-card height="14em" color="gray">
              <v-img
                class="align-end text-white"
                src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
                cover
              >
                <v-card-title>Top 10 Australian beaches</v-card-title>
              </v-img>
            </v-card>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Map",
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
</style>
