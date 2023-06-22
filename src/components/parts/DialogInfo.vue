<template>
  <div>
    <img :src="imgSrc" class="pr-1" />
    <p><slot /></p>
  </div>
</template>
<script>
export default {
  name: "DialogInfo",
  props: ["imgSrc"],
};
</script>
