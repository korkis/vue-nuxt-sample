<template>
  <div>
    <h1>
      Info
    </h1>
    <v-row>
      <v-col>
        Info: {{ info }}
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <p>env.abc : {{ abc }}</p>
      </v-col>
    </v-row>
  </div>
</template>
<script>
export default {
  data () {
    return {
      info: '',
      abc: process.env.abc
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
