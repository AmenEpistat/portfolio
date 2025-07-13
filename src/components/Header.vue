<template>
    <header class="header">
        <a class="header__logo logo" href="#">Amen</a>
        <button class="header__toggle" :class="isOpen ? 'header__toggle--open' : ''" @click="openNavigation"
            type="button"></button>
        <nav class="nav">
            <ul class="nav__list" :class="isOpen ? '' : 'nav__list--closed'">
                <li class="nav__item" v-for="(i, index) in links" :key="index">
                    <a class="nav__link" :href="i.href"> {{ i.title }}</a>
                </li>
            </ul>
        </nav>
    </header>
</template>

<script setup>
import { ref } from "vue";
const links = [
    {
        title: "Обо мне",
        href: "#about-me",
    },
    {
        title: "Мои проекты",
        href: "#projects",
    },
    {
        title: "Почему я",
        href: "#about-me",
    },
    {
        title: "Обсудим",
        href: "#about-me",
    }
];

let isOpen = ref(false);

const openNavigation = () => {
    isOpen.value = !isOpen.value;
}
</script>

<style lang="scss">
.logo {
    @include base-link($secondary-color);
    font-family: $secondary-font;
    font-size: 25px;

    @media (min-width: $desktop) {
        font-size: 40px;
    }
}
</style>

<style lang="scss" scoped>
.header {
    padding: 10px 0;
    display: grid;
    grid-template-columns: 1fr 2fr;
    align-items: center;
    background-color: $common-color;
    position: relative;

    @media (min-width: $desktop) {
        background-image: linear-gradient($common-color, $additional-color);
    }
}

.header__logo {
    margin-left: 20px;

    @media (min-width: $desktop) {
        margin-left: 50px;
    }
}


.nav__list {
    @include base-list;
    position: absolute;
    top: 50px;
    z-index: 1;
    width: 100%;
    display: flex;
    flex-direction: column;
    background-color: $common-color;
    border-top: 1px solid $primary-color;

    @media (min-width: $tablet) {
        position: unset;
        flex-direction: row;
        background-color: transparent;
        border-top: none;
    }
}

.nav__list--closed {
    display: none;

    @media (min-width: $tablet) {
        display: flex;
    }
}


.nav__item {
    border-bottom: 1px solid $primary-color;

    @media (min-width: $tablet) {
        border: none;
    }
}

.nav__link {
    @include base-link($secondary-color);
    display: block;
    padding: 20px;
    font-size: 20px;
    line-height: 21px;
    text-align: center;

    @media (min-width: $tablet) {
        gap: 20px;
        font-size: 24px;
        line-height: 25px;
        text-decoration-line: underline;
        text-decoration-thickness: 3px;
        text-underline-offset: 20px;
        text-decoration-color: transparent;
        transition: all 0.5s ease-in;
    }
}

.nav__link:hover {
    color: $primary-color;

    @media (min-width: $tablet) {
        text-decoration-color: $primary-color;
    }
}

.header__toggle {
    display: block;
    width: 30px;
    height: 30px;
    margin-inline: auto 20px;
    mask-image: url('../icons/icon-open.svg');
    background-color: #845747;
    mask-repeat: no-repeat;
    mask-position: center;
    border-radius: 0;
    border: 0;
    transition: transform 0.4s ease;

    &--open {
        mask-image: url('../icons/nav-close.svg');
        transform: rotate(90deg);
    }

    @media (min-width: $tablet) {
        display: none;
    }
}
</style>