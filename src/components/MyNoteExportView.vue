<template>
  <div class="background">
    <div class="pb-4">
      <h2 class="pb-3">イベントメモ</h2>
      <div v-for="data in eventsData">
        <div class="pb-2">
          <h3>{{ data.title }}</h3>
          <p v-if="data.memo != ''">{{ data.memo }}</p>
          <p v-else>-</p>
        </div>
      </div>
    </div>
    <div class="pb-4">
      <h2 class="pb-3">Q&Aメモ</h2>
      <div v-for="data in quesData">
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
        <p>{{ anyData.memo }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MyNoteExportView",
  props: ["eventsData", "quesData", "anyData"],
};
</script>

<style scoped>
.background {
  background-color: white;
  width: 100dvw;
}
</style>
