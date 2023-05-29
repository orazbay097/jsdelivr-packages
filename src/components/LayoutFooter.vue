<template>
  <v-footer fixed app dark>
    <v-col
      class="d-flex align-center justify-center"
      cols="12"
    >
      <a :class="$style.link" href="https://github.com/orazbay097" target="_blank">
        <IconLogoGithub class="mr-1"/>
      </a>

      Orazbay
    </v-col>
  </v-footer>
</template>

<script>
import IconLogoGithub from './IconLogoGithub.vue';

export default {
  components: {
    IconLogoGithub,
  }
};
</script>

<style module>
.link {
  display: contents;
}
</style>