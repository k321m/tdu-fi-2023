<template>
  <!-- background -->
  <div id="particles-js"></div>
  <p>テスト</p>

  <!-- <HeaderNavBar />
  <TopTitle />
  <TopCarousel />
  <TimeTable class="mt-10" />
  <MyNoteIcon /> -->
</template>

<script>
import MyNoteIcon from "../components/MyNoteIcon.vue";
import TimeTable from "../components/TimeTable.vue";
import TopCarousel from "../components/TopCarousel.vue";
import TopTitle from "../components/TopTitle.vue";
import HeaderNavBar from "../components/HeaderNavBar.vue";

export default {
  name: "Top",
  components: {
    TopCarousel,
    TimeTable,
    MyNoteIcon,
    TopTitle,
    HeaderNavBar,
  },
};
</script>
