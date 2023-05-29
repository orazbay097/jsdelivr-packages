<template>
  <v-app-bar app fixed>
    <DebouncedSearchField />
  </v-app-bar>
</template>
<script>
import DebouncedSearchField from './DebouncedSearchField.vue';

export default {
  components: {
    DebouncedSearchField,
  }
};
</script>