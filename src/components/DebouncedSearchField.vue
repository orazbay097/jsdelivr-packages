<template>
  <v-text-field
    :value="value"
    @input="handleInput"
    @keyup.enter="debounceFn(0)"
    autocomplete="off"
    v-bind="$attrs"
    placeholder="Type package name"
  ></v-text-field>
</template>

<script>
import debounce  from "../utils/debounce";
export default {
  props: ["value"],
  data() {
    return {
      debounceFn: null,
    };
  },
  methods: {
    handleInput(e) {
      this.$emit("input", e);
      if (!this.debounceFn) return;
      this.debounceFn(750);
    },
    handleSubmit() {
      this.$emit("submit");
    },
  },
  created() {
    this.debounceFn = debounce(this.handleSubmit);
  },
};
</script>
