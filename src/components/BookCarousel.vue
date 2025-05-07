<template>
 <section id="books" class="book-carousel bg-black pt-28 px-4 md:px-16 text-yellow-200 font-sans">
  


    <!-- Заголовок -->
    <h2 class="text-4xl md:text-5xl font-bold text-center mb-12 tracking-wide font-serif">
      Каталог книг
    </h2>

    <!-- Жанровые секции -->
    <div
      v-for="genre in genres"
      :key="genre"
      class="genre-section mb-20"
    >
      <h3 class="text-3xl md:text-4xl text-center font-semibold mb-8 border-b border-yellow-300 pb-2">
        Жанр: {{ genre }}
      </h3>

      <swiper
        :slides-per-view="1"
        :breakpoints="{
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
          1440: { slidesPerView: 5 }
        }"
        :space-between="16"
        pagination
        navigation
      >
        <swiper-slide
          v-for="(book, index) in books.filter(b => b.genre === genre)"
          :key="index"
        >
          <div class="bg-[#1A1A1A] w-full max-w-[240px] sm:max-w-[260px] md:max-w-[280px] mx-auto rounded-xl shadow-lg hover:shadow-yellow-300/60 transition-shadow p-4 sm:p-5 flex flex-col items-center text-center">
  <div class="w-full aspect-[2/3] mb-3">
    <img
      :src="book.image"
      :alt="book.title"
      class="w-full h-full object-cover rounded-md border border-yellow-300 shadow-sm"
    />
  </div>
  <h3 class="text-base sm:text-lg font-semibold mb-1">{{ book.title }}</h3>
  <p class="text-sm sm:text-base text-gray-400">{{ book.author }}</p>
  <button
    @click="openBookDetails(book)"
    class="mt-4 bg-yellow-200 text-black text-sm sm:text-base px-4 py-1.5 rounded hover:bg-yellow-300 transition"
  >
    Подробнее
  </button>
