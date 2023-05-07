<template>
  <!-- background -->
  <BackgroundWhite />
  <TopTitle class="pt-2" />
  <TopCarousel />
  <TimeSchedule />
  <Map />
  <MyNoteIcon />
</template>

<script>
import MyNoteIcon from "../components/MyNoteIcon.vue";
import TimeSchedule from "../components/TimeSchedule.vue";
import TopCarousel from "../components/TopCarousel.vue";
import TopTitle from "../components/TopTitle.vue";
import BackgroundWhite from "../components/BackgroundWhite.vue";
import Map from "../components/Map.vue";

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
