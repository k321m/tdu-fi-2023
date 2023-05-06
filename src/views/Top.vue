<template>
  <p>Topページです.</p>
  <TopCarousel />
  <TimeTable class="mt-10" />
  <MyNoteIcon />
</template>

<script>
import MyNoteIcon from "../components/MyNoteIcon.vue";
import TimeTable from "../components/TimeTable.vue";
import TopCarousel from "../components/TopCarousel.vue";

export default {
  name: "Top",
  components: {
    TopCarousel,
    TimeTable,
    MyNoteIcon,
  },
};
</script>
