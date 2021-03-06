<template>
  <div>
    <h1>Data fetched using asyncData</h1>
    <h2>test: {{ test }}</h2>
    <ul>
      <li v-for="mountain in mountains" :key="mountain.title">
        <!-- <NuxtLink
          :to="{ name: 'mountains-slug', params: { slug: mountain.slug } }"
        > -->
        {{ mountain.title }}
        <!-- </NuxtLink> -->
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  asyncData ({ req, redirect }) {
    console.log('asyncData', process.client ? 'client' : 'server');
    console.log('req', req);
    redirect('/info');
  },
  data () {
    return {
      test: 'test',
      mountains: []
    };
  },
  async fetch () {
    console.log('fetch', process.client ? 'client' : 'server');
    this.mountains = await this.$axios.$get('/mountains');
    this.test = 'test123';
    // console.log('test', this.test);
  },
  mounted () {
    console.log('mounted');
  },
  created () {
    console.log('created', process.client ? 'client' : 'server');
  }
};
</script>
