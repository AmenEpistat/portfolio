<template>
    <ul class="contacts">
        <li class="contacts__item" v-for="(i, index) in contactLinks" :key="index">
            <a class="contacts__link" :class="i.class" :href="i.href">
                <span class="visually-hidden">{{ i.title }}</span>
            </a>
        </li>
    </ul>
</template>

<script setup>
const contactLinks = [
    {
        title: "Telegram",
        href: "https://t.me/pppr_mint",
        class: 'contacts__link--tg',
    },
    {
        title: "Vcontacte",
        href: "https://vk.com/pppr.mint",
        class: 'contacts__link--vk',
    },
    {
        title: "Github",
        href: "https://github.com/AmenEpistat",
        class: 'contacts__link--github',
    },
  {
    title: "Youtube",
    href: "#about-me",
    class: 'contacts__link--youtube',
  },
]
</script>

<style lang="scss" scoped>
.contacts {
    @include base-list;
    display: flex;
    gap: 20px;

    @media (min-width: $tablet) {
        gap: 30px;
    }
}

.contacts__link {
    display: block;
    width: 40px;
    padding: 10px;
    height: 40px;
    background-color: $secondary-color;
    mask-repeat: no-repeat;
    mask-size: 40px;
    mask-position: center;

    &--tg {
        mask-image: url("../icons/icons8-tg.svg");
    }

    &--vk {
        mask-image: url("../icons/icons8-vk.svg");
    }

    &--youtube {
        mask-image: url("../icons/icons8-youtube.svg");
    }

    &--github {
        mask-image: url("../icons/icons8-github.svg");
    }

    &:hover {
        background-color: $primary-color;
    }

    @media (min-width: $tablet) {
        width: 60px;
        height: 60px;
        mask-size: 60px;
    }
}
</style>