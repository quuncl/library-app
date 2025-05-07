<template>
  <header class="fixed top-0 left-0 right-0 z-50 bg-black shadow-md">
    <nav class="max-w-7xl mx-auto flex items-center justify-between p-4">
      <!-- Логотип -->
      <router-link to="/" class="text-2xl font-bold text-yellow-300 hover:text-yellow-300 transition-colors duration-300">
        Мой сайт
      </router-link>

      <!-- Десктопное меню -->
      <ul v-if="!hideMenu" class="hidden md:flex space-x-8 text-yellow-300 font-medium">
        <li>
          <router-link to="/" class="hover:text-yellow-300 transition-colors duration-300 text-xl">
            Главная
          </router-link>
        </li>
        <li>
          <router-link to="#facts" class="hover:text-yellow-300 transition-colors duration-300 text-xl">
            Факты
          </router-link>
        </li>
        <li>
          <router-link to="#books" class="hover:text-yellow-300 transition-colors duration-300 text-xl">
            Книги
          </router-link>
        </li>
        <li>
          <router-link to="#events" class="hover:text-yellow-300 transition-colors duration-300 text-xl">
            Мероприятия
          </router-link>
        </li>
        <li>
          <router-link to="#contacts" class="hover:text-yellow-300 transition-colors duration-300 text-xl">
            Контакты
          </router-link>
        </li>
      </ul>

      <!-- Авторизация (десктоп) -->
      <div v-if="!hideMenu" class="flex items-center space-x-6 text-[#FFCC00] hidden md:flex">
        <router-link
          v-if="!isAuthenticated"
          to="/login"
          class="hover:text-yellow-300 transition-colors duration-300 text-xl"
        >
          Войти
        </router-link>
        <button
          v-else
          @click="logout"
          class="hover:text-yellow-300 transition-colors duration-300 text-xl"
        >
          Выйти
        </button>
      </div>

      <!-- Мобильный бургер -->
      <div v-if="!hideMenu" class="md:hidden flex items-center space-x-2 ml-auto">
        <button @click="isMobileMenuOpen = !isMobileMenuOpen" class="focus:outline-none">
          <svg
            class="w-6 h-6 text-yellow-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>
    </nav>

    <!-- Мобильное меню -->
    <div v-if="isMobileMenuOpen && !hideMenu" class="md:hidden bg-black bg-opacity-90 px-4 pt-2 pb-4">
      <ul class="flex flex-col space-y-3 text-yellow-300">
        <li>
          <router-link
            to="/"
            @click="isMobileMenuOpen = false"
            class="block hover:text-yellow-300 transition-colors duration-300 text-xl"
          >
            Главная
          </router-link>
        </li>
        <li>
          <router-link
            to="#facts"
            @click="isMobileMenuOpen = false"
            class="block hover:text-yellow-300 transition-colors duration-300 text-xl"
          >
            Факты
          </router-link>
        </li>
        <li>
          <router-link
            to="#books"
            @click="isMobileMenuOpen = false"
            class="block hover:text-yellow-300 transition-colors duration-300 text-xl"
          >
            Книги
          </router-link>
        </li>
        <li>
          <router-link
            to="#events"
            @click="isMobileMenuOpen = false"
            class="block hover:text-yellow-300 transition-colors duration-300 text-xl"
          >
            Мероприятия
          </router-link>
        </li>
        <li>
          <router-link
            to="#contacts"
            @click="isMobileMenuOpen = false"
            class="block hover:text-yellow-300 transition-colors duration-300 text-xl"
          >
            Контакты
          </router-link>
        </li>
      </ul>

      <!-- Вход/выход (мобильный) -->
      <div class="mt-4 flex justify-center">
        <div>
          <router-link
            v-if="!isAuthenticated"
            to="/login"
            @click="isMobileMenuOpen = false"
            class="block hover:text-yellow-300 transition-colors duration-300 text-center text-xl"
          >
            Войти
          </router-link>
          <button
            v-else
            @click="() => { logout(); isMobileMenuOpen = false }"
            class="block hover:text-yellow-300 transition-colors duration-300 text-center text-xl"
          >
            Выйти
          </button>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import store from '@/store/store';
import { toRefs, ref, computed } from 'vue';
import { useRoute } from 'vue-router';

const { isAuthenticated, logout } = toRefs(store);
const isMobileMenuOpen = ref(false);

const route = useRoute();
const hideMenu = computed(() => ['/login', '/register'].includes(route.path));
</script>
