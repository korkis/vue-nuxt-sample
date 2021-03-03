<template>
  <div>
    <h1>Result</h1>
    <h3>{{ body.name }}</h3>
  </div>
</template>
<script>
import queryString from 'querystring';

export default {
  // middleware: 'post-request-handler',
  async asyncData (context) {
    const result = await new Promise((resolve) => {
      let body = '';
      context.req.on('data', (data) => {
        body += data;
        console.log('on body', body);
      });

      context.req.on('end', () => {
        body = queryString.parse(body) || {};
        console.log('body end', body.name);
        resolve({ body });
      });
    });
    return result;
  },
  data () {
    return {
      name: ''
    };
  },
  mounted () {
    // console.log(this.$route.query);
  }
};
</script>
