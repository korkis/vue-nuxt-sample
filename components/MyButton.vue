<template>
  <div>
    <v-btn>{{ contentText }}</v-btn>
  </div>
</template>
<script>
export default {
  props: ['content'],
  data () {
    return {
      contentText: this.content
    };
  },
  watch: {
    content (newValue) {
      this.contentText = newValue;
    }
  }
};
</script>
