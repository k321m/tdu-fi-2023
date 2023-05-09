<template>
  <div id="contents">
    <TopTitle />
    <TopCarousel />
    <TimeSchedule />
    <Map />
    <MyNoteIcon />
  </div>
</template>

<script>
import MyNoteIcon from "../components/MyNoteIcon.vue";
import TimeSchedule from "../components/TimeSchedule.vue";
import TopCarousel from "../components/TopCarousel.vue";
import TopTitle from "../components/TopTitle.vue";
import BackgroundWhite from "../components/BackgroundWhite.vue";
import Map from "../components/Map.vue";
import "../js/particles/top-particle";

export default {
  name: "Top",
  components: {
    TopCarousel,
    TimeSchedule,
    MyNoteIcon,
    TopTitle,
    BackgroundWhite,
    Map,
  },
};
</script>
