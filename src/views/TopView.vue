<template>
  <div id="contents">
    <TopTitle />
    <TopCarousel />
    <TimeSchedule @open-map="openMap" />
    <Map ref="mapRef" />
    <FixedIcons />
  </div>
</template>

<script>
import FixedIcons from "../components/templates/FixedIcons.vue";
import TimeSchedule from "../components/TimeSchedule.vue";
import TopCarousel from "../components/TopCarousel.vue";
import TopTitle from "../components/TopTitle.vue";
import Map from "../components/Map.vue";
import "../js/particles/top-particle";
export default {
  name: "Top",
  emits: ["close-dialog"],
  components: {
    TopCarousel,
    TimeSchedule,
    FixedIcons,
    TopTitle,
    Map,
  },
  methods: {
    openMap(key) {
      this.$refs.mapRef.openViewDialogByKey(key);
    },
  },
};
</script>
