import Vue from 'vue'
import Vuex from 'vuex'

import { searchPackages } from '../services/packages.api';
import { PAGE_SIZE } from '@/const';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    packagesList: [],
    isPackagesListLoading: false,
    packagesListPage: 1,
    packagesListSearchText: '',
    packagesListTotal: -1,
  },
  getters: {
    packagesList: (state) => state.packagesList.map(item => item.package)
  },
  mutations: {
    setPackagesList(state, packagesList) {
      state.packagesList = packagesList;
    },
    setPackagesListLoading(state, isPackagesListLoading){
      state.isPackagesListLoading = isPackagesListLoading;
    },
    setPackagesListPage(state, page) {
      state.packagesListPage = page;
    },
    setPackagesListSearchText(state, text) {
      state.packagesListSearchText = text;
    },
    setPackagesListTotal(state, total) {
      state.packagesListTotal = total;
    },
  },
  actions: {
    async getPackagesList({commit, state}) {
      try {
        commit('setPackagesListLoading', true);
        commit('setPackagesList', []);

        const res = await searchPackages(
          state.packagesListSearchText, 
          PAGE_SIZE, 
          (state.packagesListPage -1 ) * PAGE_SIZE
        );

        commit('setPackagesList', res.objects);
        commit('setPackagesListTotal', res.total);
      } catch(e) {
        console.error(e);
        alert('some error...')
      } finally {
        commit('setPackagesListLoading', false);
      }
    }
  },
  modules: {
  }
})
