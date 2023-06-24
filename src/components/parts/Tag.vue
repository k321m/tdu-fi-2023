<template>
  <p class="tag-item sub-strong"><slot /></p>
</template>
<script>
export default {
  name: "Button",
  props: {
    clickEvent: {
      type: Function,
    },
    button: {
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
        "sub-strong": this.myNote,
      };
    },
  },
};
</script>
