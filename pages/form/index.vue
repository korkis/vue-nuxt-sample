<template>
  <div>
    Hello
    <form method="post" action="/form/result">
      <v-text-field name="username" type="text" />
      <v-btn type="submit">
        전송
      </v-btn>
    </form>
  </div>
</template>
