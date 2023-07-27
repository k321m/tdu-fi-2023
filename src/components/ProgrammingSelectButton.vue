<template>
  <div class="choices-button" v-for="(value, key) in this.choices" :key="value">
    <div class="my-2">
      <input
        type="radio"
        :id="key"
        :value="key"
        name="choice"
        v-model="selectedValue"
        @change="selected()"
      />
      <label :for="key" class="btn btn-default-border">
        <v-icon>mdi-radiobox-marked</v-icon><code>{{ value.code }}</code>
      </label>
    </div>
  </div>
</template>
<script>
export default {
  name: "ProgrammingSelectButton",
  props: ["choices"],
  emits: ["selected-value"],
  data() {
    return {
      selectedValue: String,
    };
  },
  methods: {
    selected() {
      console.log("呼び出し");
      this.$emit("selected-value", this.selectedValue);
    },
  },
};
</script>

<style scoped>
.btn-default-border {
  display: flex;
  justify-content: center;
  position: relative;
  color: #706cd9;
  border: solid var(--light-purple);
}

i {
  position: absolute;
  left: 0.3em;
  color: var(--light-purple);
  font-size: 2rem;
}

.choices-button code {
  font-family: hack, sans-serif;
  font-weight: 400;
  font-size: 1rem;
  font-style: normal;
  word-wrap: break-word;
}

input:checked + label {
  border: solid var(--dark);
  color: var(--dark);
}

input:checked ~ label i {
  color: var(--dark);
}

input {
  display: none;
}
</style>
