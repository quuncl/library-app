import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // Импортируйте router
import '../src/style/index.css'; 

const app = createApp(App);
app.use(router); // Используйте router

app.mount('#app'); // Монтируйте приложение
