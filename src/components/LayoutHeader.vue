<template>
  <v-app-bar app fixed>
    <DebouncedSearchField v-model="searchText" @submit="handleSearchSubmit" />
  </v-app-bar>
</template>
<script>
import { mapActions } from 'vuex';
import DebouncedSearchField from './DebouncedSearchField.vue';

export default {
  components: {
    DebouncedSearchField,
  },
  computed: {
    searchText: {
      get() {
        return this.$store.state.searchText;
      },
      set(value) {
        this.$store.commit('setPackagesListSearchText', value);
      }
    }
  },
  methods: {
    ...mapActions(['getPackagesList']),
    handleSearchSubmit() {
      this.$store.commit('setPackagesListPage', 1);

      this.getPackagesList();  
    }
  }
};
</script>