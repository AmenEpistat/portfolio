<template>
    <section class="about-me container" id="about-me">
        <h2 class="about-me__title">
            Обо мне
        </h2>
        <div class="about-me__wrapper">
            <div class="about-me__img-wrapper">
                <img class="about-me__img" alt="Луиза Хакиева." width="200" height="250" src="/src/images/luiza.jpg">
            </div>
            <p class="about-me__text"></p>
            <a class="about-me__link" href=#></a>
        </div>
        <ul class="about-me__list">
            <li class="about-me__item" v-for="(item, index) in facts" :key="index">
                <h3 class="about-me__subtitle">{{ item.subtitle }}</h3>
                <p class="about-me__description">{{ item.text }}</p>
            </li>
        </ul>
    </section>
</template>

<script setup>
const facts = [
    {
        subtitle: "6+",
        text: "успешных проектов на гитхабе, за которые не стыдно (а так их 12).",
    },
    {
        subtitle: "3",
        text: "завершенных курса 'Профессиальная верстка', 'Адаптивная верстка и автоматизация', 'JavaScript",
    },
    {
        subtitle: "175+",
        text: "именно таков у меня рост. Простите за такой факт, нужно было зацепить глаз.",
    },
]
</script>

<style lang="scss" scoped>
.about-me {
    z-index: -5;
    padding-bottom: 30px;
    background-image: linear-gradient($additional-color, $common-color 50%);

    @media (min-width: $tablet) {
        position: relative;
        padding-bottom: 60px;
    }
}

.about-me__title {
    margin: 0;
    margin-bottom: 20px;
    display: flex;
    gap: 20px;
    align-items: center;
    font-family: $secondary-font;
    color: $primary-color;
    font-size: 40px;
    line-height: 25px;
    background-color: $additional-color;

    @media (min-width: $desktop) {
        padding-top: 20px;
        margin-bottom: 80px;
        font-size: 70px;
    }
}

.about-me__title::after {
    content: "";
    flex-grow: 1;
    width: 40px;
    margin-right: -20px;
    max-width: 100%;
    display: block;
    height: 2px;
    background-color: $primary-color;

    @media (min-width: $desktop) {
        margin-right: -50px;
    }
}

.about-me__wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
    grid-template-rows: min-content 1fr;
    margin-bottom: 30px;
    align-items: start;

    @media (min-width: $desktop) {
        position: relative;
        margin-bottom: 10px;
    }
}

.about-me__img-wrapper {
    grid-row: 1/ -1;

    @media (min-width: $desktop) {
        margin-bottom: 80px;
        position: relative;
    }
}

.about-me__img-wrapper::after {
    @media (min-width: $tablet) {
        position: absolute;
        top: 20px;
        z-index: -1;
        left: 40px;
        content: "Луиза Хакиева";
        width: 440px;
        height: 330px;
        transform: rotate(-90deg) scale(-1, -1);
        color: $common-color;
        font-family: $secondary-font;
        font-size: 40px;
        text-align: center;
        background-color: $primary-color;
        border-radius: 40px;
    }
}

.about-me__img {
    border-radius: 30px;

    @media (min-width: $desktop) {
        order: -1;
        width: 330px;
        height: 440px;
        border-radius: 40px;
    }
}

.about-me__text {
    margin: 0;
}

.about-me__text::before {
    padding: 10px;
    display: block;
    margin: 0;
    margin-bottom: auto;
    content: 'Меня зовут Хакиева Луиза. Мне очень нравится frontend разработка (и армрестлинг). Увлекаюсь рисованием, закончила художественную школу.';
    background-color: $common-color;
    color: $primary-color;
    font-size: 14px;
    line-height: 16px;
    border-radius: 20px;

    @media (min-width: $desktop) {
        padding: 30px 40px;
        margin-bottom: 20px;
        line-height: 24px;
        font-size: 20px;
        content: 'Меня зовут Хакиева Луиза. Мне очень нравится frontend разработка, особенно этап стилизации. Интересный факт - в школе говорила, что никогда не буду сдавать информатику и не свяжу с ней жизнь. Теперь студентка Прикладной информатики. Увлекаюсь рисованием, закончила художественную школу.';
    }
}

.about-me__link {
    @include base-link($common-color);
    padding: 10px 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 15px;
    transition: all 0.5s ease;
    background-color: $primary-color;
}

.about-me__link::before {
    content: "Контакты";
    width: 30px;
    max-width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 25px;

    @media (min-width: $desktop) {
        content: "Владею CSS(препроцессор SCSS), HTML, JavaScript. Адаптивная верстка под различные размеры(мобильная, планшетная, десктопная версия) и типы экрана(1x, 2x). Пробовала себя в backend-разработке, реализовав учебную веб-платформу с курсами по математике(C#, Postgresql).";
        min-height: 160px;
        max-height: 100%;
        justify-content: flex-start;
        min-width: fit-content;
        padding: 30px 40px;
        grid-column: 2/ -1;
        font-size: 20px;
        line-height: 24px;
    }
}

.about-me__link:hover {
    background-color: $common-color;
    color: $primary-color;

    @media (min-width: $desktop) {
        background-color: $primary-color;
        color: $common-color;
    }
}

.about-me__list {
    @include base-list;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;

    @media (min-width: $desktop) {
        flex-direction: row;
        align-items: stretch;
    }
}

.about-me__item {
    display: grid;
    grid-template-columns: 70px 1fr;
    align-items: center;
    background-color: $secondary-color;
    padding: 10px;
    border-radius: 2em;

    @media (min-width: $desktop) {
        min-height: 100px;
        padding: 30px;
        grid-template-columns: 1fr;
        grid-template-rows: max-content 1fr;
    }
}

.about-me__subtitle {
    margin: 0;
    font-size: 30px;
    font-weight: bold;
    color: $common-color;
    text-align: center;

    @media (min-width: $desktop) {
        margin-bottom: 20px;
        font-size: 50px;
        font-family: $secondary-font;
    }
}

.about-me__description {
    margin: 0;
    color: $common-color;

    @media (min-width: $desktop) {
        font-size: 20px;
        text-align: center;
    }
}
</style>