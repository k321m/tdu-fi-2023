<template>
  <div class="mission-item">
    <p class="item">
      <b><slot /></b>
    </p>
    <template v-if="isClear"><Button none>達成済み</Button></template>
    <template v-else
      ><Button pink :to="to" @click="$emit('close-dialog')"
        >挑戦する</Button
      ></template
    >
  </div>
</template>
<script>
import Button from "../parts/Button.vue";
export default {
  name: "MissionItem",
  props: {
    to: {
      type: String,
    },
    clickEvent: {
      type: Function,
    },
    isClear: {
      type: Boolean,
      default: false,
    },
  },
  emits: ["close-dialog"],
  components: {
    Button,
  },
};
</script>

<style scoped>
.mission-item {
  background-color: var(--white);
  border: 1px solid #f2f2f2;
  border-radius: 0.3em;
  min-height: 1em;
  padding: 1em;
  display: flex;
  align-items: center;
  margin-bottom: 0.4rem;
}

.item {
  flex-grow: 1;
  font-size: 0.8rem;
  padding-right: 2rem;
}

.btn {
  display: inline-block;
  padding: 0.7rem 0;
  min-height: auto;
  width: 6em;
  min-width: 6em;
  white-space: nowrap;
  text-align: center;
}
</style>
