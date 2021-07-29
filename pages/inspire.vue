<template>
  <v-row>
    <v-col class="text-center">
      <img
        src="/v.png"
        alt="Vuetify.js"
        class="mb-5"
      >
      <blockquote class="blockquote">
        &#8220;First, solve the problem. Then, write the code.&#8221;
        <footer>
          <small>
            <em>&mdash;John Johnson</em>
          </small>
        </footer>
      </blockquote>
    </v-col>
    <v-col>
      <v-btn @click="changeContent">
        변경
      </v-btn>
      <my-button :content="content" />
    </v-col>
  </v-row>
</template>
<script>
import MyButton from '~/components/MyButton.vue';
export default {
  components: { MyButton },
  data () {
    return {
      content: 'HI'
    };
  },
  methods: {
    changeContent () {
      this.content = '변경 버튼';
    }
  }
};
</script>
