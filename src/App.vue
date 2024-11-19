<template>
  <v-app>
    <v-main>
      <MessageGenerator />
    </v-main>
  </v-app>
</template>

<script>
import MessageGenerator from './components/MessageGenerator.vue';

export default {
  name: 'App',
  components: {
    MessageGenerator,
  },
};
</script>

<style>
  body {
  font-family: 'Poppins', sans-serif;
  margin: 0;
  padding: 0;
  background: linear-gradient(135deg, #0f2027, #203a43, #2c5364);
  color: white;
}
</style>
