<template>
  <v-row>
    <v-col>
      <h1>
        Info2
      </h1>
    </v-col>
    <v-col>
      {{ info }}
    </v-col>
  </v-row>
</template>
<script>
export default {
  data () {
    return {
      info: 'ABC'
    };
  },
  mounted () {
    this.$nextTick(() => {
      this.$nuxt.$loading.start();
      setTimeout(() => this.$nuxt.$loading.finish(), 30000);
    });
    this.info = this.$route.currentRoute;
    console.log('$route', this.$route);
  }
};
</script>
