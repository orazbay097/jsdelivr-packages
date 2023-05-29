<template>
  <div>
    <PackageInfoDialog :package-info="selectedPackage" @close="handleDialogClose"/>

    <v-data-table 
      :headers="headers" 
      :items="packagesList" 
      disable-sort
      :loading="isPackagesListLoading"
      :server-items-length="packagesListTotal"
      :footer-props="{
        'disable-items-per-page': true,
      }"
      :page="packagesListPage"
      @update:page="handlePageUpdate"
      @click:row="handleSelectPackage"
    />
</div>
</template>

<script>
import { mapActions, mapGetters, mapState } from "vuex";
import PackageInfoDialog from "./PackageInfoDialog.vue";

export default {
  components: {
    PackageInfoDialog
  },
  data: () => ({
    selectedPackage: null,
    headers: [
      {
        text: 'name',
        value: 'name'
      },
      {
        text: 'description',
        value: 'description'
      },
      {
        text: 'version',
        value: 'version'
      }
    ]
  }),
  computed: {
    ...mapState(['isPackagesListLoading', 'packagesListTotal', 'packagesListPage']),
    ...mapGetters(['packagesList']),
  },
  methods: {
    ...mapActions(['getPackagesList']),
    handlePageUpdate(page) {
      this.$store.commit('setPackagesListPage', page);
    
      this.getPackagesList();
    },
    handleSelectPackage(p) {
      this.selectedPackage = p;
    },
    handleDialogClose() {
      this.selectedPackage = null;
    }
  }
};
</script>