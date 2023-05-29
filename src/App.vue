<template>
  <v-app>
    <LayoutHeader/>
    
    <v-main>
      <PackagesList/>
    </v-main>
  
   <LayoutFooter />
  </v-app>
</template>

<script>
import LayoutHeader from './components/LayoutHeader.vue';
import LayoutFooter from './components/LayoutFooter';
import PackagesList from './components/PackagesList.vue';

export default {
  name: 'App',

  components: {
    LayoutHeader,
    LayoutFooter,
    PackagesList,
  },
};
</script>
