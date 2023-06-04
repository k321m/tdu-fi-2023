<template>
  <div class="background">
    {{ mynoteData }}
  </div>
</template>

<script>
export default {
  name: "MyNoteExportView",
  data() {
    return {
      mynoteData: {},
    };
  },
  mounted() {
    this.mynoteData = this.$store.getters.getMyNote;
    console.log(this.mynoteData);
  },
};
</script>

<style scoped>
.background {
  background-color: white;
  width: 100dvw;
}
</style>
