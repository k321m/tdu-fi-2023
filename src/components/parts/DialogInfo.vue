<template>
  <div>
    <img :src="imgSrc" class="pr-1" />
    <p class="flex-end">
      <slot name="item" />
      <span class="pl-1" style="font-size: 0.8em">
        <slot name="small-item" />
      </span>
      <slot />
    </p>
  </div>
</template>
<script>
export default {
  name: "DialogInfo",
  // props: { imgSrc: { type: String } },
  props: [imgSrc],
};
</script>
