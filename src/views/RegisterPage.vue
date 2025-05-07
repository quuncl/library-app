<template>
 <Header />
  <div class="mt-40 flex justify-center items-center px-4">
    <div class="bg-[#1a1a1a] border-4 border-yellow-600 rounded-2xl p-10 shadow-2xl w-full max-w-md min-w-[350px] relative text-yellow-100 backdrop-blur-lg bg-opacity-70">
      <h2 class="text-3xl font-cursive text-yellow-300 mb-8 text-center drop-shadow-glow">
        Регистрация
      </h2>

      <form @submit.prevent="register" class="space-y-6 text-lg">
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
  class="w-full py-4 px-6 rounded-xl font-semibold text-xl bg-gradient-to-r from-yellow-500 to-yellow-600 text-black shadow-lg hover:scale-105 transition font-cursive"
>
  Зарегистрироваться
</button>

      </form>
 <p class="mt-4 text-center text-yellow-200 font-cursive">
        Все таки есть профиль? 
        <router-link to="/login" class="text-blue-400 underline hover:text-yellow-300 transition">
          Перейдите на страницу входа
        </router-link>
      </p>
    </div>
  </div>
</template>

<script>
import Header from '@/components/HeaderSite.vue';
import axios from 'axios';
import Swal from 'sweetalert2';
import bcrypt from 'bcryptjs';

export default {
  name: 'RegisterPage',
  components: {
    Header // Используем правильное имя компонента
  },
  data() {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    async register() {
      if (!this.username || !this.password) {
        Swal.fire({
          title: "Требуются Имя и Пароль!",
          icon: "error",
          timer: 2000,
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          background: '#4B0082',
          color: '#FFD700'
        });
        return;
      }

      try {
        const { data: existingUsers } = await axios.get(
          'http://localhost:3000/users?username=' + this.username
        );

        if (existingUsers.length > 0) {
          Swal.fire({
            title: "Имя уже занято!",
            icon: "error",
            timer: 2000,
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            background: '#4B0082',
            color: '#FFD700'
          });
          return;
        }

        const salt = bcrypt.genSaltSync(10);
        const hashedPassword = bcrypt.hashSync(this.password, salt);

        await axios.post('http://localhost:3000/users', {
          username: this.username,
          password: hashedPassword
        });

        await this.$router.push('/login');
        Swal.fire({
          title: "Регистрация успешна!",
          icon: "success",
          timer: 2000,
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          background: '#4B0082',
          color: '#FFD700'
        });
      } catch (error) {
        Swal.fire({
          title: "Ошибка регистрации!",
          text: error.message,
          icon: "error",
          timer: 2000,
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          background: '#4B0082',
          color: '#FFD700'
        });
      }
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

.swal2-popup {
  border-radius: 15px;
  font-family: 'Garamond', serif;
  background-color: #1a1a1a;
  color: #ffd700;
}

.swal2-title {
  font-size: 1.5rem;
  font-weight: bold;
  text-align: center;
}

.swal2-content {
  font-size: 1.2rem;
  text-align: center;
}

.swal2-error {
  background-color: #4B0082;
}

.swal2-error-title {
  color: #FFD700;
}

.swal2-success {
  background-color: #006400;
}

.swal2-success-title {
  color: #FFD700;
}

@keyframes twinkle {
  0% { transform: translateY(0); }
  100% { transform: translateY(-1000px); }
}

</style>