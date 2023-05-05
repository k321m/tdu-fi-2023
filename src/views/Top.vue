<template>
  <p>Topページです.</p>
  <TopCarousel />
  <br />
</template>

<script>
import TopCarousel from "../components/TopCarousel.vue";
import MyNoteManual from "../components/MyNoteManual.vue";

export default {
  name: "Top",
  components: {
    TopCarousel,
    MyNoteManual,
  },
};
</script>
