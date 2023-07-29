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
        <v-icon>mdi-radiobox-marked</v-icon>
        <code class="hack">{{ value.code }}</code>
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
      // console.log("呼び出し");
      this.$emit("selected-value", this.selectedValue);
    },
  },
};
</script>

<style scoped>
.btn-default-border {
  display: flex;
  justify-content: flex-start;
  position: relative;
  color: #706cd9;
  border: solid var(--light-purple);
}

i {
  color: var(--light-purple);
  font-size: 2rem;
}

code {
  font-size: 1rem;
  flex-grow: 1;
  margin-left: 0.4rem;
  padding-top: 0.2rem;
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