</div>

        </swiper-slide>
      </swiper>
    </div>

    <!-- Модальное окно -->
    <div
      v-if="selectedBook"
      class="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
    >
      <div class="bg-[#1f1f1f] rounded-lg p-8 w-full max-w-xl relative text-white shadow-2xl">
        <button
          @click="closeBookDetails"
          class="absolute top-3 right-4 text-2xl text-yellow-300 hover:text-yellow-400"
        >
          &times;
        </button>
        <h2 class="text-2xl font-bold mb-2 text-yellow-200">{{ selectedBook.title }}</h2>
        <p class="mb-1 text-gray-400">Автор: {{ selectedBook.author }}</p>
        <p class="text-sm text-gray-300">{{ selectedBook.description }}</p>

        <a
          v-if="isAuthenticated"
          :href="selectedBook.readLink"
          target="_blank"
          class="inline-block mt-5 bg-yellow-200 text-black px-6 py-2 rounded font-semibold hover:bg-yellow-300 transition"
        >
          Прочитать
        </a>
        <p v-else class="text-red-500 mt-4">
          Пожалуйста, войдите в систему, чтобы прочитать полную книгу.
        </p>
      </div>
    </div>
  </section>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/swiper-bundle.css';

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      genres: ['Фантастика', 'Детектив', 'Исторические'], // <--- добавить это
      books: [
  {
    title: 'Фантастика книга 1',
    author: 'Автор 1',
    image: 'https://i.pinimg.com/736x/35/45/6f/35456fd31f63098cf3791a2a02a7b6b5.jpg',
    description: 'Описание книги 1',
    genre: 'Фантастика',
    readLink: 'https://example.com/book1',
  },
  {
    title: 'Детектив книга 1',
    author: 'Автор 2',
    image: 'https://i.pinimg.com/736x/35/45/6f/35456fd31f63098cf3791a2a02a7b6b5.jpg',
    description: 'Описание книги 2',
    genre: 'Детектив',
    readLink: 'https://example.com/book2',
  },
  {
    title: 'Историческая книга 1',
    author: 'Автор 3',
    image: 'https://i.pinimg.com/736x/35/45/6f/35456fd31f63098cf3791a2a02a7b6b5.jpg',
    description: 'Описание книги 3',
    genre: 'Исторические',
    readLink: 'https://example.com/book3',
  },
  {
    title: 'Фантастика книга 2',
    author: 'Автор 4',
    image: 'https://i.pinimg.com/736x/35/45/6f/35456fd31f63098cf3791a2a02a7b6b5.jpg',
    description: 'Описание книги 4',
    genre: 'Фантастика',
    readLink: 'https://example.com/book4',
  },
  {
    title: 'Детектив книга 2',
    author: 'Автор 5',
    image: 'https://i.pinimg.com/736x/35/45/6f/35456fd31f63098cf3791a2a02a7b6b5.jpg',
    description: 'Описание книги 5',
    genre: 'Детектив',
    readLink: 'https://example.com/book5',
  },
  {
    title: 'Историческая книга 2',
    author: 'Автор 6',
    image: 'https://i.pinimg.com/736x/35/45/6f/35456fd31f63098cf3791a2a02a7b6b5.jpg',
    description: 'Описание книги 6',
    genre: 'Исторические',
    readLink: 'https://example.com/book6',
  },
  {
    title: 'Историческая книга 2',
    author: 'Автор 6',
    image: 'https://i.pinimg.com/736x/35/45/6f/35456fd31f63098cf3791a2a02a7b6b5.jpg',
    description: 'Описание книги 6',
    genre: 'Исторические',
    readLink: 'https://example.com/book6',
  },
  {
    title: 'Историческая книга 2',
    author: 'Автор 6',
    image: 'https://i.pinimg.com/736x/35/45/6f/35456fd31f63098cf3791a2a02a7b6b5.jpg',
    description: 'Описание книги 6',
    genre: 'Исторические',
    readLink: 'https://example.com/book6',
  },
  {
    title: 'Историческая книга 2',
    author: 'Автор 6',
    image: 'https://i.pinimg.com/736x/35/45/6f/35456fd31f63098cf3791a2a02a7b6b5.jpg',
    description: 'Описание книги 6',
    genre: 'Исторические',
    readLink: 'https://example.com/book6',
  },
  {
    title: 'Историческая книга 2',
    author: 'Автор 6',
    image: 'https://i.pinimg.com/736x/35/45/6f/35456fd31f63098cf3791a2a02a7b6b5.jpg',
    description: 'Описание книги 6',
    genre: 'Исторические',
    readLink: 'https://example.com/book6',
  },
  {
    title: 'Историческая книга 2',
    author: 'Автор 6',
    image: 'https://i.pinimg.com/736x/35/45/6f/35456fd31f63098cf3791a2a02a7b6b5.jpg',
    description: 'Описание книги 6',
    genre: 'Исторические',
    readLink: 'https://example.com/book6',
  },
],
      selectedBook: null,
      isAuthenticated: false,
    };
  },
   
  methods: {
    openBookDetails(book) {
      this.selectedBook = book;
    },
    closeBookDetails() {
      this.selectedBook = null;
    },
  },
  mounted() {
    const token = localStorage.getItem('token');
    if (token) {
      this.isAuthenticated = true;
    }
  },
};
</script>

<style scoped>
.genre-section {
  margin-bottom: 3rem;
}


/* Модалка */
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(20, 20, 20, 0.95);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal-content {
  background: #2a2a2a;
  border: 2px solid #d4af37;
  padding: 2rem;
  border-radius: 10px;
  width: 90%;
  max-width: 600px;
  text-align: left;
  position: relative;
  box-shadow: 0 0 20px rgba(212, 175, 55, 0.3);
}

.close {
  position: absolute;
  top: 10px;
  right: 20px;
  font-size: 26px;
  color: #d4af37;
  cursor: pointer;
}
</style>