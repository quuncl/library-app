<template>
  <Header />
  <div class="mt-40 flex justify-center items-center px-4">
    <div class="bg-[#1a1a1a] border-4 border-yellow-600 rounded-2xl p-10 shadow-2xl w-full max-w-md min-w-[350px] relative text-yellow-100 backdrop-blur-lg bg-opacity-70">
      <h2 class="text-3xl font-cursive text-yellow-300 mb-8 text-center drop-shadow-glow">
        Вход
      </h2>

      <form @submit.prevent="login" class="space-y-6 text-lg">
        <input
          v-model="username"
          placeholder="Имя Магистра"
          class="w-full px-5 py-4 rounded-xl bg-black text-yellow-100 border border-yellow-500 focus:ring-2 focus:ring-yellow-400 font-cursive transition text-xl"
        />
        <input
          v-model="password"
          type="password"
          placeholder="Пароль"
          class="w-full px-5 py-4 rounded-xl bg-black text-yellow-100 border border-yellow-500 focus:ring-2 focus:ring-yellow-400 font-cursive transition text-xl"
        />

        <button
          type="submit"
          class="w-full py-4 px-6 rounded-xl font-semibold text-xl bg-gradient-to-r from-yellow-500 to-yellow-700 text-black shadow-lg hover:scale-105 transition font-cursive"
        >
          Войти
        </button>
      </form>

      <p class="mt-8 text-center font-cursive text-yellow-200 text-lg">
        Нет аккаунта?
        <button
          @click="goToRegister"
          class="text-blue-400 underline hover:text-yellow-300 transition"
        >
          Зарегистрируйтесь здесь
        </button>
      </p>
    </div>
  </div>
</template>



<script>
import Header from '@/components/HeaderSite.vue'; // Импорт компонента Header
import axios from 'axios'; // Импорт axios
import { mapState } from 'vuex'; // Для Vuex
import store from '../store/store'; // Убедитесь, что путь правильный
import Swal from 'sweetalert2';
import bcrypt from 'bcryptjs';

export default {
  name: 'LoginPage',
  components: {
    Header // Используем правильное имя компонента
  },
  data() {
    return {
      username: '',
      password: ''
    };
  },
  computed: {
    ...mapState(['isAuthenticated', 'token'])
  },
  methods: {
    showToast(type, message) {
      Swal.fire({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,
        icon: type,
        title: message,
        customClass: {
          popup: `swal2-toast swal2-toast-${type}`,
        }
      });
    },
    showError(message) {
      this.showToast('error', message);
    },
    showSuccess(message) {
      this.showToast('success', message);
    },
    async login() {
      try {
        if (!this.username || !this.password) {
          this.showError("Имя и пароль обязательны!");
          return;
        }

        // Получение пользователя по имени
        const response = await axios.get(`http://localhost:3000/users?username=${this.username}`);
        const users = response.data;

        if (users.length === 0) {
          this.showError('Не верный логин или пароль!');
          return;
        }

        const user = users[0];

        // Проверка пароля
        const isPasswordCorrect = bcrypt.compareSync(this.password, user.password);

        if (isPasswordCorrect) {
          const token = 'your_generated_token'; // здесь можно сгенерировать токен
          localStorage.setItem('token', token);
          store.isAuthenticated = true;
          store.token = token;
          await this.$router.push('/');
          this.showSuccess("Вы успешно вошли!");
        } else {
          this.showError('Не верный логин или пароль!');
        }
      } catch (error) {
        console.error(error);
        this.showError(`Ошибка при входе: ${error.message}`);
      }
    },
    goToRegister() {
      this.$router.push('/register');
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Garamond&display=swap');

.font-cursive {
  font-family: 'Garamond', serif;
}

.drop-shadow-glow {
  text-shadow: 0 0 10px #ffd700, 0 0 20px #ffd700, 0 0 30px #ffd700;
}

@keyframes bounce {
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-10px);
  }
  60% {
    transform: translateY(-5px);
  }
}
.animate-bounce {
  animation: bounce 2s infinite;
}

</style>