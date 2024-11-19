import { createApp } from 'vue';
import App from './App.vue';
import { createVuetify } from 'vuetify';
import 'vuetify/styles'; // Importa estilos do Vuetify
import '@mdi/font/css/materialdesignicons.css'; // Ícones

const vuetify = createVuetify();

createApp(App).use(vuetify).mount('#app');
