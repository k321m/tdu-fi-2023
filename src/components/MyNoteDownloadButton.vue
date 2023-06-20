<template>
  <div class="py-2">
    <Button pink>PDFダウンロード</Button>
  </div>
</template>

<script>
import Button from "./parts/Button.vue";
export default {
  name: "MyNoteDownloadButton",
  components: {
    Button,
  },
};
</script>
