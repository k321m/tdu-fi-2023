<template>
  <div class="card mb-2 align-end mx-1">
    <div class="v-responsive__sizer" style="padding-bottom: 75%"></div>
    <div class="card-img blur" :style="setImgStyle()"></div>
    <h3 class="card-title white v-responsive__sizer v-responsive__content">
      <span class="small" style="margin-bottom: 0.2em">
        <slot name="sub-title" />
      </span>
      <slot name="title" />
    </h3>
  </div>
</template>
<script>
export default {
  name: "Card",
  props: {
    img: {
      type: String,
    },
    clickEvent: {
      type: Function,
    },
  },
  methods: {
    handleClick() {
      if (this.clickEvent) {
        this.clickEvent();
      }
    },
    setImgStyle() {
      return "background-image: url(" + this.img + ")";
    },
  },
};
</script>
<style scoped>
.card {
  z-index: 0;
  height: 14em;
  display: flex;
  max-height: 100%;
  max-width: 100%;
  overflow: hidden;
  position: relative;
  box-shadow: 0px 2px 1px -1px var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, 0.2)),
    0px 1px 1px 0px var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, 0.14)),
    0px 1px 3px 0px var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, 0.12));
  border-radius: 0.2rem;
}
.card .card-img {
  z-index: -1;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
}

.card .card-img::after {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: transparent
    linear-gradient(0deg, rgb(6 9 61 / 70%) 0%, rgba(36, 7, 77, 0.5) 50%) 0% 0%
    no-repeat padding-box;
  /* background-color: rgba(36, 7, 77, 0.5); */
}
.card-title {
  display: inline-grid;
  overflow-wrap: break-word;
  letter-spacing: 0rem;
  min-width: 0;
  padding: 0.8rem 1rem;
  text-align: right;
  white-space: pre-line;
}

h3 {
  font-size: 1.28em;
}
</style>
