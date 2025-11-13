<template>
    <section class="hero container">
        <h1 class="hero__title">
            Стажер JS-разработчик
        </h1>
        <div class="hero__contacts">
            <Contacts class="hero__contacts-list"></Contacts>
            <a class="hero__button button" href="#project">Посмотреть кейсы</a>
        </div>
        <a class="hero__link" href="#">
            <img class="hero__img" src="/images/cakes.png" width="180" height="120"
                alt="Розовый сайт с тортами большой.">
            <img class="hero__img-mobile" src="/images/cakes-mobile.png" width="80" height="80"
                alt="Розовый сайт с тортами.">
        </a>
    </section>
</template>

<script setup>
import Contacts from './Contacts.vue';
</script>

<style lang="scss" scoped>
.hero {
    padding-block: 20px 50px;
    background: radial-gradient(circle, $primary-color, $additional-color 40%);

    @media (min-width: $desktop) {
        padding-block: 70px;
        display: grid;
        grid-template-columns: auto 1fr;
    }
}

.hero__title {
    margin: 0;
    margin-bottom: 25px;
    font-family: $secondary-font;
    font-size: 45px;
    line-height: 46px;
    text-align: center;
    color: $common-color;

    @media (min-width: $desktop) {
        width: min-content;
        font-size: 120px;
        line-height: 100px;
        text-align: left;
    }
}

.hero__img {
    width: 250px;
    height: 150px;
    margin-top: 30px;

    @media (min-width: $desktop) {
        width: 700px;
        height: 480px;
        margin-right: 30px;
    }
}

.hero__contacts {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;

    @media (min-width: $tablet) {
        margin-left: auto;
    }
}


.hero__link {
    display: flex;
    max-width: 400px;
    flex-wrap: wrap;
    align-items: flex-end;
    justify-content: center;

    @media (min-width: $desktop) {
        max-width: fit-content;
        grid-column: 1 / -1;
    }
}

.hero__button {
    display: none;

    @media (min-width: $desktop) {
        display: block;
        margin-bottom: 20px;
        text-decoration: none;
    }
}

.hero__img-mobile {
    @media (min-width: $desktop) {
        width: 200px;
        height: 400px;
    }

}
</style>