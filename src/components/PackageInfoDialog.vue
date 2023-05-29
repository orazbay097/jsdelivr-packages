<template>
    <v-dialog :value="showDialog" @click:outside="handleClickOutside" max-width="700">
        <v-card v-if="showDialog">
          <v-card-title>
            {{ packageInfo.name }}
          </v-card-title>

          <v-card-text>
            <v-row>
              <v-col cols="12">
                <v-textarea label="Description" :value="packageInfo.description" readonly rows="1"/>
              </v-col>

              <v-col cols="12" sm="6" v-if="packageInfo.author">
                <v-text-field label="Author" :value="packageInfo.author.email" readonly/>
              </v-col>

              <v-col cols="12" sm="6">
                <v-text-field label="Publisher" :value="packageInfo.publisher.email" readonly/>
              </v-col>

              <v-col cols="12" sm="6">
                <v-text-field label="Scope" :value="packageInfo.scope" readonly/>
              </v-col>

              <v-col cols="12" sm="6">
                <v-text-field label="Version" :value="packageInfo.version" readonly/>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
    </v-dialog>
</template>

<script>
export default {
  props: {
    packageInfo: {
      type: Object,
    }
  },
  computed: {
    showDialog() {
      return !!this.packageInfo;
    }
  },
  methods: {
    handleClickOutside() {
      this.$emit('close');
    }
  }
};
</script>