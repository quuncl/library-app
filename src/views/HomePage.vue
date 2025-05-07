<template>
  <div class="min-h-screen relative bg-black text-gray-200">
    <HeaderSite />

    <!-- Welcome Section -->
    <section id="welcome" class="relative bg-black h-screen" :style="backgroundStyle">
      <div class="flex items-center justify-center h-full bg-black bg-opacity-70">
        <div class="text-center animate__animated animate__fadeIn">
          <h1 class="text-4xl sm:text-6xl font-bold text-yellow-300 animate__animated animate__bounceIn">
            Добро пожаловать в нашу библиотеку
          </h1>
          <p class="text-base sm:text-lg mt-4 animate__animated animate__fadeInUp">
            "Чтение — это путешествие, которое никогда не заканчивается."
          </p>
        </div>
      </div>
    </section>

    <!-- About Books Section -->
    <section class="bg-black pt-[150px] px-4 sm:px-6 lg:px-20">
      <div class="flex flex-col sm:flex-row items-center gap-6 sm:gap-10">
        <div class="w-full sm:w-1/2">
          <img 
            src="https://i.pinimg.com/736x/37/bf/62/37bf628efa1edf5c71e8638ae29f9170.jpg"
            alt="Фотография книги"
            class="w-full h-auto object-cover rounded-lg shadow-lg"
          />
        </div>
        <div class="w-full sm:w-1/2">
          <p class="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl text-yellow-200 text-center sm:text-left leading-relaxed">
            Книги - это настоящие волшебные двери, которые позволяют нам переноситься в мир любви. Каждая страница, каждый абзац - это шаг к новым открытиям и переживаниям...
          </p>
        </div>
      </div>
    </section>

     <section id="facts" class="bg-black pt-[150px]">
      <h2 class="text-yellow-200 text-4xl font-bold text-center mb-4 animate__animated animate__fadeIn">Интересные факты о библиотеке</h2>
      <div class="w-24 h-1 bg-yellow-300 mx-auto rounded-full animate__animated animate__fadeIn delay-200"></div>
      <div class="container mx-auto p-4 mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div class="fact-card p-8 bg-[#2D1F17] rounded-lg shadow-md animate__animated animate__fadeIn transform transition duration-300 hover:scale-105 hover:shadow-xl">
          <p class="text-lg text-[#C4BA7C] text-xl">Библиотеки существуют более 5000 лет, начиная с Древнего Шумера.</p>
        </div>
        <div class="fact-card p-8 bg-[#2D1F17] rounded-lg shadow-md animate__animated animate__fadeIn transform transition duration-300 hover:scale-105 hover:shadow-xl">
          <p class="text-lg text-[#C4BA7C] text-xl">Первая публичная библиотека была основана в 1833 году в Бостоне, США.</p>
        </div>
        <div class="fact-card p-8 bg-[#2D1F17] rounded-lg shadow-md animate__animated animate__fadeIn transform transition duration-300 hover:scale-105 hover:shadow-xl">
          <p class="text-lg text-[#C4BA7C] text-xl">В библиотеке Конгресса США хранится более 170 миллионов предметов!</p>
        </div>
        <div class="fact-card p-8 bg-[#2D1F17] rounded-lg shadow-md animate__animated animate__fadeIn transform transition duration-300 hover:scale-105 hover:shadow-xl">
          <p class="text-lg text-[#C4BA7C] text-xl">Каждый год в мире открываются тысячи новых библиотек.</p>
        </div>
        <div class="fact-card p-8 bg-[#2D1F17] rounded-lg shadow-md animate__animated animate__fadeIn transform transition duration-300 hover:scale-105 hover:shadow-xl">
          <p class="text-lg text-[#C4BA7C] text-xl">Самая большая библиотека в мире — Британская библиотека в Лондоне.</p>
        </div>
        <div class="fact-card p-8 bg-[#2D1F17] rounded-lg shadow-md animate__animated animate__fadeIn transform transition duration-300 hover:scale-105 hover:shadow-xl">
          <p class="text-lg text-[#C4BA7C] text-xl">В библиотеке Оксфорда хранится одна из самых старых книг в мире - "Codex Bodley".</p>
        </div>
      </div>
    </section>

    <!-- Book Reflection Section -->
    <section class="px-4 sm:px-6 lg:px-20 pt-[150px] space-y-12">
      <div class="flex flex-col lg:flex-row items-center gap-8">
        <img src="https://i.pinimg.com/736x/8b/e9/6c/8be96ccedc9c1aae2c0b485f98ad843f.jpg" class="w-full lg:w-1/2 rounded-lg shadow-lg object-cover" />
        <p class="text-base md:text-xl text-yellow-200 text-center lg:text-left">
         Книги - это зеркала нашей души, которые отражают наши мысли, чувства и эмоции. Они помогают нам понять себя и окружающий мир, давая нам новый взгляд на жизнь. Книги - это наш лучший друг, который всегда готов слушать и советовать.
        </p>
      </div>
      <div class="flex flex-col lg:flex-row-reverse items-center gap-8">
        <img src="https://i.pinimg.com/736x/92/8d/23/928d236732ac6c8fa60163b60654c40d.jpg" class="w-full lg:w-1/2 rounded-lg shadow-lg object-cover" />
        <p class="text-base md:text-xl text-yellow-200 text-center lg:text-left">
          Когда мы читаем книгу, мы можем увидеть себя в героях и персонажах, которые нас окружают. Мы можем увидеть свои собственные мысли и чувства в словах и действиях героев. Мы можем понять, что мы не одиноки в своих эмоциях и мыслях, и что другие люди также переживают подобные чувства.
        </p>
      </div>
    </section>

    <!-- Gallery Section -->
   
 <section class="pt-[150px]">
  <h2 class="text-4xl font-bold text-center mb-8 animate__animated animate__fadeIn text-yellow-200">
    Вы можете уединиться в наших прекрасных залах!
  </h2>
  <div class="w-24 h-1 bg-yellow-300 mx-auto rounded-full animate__animated animate__fadeIn delay-200"></div>

  <!-- Grid для больших экранов -->
  <div class="hidden lg:grid grid-cols-3 gap-6 px-4 md:px-20">
    <img src="https://i.pinimg.com/736x/5c/85/66/5c856665da4aa1d8a5771c2aed0ed1dc.jpg" class="w-full h-72 rounded-lg shadow-lg object-cover" />
    <img src="https://i.pinimg.com/736x/18/51/ec/1851ec03315a366d21d0a70e63b1e222.jpg" class="w-full h-72 rounded-lg shadow-lg object-cover" />
    <img src="https://i.pinimg.com/736x/a7/8c/e3/a78ce3c1665fa6546c15377103bc959b.jpg" class="w-full h-72 rounded-lg shadow-lg object-cover" />
    <img src="https://i.pinimg.com/736x/c0/a2/b1/c0a2b17eb46b44ce22d1d5849531eee1.jpg" class="w-full h-72 rounded-lg shadow-lg object-cover" />
    <img src="https://i.pinimg.com/736x/f7/a3/cb/f7a3cbfbddeed498370528c7e088d5f1.jpg" class="w-full h-72 rounded-lg shadow-lg object-cover" />
    <img src="https://i.pinimg.com/736x/df/58/39/df5839d53292e3d90b2a7d3b658c51a0.jpg" class="w-full h-72 rounded-lg shadow-lg object-cover" />
  </div>

  <!-- Свайпер для мобильных устройств -->
  <div class="block lg:hidden px-4">
    <Swiper
      :slides-per-view="1"
      :space-between="10"
      class="mySwiper"
    >
      <SwiperSlide><img src="https://i.pinimg.com/736x/5c/85/66/5c856665da4aa1d8a5771c2aed0ed1dc.jpg" class="w-full h-72 rounded-lg shadow-lg object-cover" /></SwiperSlide>
      <SwiperSlide><img src="https://i.pinimg.com/736x/18/51/ec/1851ec03315a366d21d0a70e63b1e222.jpg" class="w-full h-72 rounded-lg shadow-lg object-cover" /></SwiperSlide>
      <SwiperSlide><img src="https://i.pinimg.com/736x/a7/8c/e3/a78ce3c1665fa6546c15377103bc959b.jpg" class="w-full h-72 rounded-lg shadow-lg object-cover" /></SwiperSlide>
      <SwiperSlide><img src="https://i.pinimg.com/736x/c0/a2/b1/c0a2b17eb46b44ce22d1d5849531eee1.jpg" class="w-full h-72 rounded-lg shadow-lg object-cover" /></SwiperSlide>
      <SwiperSlide><img src="https://i.pinimg.com/736x/f7/a3/cb/f7a3cbfbddeed498370528c7e088d5f1.jpg" class="w-full h-72 rounded-lg shadow-lg object-cover" /></SwiperSlide>
      <SwiperSlide><img src="https://i.pinimg.com/736x/df/58/39/df5839d53292e3d90b2a7d3b658c51a0.jpg" class="w-full h-72 rounded-lg shadow-lg object-cover" /></SwiperSlide>
    </Swiper>
  </div>
</section>




    <!-- Carousel & Footer -->
    <BookCarousel />
    
<!-- Events Section -->
<section id="events" class="bg-black text-yellow-200 pt-[150px] px-4 sm:px-6 lg:px-20 mb-12">
  <div class="max-w-7xl mx-auto space-y-12">
    <!-- Заголовок -->
    <div class="text-center">
      <h2 class="text-4xl font-bold animate__animated animate__fadeIn mb-4">
        Мероприятия в библиотеке
      </h2>
      <div class="w-24 h-1 bg-yellow-300 mx-auto rounded-full animate__animated animate__fadeIn delay-200"></div>
    </div>

    <!-- Сетка карточек -->
    <div class="grid md:grid-cols-2 gap-10">
      <div
        v-for="(event, i) in events"
        :key="i"
        class="bg-[#1A1A1A] rounded-2xl p-6 shadow-lg transition-shadow duration-200 ease-in-out animate__animated animate__fadeInUp hover:shadow-[0_0_25px_5px_rgba(253,224,71,0.6)]"
        :class="`delay-${200 + i * 100}`"
      >
        <!-- Контейнер для адаптивной структуры -->
        <div class="flex flex-col md:flex-row gap-6 items-center md:items-start">
          <!-- Фото -->
          <img
            :src="event.image"
            :alt="event.title"
            class="w-full md:w-48 h-48 object-cover rounded-2xl border-2 border-yellow-300"
          />

          <!-- Контент -->
          <div class="text-center md:text-left">
            <h3 class="text-2xl font-semibold text-yellow-300 mb-2">{{ event.title }}</h3>
            <p class="text-sm text-yellow-100 mb-1">📅 {{ event.date }}</p>
            <p class="text-base text-gray-300">{{ event.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>




 <section class="bg-black text-yellow-100 py-32 px-6 sm:px-10 lg:px-32 relative flex flex-col lg:flex-row items-center justify-between gap-10">
  <!-- Текстовая часть, которая занимает половину экрана -->
  <div class="text-left max-w-xl z-10 lg:w-1/2">
    <h2 class="text-3xl font-bold text-yellow-300 mb-4 animate__animated animate__fadeIn">
      Поздравляем, вы дошли до конца!
    </h2>
    <p class="text-base text-yellow-100 mb-6 animate__animated animate__fadeIn delay-200">
      Мы очень рады, что вы нашли время узнать больше о нашей библиотеке. Теперь, когда вы завершили путешествие по нашему сайту, мы надеемся, что вам захочется заглянуть к нам, где вас ждут увлекательные книги и интересные мероприятия.
    </p>
    <p class="text-base text-yellow-100 mb-6 animate__animated animate__fadeIn delay-400">
      Двери библиотеки всегда открыты для вас! Приятного дня и удачи в поисках новых знаний и вдохновения!
    </p>

    <!-- Кнопка запуска предсказания -->
    <button
      @click="openFortuneCookie"
      class="bg-yellow-300 text-black font-semibold px-8 py-3 rounded-full text-lg shadow-md transition duration-300 hover:bg-yellow-400"
    >
      Получить предсказание
    </button>
  </div>

  <!-- Фоновая гифка, которая занимает другую половину экрана -->
  <div class="w-full lg:w-1/2 max-w-none rounded-lg overflow-hidden">
    <img src="https://i.pinimg.com/originals/28/f7/a6/28f7a6098ffd755319b45d808b792110.gif"
         alt="Library GIF"
         class="w-full h-auto object-contain" />
  </div>

  <!-- Модальное окно с предсказанием -->
  <transition name="fade">
    <div v-if="showModal" class="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
      <transition name="slide">
        <div class="bg-[#1a1a1a] text-yellow-200 rounded-xl p-8 max-w-md w-full relative shadow-2xl">
          <button
            @click="closeModal"
            class="absolute top-4 right-4 text-yellow-300 text-xl hover:text-yellow-400"
          >
            &times;
          </button>
          <h3 class="text-2xl font-bold mb-4 text-center">✨ Ваше предсказание</h3>
          <p class="text-lg text-center">{{ prediction }}</p>
        </div>
      </transition>
    </div>
  </transition>
</section>


<section id="contacts" class="bg-[#0f0f0f] text-yellow-200 py-20 px-4 sm:px-6 lg:px-20">
  <div class="max-w-7xl mx-auto space-y-12">
    <!-- Заголовок -->
    <div class="text-center">
      <h2 class="text-4xl font-bold mb-4 animate__animated animate__fadeIn">Где нас найти</h2>
      <div class="w-24 h-1 bg-yellow-300 mx-auto rounded-full animate__animated animate__fadeIn delay-200"></div>
    </div>

    <!-- Контент: адрес и карта -->
    <div class="grid md:grid-cols-2 gap-10 items-center">
      <!-- Адрес и контакты -->
      <div class="space-y-4 animate__animated animate__fadeInLeft">
        <p class="text-lg">📍 <strong>Адрес:</strong> ул. Центральная, д. 42, г. Москва</p>
        <p class="text-lg">📞 <strong>Телефон:</strong> +7 (495) 123-45-67</p>
        <p class="text-lg">✉️ <strong>Email:</strong> info@library.ru</p>
        <p class="text-lg">🕒 <strong>Часы работы:</strong> Пн–Сб, 10:00–19:00</p>
      </div>

      <!-- Карта -->
      <div class="animate__animated animate__fadeInRight rounded-xl overflow-hidden shadow-lg">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2244.2842691536186!2d37.61842331605292!3d55.751244980553955!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x414ab3905bbd5bbf%3A0xa7b5fcf21fd998af!2z0JzQvtGB0LrQstCwLCDQnNC-0YHQutCy0LAsIDEyMzQ1Ng!5e0!3m2!1sru!2sru!4v1714745612345!5m2!1sru!2sru"
          width="100%"
          height="300"
          style="border:0;"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  </div>
</section>

    <FooterSite />
  <div class="fixed bottom-4 right-4 space-y-4">
  <!-- Кнопка для прокрутки вверх -->
  <button 
    @click="scrollToTop"
    class="bg-gradient-to-r from-[#FFD700] to-[#FFB900] text-white py-3 px-6 rounded-full text-lg font-semibold shadow-xl transition-all duration-300 ease-in-out transform hover:scale-105 hover:from-[#FFB900] hover:to-[#FFD700] hover:shadow-2xl active:scale-95 active:from-[#FFA500] active:to-[#FF8C00] active:shadow-lg flex items-center justify-center">
    <i class="fa fa-arrow-up mr-2 text-xl"></i> ↑
  </button>
  
  <!-- Кнопка для звонка -->
  <a href="tel:+79991234567" class="bg-gradient-to-r from-[#FFD700] to-[#FFB900] text-white p-4 rounded-full shadow-xl transition-all duration-300 ease-in-out hover:scale-105 hover:from-[#FFB900] hover:to-[#FFD700] hover:shadow-2xl active:scale-95 active:from-[#FFA500] active:to-[#FF8C00] active:shadow-lg flex items-center justify-center" title="Позвонить">
    📞
  </a>
</div>

  </div>
</template>


<script>
import HeaderSite from '@/components/HeaderSite.vue'; // замените на правильный путь
import FooterSite from '@/components/FooterSite.vue'; // замените на правильный путь
import BookCarousel from '@/components/BookCarousel.vue'; // замените на правильный путь
import { Swiper, SwiperSlide } from 'swiper/vue'; // импорт для Swiper, если используете библиотеку Swiper

export default {
  name: 'HomePage',
  components: {
    HeaderSite,
    FooterSite,
    BookCarousel,
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      predictions: [
        "Сегодня отличный день для новых начинаний!",
        "Завтра ждут интересные события. Не упустите шанс!",
        "Ваша энергия сегодня на высоте, используйте её с умом.",
        "Возможно, вам стоит взять паузу и насладиться моментом.",
        "Скоро вы получите неожиданный, но приятный сюрприз.",
        "Настало время действовать. Пора двигаться вперёд!"
      ],
      prediction: "",
      showModal: false,
      events: [
        {
          date: '15 мая 2025',
          title: 'Путеводитель по миру романтики',
          description: 'Откройте для себя самые трогательные и вдохновляющие произведения о любви! Мы приглашаем вас на литературное путешествие, где вы сможете насладиться лучшими произведениями, которые погружают в мир любви, страсти и самоотдачи. В этот вечер мы обсудим не только классические романы, но и современные произведения, которые раскрывают различные стороны любви.',
          image: 'https://i.pinimg.com/originals/f9/7b/92/f97b925d98c699aded93263c9508eabb.gif'
        },
        {
          date: '20 мая 2025',
          title: 'Вечер литературных наслаждений',
          description: 'Погрузитесь в атмосферу тепла и уюта с нашей библиотечной встречей у камина. В этот вечер мы приглашаем вас провести время в компании хороших книг, теплых напитков и приятных бесед. Заварите свой любимый чай, устройтесь поудобнее у огня, и наслаждайтесь чтением классических произведений и новинок, которые создадут атмосферу покоя и вдохновения.',
          image: 'https://i.pinimg.com/originals/64/27/73/6427735ec6978cf80d5b19eb5d6ebe5b.gif'
        },
        {
          date: '1 июня 2025',
          title: 'Вечер эпохи и элегантности',
          description: 'Возвращаемся в атмосферу утонченной элегантности прошлых веков! Мы приглашаем вас на уникальный балл, где можно будет насладиться самыми изысканными танцами и костюмами той эпохи. Погрузитесь в чарующую атмосферу балов, где светло горят свечи, звучит классическая музыка, а гости в нарядных платьях и костюмах переживают эпоху королевских приемов.',
          image: 'https://i.pinimg.com/originals/32/80/f1/3280f112e89e54f7585763a10180ee0d.gif'
        },
        {
          date: '10 июня 2025',
          title: 'Литературные путешествия и открытия',
          description: 'Погружайтесь в мир невероятных путешествий и открытий на нашем уникальном литературном событии! "Исследование мира" — это вечер, посвященный тем, кто стремится расширить горизонты, будь то в книгах или в жизни. Мы отправимся в увлекательное путешествие по страницам литературы, исследуя культуру, природу и удивительные события, описанные великими авторами.',
          image: 'https://i.pinimg.com/originals/98/5b/ca/985bca02766e9e0fa3edca225cb4c628.gif'
        }
      ]
    };
  },
  computed: {
    backgroundStyle() {
      return {
        backgroundImage: 'url(https://i.pinimg.com/originals/43/4c/a4/434ca4a4ff5eaa10542a53e298b53641.gif)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        margin: '0',
        padding: '0',
      };
    },
  },
  methods: {
    getPrediction() {
      const randomIndex = Math.floor(Math.random() * this.predictions.length);
      this.prediction = this.predictions[randomIndex];
    },
    closeModal() {
      this.showModal = false;
    },
    scrollToTop() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    },
    openFortuneCookie() {
      this.getPrediction();
      this.showModal = true;
    }
  },
  mounted() {
    if (!document.querySelector('script[src="https://cdn.jsdelivr.net/npm/@google/model-viewer/dist/model-viewer.min.js"]')) {
      const script = document.createElement('script');
      script.type = 'module';
      script.src = 'https://cdn.jsdelivr.net/npm/@google/model-viewer/dist/model-viewer.min.js';
      document.head.appendChild(script);
    }
  }
};
</script>



<style>
.scroll-to-top {
  z-index: 50; /* Устанавливаем высокий z-index для кнопки */
}
/* Плавные анимации */
.animate__fadeIn {
  animation-duration: 1.5s;
  animation-timing-function: ease-out;
}

/* Модальное окно с предсказанием */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0;
}

.slide-enter-active, .slide-leave-active {
  transition: transform 0.3s ease-out;
}

.slide-enter, .slide-leave-to /* .slide-leave-active in <2.1.8 */ {
  transform: translateY(50px);
}



@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

<!-- Анимации -->
    
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.animate-fadeInUp {
  animation: fadeInUp 1s ease forwards;
}
.delay-200 { animation-delay: 0.2s; }
.delay-300 { animation-delay: 0.3s; }
.delay-400 { animation-delay: 0.4s; }
.delay-500 { animation-delay: 0.5s; }
.delay-700 { animation-delay: 0.7s; }
.crumb {
  position: absolute;
  width: 6px;
  height: 6px;
  background-color: #facc15;
  border-radius: 50%;
  opacity: 0.9;
  animation: crumb-fly 1s ease-out forwards;
  z-index: 9999;
}

@keyframes crumb-fly {
  0% {
    transform: scale(1) translate(0, 0);
    opacity: 1;
  }
  100% {
    transform: scale(0.5) translate(
      calc(-40px + 80px * var(--x, 0.5)),
      calc(-40px + 80px * var(--y, 0.5))
    );
    opacity: 0;
  }
}

</style>

