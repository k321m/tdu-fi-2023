<template>
  <router-link
    class="btn btn-default"
    :class="setButtonStyle()"
    :to="`${to}`"
    @click="handleClick()"
  >
    <slot />
  </router-link>
</template>
<script>
export default {
  name: "Button",
  props: {
    to: {
      type: String,
      default: "",
    },
    clickEvent: {
      type: Function,
    },
    myNote: {
      type: Boolean,
      default: false,
    },
    default: {
      type: Boolean,
      default: false,
    },
    desable: {
      type: Boolean,
      default: false,
    },
    defaultBorder: {
      type: Boolean,
      default: false,
    },
    circleBorder: {
      type: Boolean,
      default: false,
    },
    pink: {
      type: Boolean,
      default: false,
    },
    pinkBorder: {
      type: Boolean,
      default: false,
    },
    programming: {
      type: Boolean,
      default: false,
    },
    none: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    handleClick() {
      if (this.clickEvent) {
        this.clickEvent();
      }
    },
    setButtonStyle() {
      return {
        "btn-myNote": this.myNote,
        "btn-default": this.default,
        "btn-desable": this.desable,
        "btn-default-border": this.defaultBorder,
        "btn-circle-border": this.circleBorder,
        "btn-pink": this.pink,
        "btn-pink-border": this.pinkBorder,
        "btn-programming": this.programming,
        "btn-none": this.none,
        "btn-animation": !this.desable && !this.none,
      };
    },
  },
};
</script>
