<template>
  <div id="contents">
    <TopTitle />
    <TopCarousel />
    <TimeSchedule @open-map="openMap" />
    <Map ref="mapRef" />
    <MyNoteIcon />
  </div>
</template>

<script>
import MyNoteIcon from "../components/MyNoteIcon.vue";
import TimeSchedule from "../components/TimeSchedule.vue";
import TopCarousel from "../components/TopCarousel.vue";
import TopTitle from "../components/TopTitle.vue";
import Map from "../components/Map.vue";
import "../js/particles/top-particle";
export default {
  name: "Top",
  components: {
    TopCarousel,
    TimeSchedule,
    MyNoteIcon,
    TopTitle,
    Map,
  },
  methods: {
    openMap(key) {
      this.$refs.mapRef.openViewDialogByKey(key);
    },
  },
  mounted() {
    if (this.$route.query.id) {
      this.$refs.mapRef.openViewDialogByKey(this.$route.query.id);
    }
  },
};
</script>
