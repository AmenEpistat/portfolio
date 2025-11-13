<template>
    <ul class="gallery">
        <li class="gallery__item" v-for="(img, index) in images" :key="index">
            <a class="gallery__link" :alt="img.alt" :href="img.href" @mouseleave="img.isHovered = false"
                @mouseenter="img.isHovered = true">
                <div class="gallery__img-wrapper">
                    <img v-if="img.isHovered === false" :src="img.src" class="gallery__img" width="350" height="200"
                        :alt="img.description">
                </div>
            </a>
        </li>
    </ul>
</template>

<script setup>
const images = [
    {
        alt: "Февраль 2025. Мой первый полноценный проект, в котором используется чистый JS и CSS. Имеет фильтрацию, поиск, корзину, авторизацию пользоателя, хранение данных в localstorage.",
        src: "src/images/cakes.png",
        href: "https://amenepistat.github.io/cakes/index2.html",
        isHovered: false,
        description: "fvgbhn",
    },
    {
        alt: "Апрель 2025. Проект, который я сделала в процессе обучения в HTML Academy Профессиальная верстка. Код проверен тремя наставниками. Из интересного есть модальное окно с формой для регистрации.",
        src: "src/images/sedona.png",
        href: "https://amenepistat.github.io/2567601-sedona-2/",
        isHovered: false,
        description: "gbhnjm",
    },
    {
        alt: "Июль 2025. Проект, в основе которого продвинутые инструменты верстки. Mедиазапросы, работа с различными типами экранов, такими как Retina и Amoled. Автоматизация с помощью ligthhouse. HTML Academy",
        src: "src/images/cat-desktop.png",
        href: "https://amenepistat.github.io/2567601-cat-energy-2/",
        isHovered: false,
        description: "bnm,",
    },
  {
    alt: "Сентябрь 2025. Веб приложение, имитирующее сервис для публикации фотографий — загрузка фото, фильтры, комментарии, лайки. Используется ванильный JS (работа с DOM, событийными обработчиками, загрузкой данных). HTML Academy",
    src: "src/images/insta.png",
    href: "https://amenepistat.github.io/2567601-kekstagram-2/",
    isHovered: false,
    description: "bnm,",
  },
  {
    alt: "Не законченное (старт: октябрь 2025). Проект, в основе которого Vue 3 с TypeScript и Vite, управление состоянием через Pinia, маршрутизация через Vue Router. Серверная часть: Node.js + MongoDB, с планами на обучение модели нейросети для персональных рекомендаций.",
    src: "src/images/vibebook.png",
    href: "https://AmenEpistat.github.io/VibeBook/",
    isHovered: false,
    description: "bnm,",
  },
    {
        alt: "Май 2025. Веб платформа с привязкой к базе данных Postgresql, на языке C#. Используется так же HTML, CSS, JS. Имеется окно с регистрацией и входом пользователя, возможность пройти экзамен и тест только после входа",
        src: "src/images/math.png",
        href: "https://amenepistat.github.io/online-education-a-e/",
        description: "ghj",
        isHovered: false,
    },
];

</script>

<style lang="scss" scoped>
.gallery {
    @include base-list;

    @media (min-width: $desktop) {
        display: grid;
        grid-template-columns: 1fr 1fr;
    }

}

.gallery__img {
    width: 350px;
    height: 250px;

    @media (min-width: $desktop) {
        width: 500px;
        height: 400px;
        filter: drop-shadow(5px 10px 20px $primary-color);
    }
}

.gallery__link {
    max-width: 350px;
    display: block;

    @media (min-width: $tablet) {
        max-width: fit-content;
        position: relative;
    }
}

.gallery__description {
    width: 270px;
    display: block;
    height: 250px;
    background-color: $primary-color;
}

.gallery__link::after {
    @media (min-width: $tablet) {
        content: attr(alt);
        position: absolute;
        z-index: 100;
        top: 50px;
        left: 45px;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 415px;
        height: 285px;
        padding: 30px;
        font-size: 25px;
        line-height: 27px;
        color: $common-color;
        text-align: center;
        border-radius: 15px 15px 0 0;
        background-color: $primary-color;
        opacity: 0;
        transition: all 0.6s ease-in-out;
    }
}

.gallery__link:hover::after {
    @media (min-width: $tablet) {
        opacity: 1;

    }
}
</style>