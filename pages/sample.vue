<template>
  <p v-if="$fetchState.pending">
    Fetching mountains...
  </p>
  <p v-else-if="$fetchState.error">
    An error occurred :(
  </p>
  <div v-else>
    <h1>Nuxt Mountains</h1>
    <ul>
      <li v-for="mountain of mountains" :key="mountain.title">
        {{ mountain.title }}
      </li>
    </ul>
    <v-btn @click="$fetch">
      Refresh
    </v-btn>
    <v-btn @click="refresh">
      Refresh2
    </v-btn>
    <a href="/my-axios">Move with Anchor</a>
    <v-btn @click="moveToAxios">
      Move with javascript
    </v-btn>
  </div>
</template>

<script>
export default {
  data () {
    return {
      mountains: []
    };
  },
  async fetch () {
    const res = await fetch(
      'https://api.nuxtjs.dev/mountains'
    );
    this.mountains = await res.json();
  },
  methods: {
    refresh () {
      this.$myMethod();
      this.$fetch();
    },
    moveToAxios () {
      this.$router.push('/my-axios');
    }
  }
};
</script>
