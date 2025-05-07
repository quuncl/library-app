<template>
  <footer class="bg-black text-gray-200 py-8 px-6 sm:px-10 mt-12 border-t-4 border-yellow-300">
    <div class="max-w-screen-xl mx-auto text-center">
      <p class="text-lg font-semibold text-yellow-300 animate__animated animate__fadeIn">
        © 2024 Библиотека. Все права защищены.
      </p>
      <div class="flex justify-center space-x-8 mt-4">
        <a href="#" class="text-yellow-300 hover:text-yellow-500 transition duration-300 ease-in-out transform hover:scale-105 animate__animated animate__fadeIn">Политика конфиденциальности</a>
        <a href="#" class="text-yellow-300 hover:text-yellow-500 transition duration-300 ease-in-out transform hover:scale-105 animate__animated animate__fadeIn">Условия использования</a>
      </div>
      <div class="mt-6 text-sm text-gray-400">
        <p class="animate__animated animate__fadeIn">Создано с любовью для вас, чтобы привнести больше вдохновения и знаний.</p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'FooterSite'
}
</script>

<style scoped>
footer {
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
}

a:hover {
  text-decoration: underline;
}

@media (max-width: 768px) {
  .text-lg {
    font-size: 1.125rem;
  }
}
</style>
