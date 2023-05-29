<template>
  <v-text-field
    :value="value"
    @input="handleInput"
    @keyup.enter="debounce(0)"
    autocomplete="off"
    v-bind="$attrs"
  />
</template>

<script>
import debounce from '../utils/debounce';
export default {
  props: {
    value: {
      type: String,
      required: true,
    }
  },
  data: () => ({
    debounce: null,
  }), 

  created() {
    this.debounce = debounce(this.handleSubmit);
  },
  methods: {
    handleSubmit() {
      this.$emit('submit');
    }
  }
};
</script>