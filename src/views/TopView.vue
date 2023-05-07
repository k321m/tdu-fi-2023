<template>
  サンプルページです
  <router-link to="/labs">Go to labs</router-link>
</template>

<script>
import MyNoteIcon from "../components/MyNoteIcon.vue";
import TimeSchedule from "../components/TimeSchedule.vue";
import TopCarousel from "../components/TopCarousel.vue";
import TopTitle from "../components/TopTitle.vue";
import BackgroundWhite from "../components/BackgroundWhite.vue";

export default {
  name: "Top",
  components: {
    TopCarousel,
    TimeSchedule,
    MyNoteIcon,
    TopTitle,
    BackgroundWhite,
  },
};
</script>
