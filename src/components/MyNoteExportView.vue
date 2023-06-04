<template>
  <div class="background">
    <div class="pb-4">
      <h2 class="pb-3">イベントメモ</h2>
      <div v-for="data in mynoteData['events']">
        <div class="pb-2">
          <h3>{{ data.title }}</h3>
          <p v-if="data.memo != ''">{{ data.memo }}</p>
          <p v-else>-</p>
        </div>
      </div>
    </div>
    <div class="pb-4">
      <h2 class="pb-3">Q&Aメモ</h2>
      <div v-for="data in mynoteData['questions']">
        <div class="pb-2">
          <h3>{{ data.question }}</h3>
          <p v-if="data.memo != ''">{{ data.memo }}</p>
          <p v-else>-</p>
        </div>
      </div>
    </div>
    <div class="pb-4">
      <h2 class="pb-3">なんでもメモ</h2>
      <div class="pb-2">
        <p>{{ mynoteData["anything"].memo }}</p>
      </div>
    </div>
    <!-- {{ mynoteData }} -->
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
