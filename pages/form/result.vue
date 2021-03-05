<template>
  <div>
    <h1>Form Result</h1>
    <h3>{{ body }}</h3>
  </div>
</template>
<script>
// import queryString from 'querystring';

export default {
  // middleware: 'post-request-handler',
  asyncData ({ req }) {
    // const result = await new Promise((resolve) => {
    //   let body = '';
    //   context.req.on('data', (data) => {
    //     body += data;
    //     console.log('on body', body);
    //   });

    //   context.req.on('end', () => {
    //     body = queryString.parse(body) || {};
    //     console.log('body end', body.name);
    //     resolve({ body });
    //   });
    // });
    // return result;
    console.log(req);
    return {
      body: req.body
    };
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
