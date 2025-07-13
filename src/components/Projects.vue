<template>
    <section class="projects container" id="project">
            <h2 class="projects__title">Проекты</h2>
            <Gallery></Gallery>
        </section>
</template>

<script setup lang="ts">
import Gallery from './Gallery.vue';

</script>

<style lang="scss" scoped>
.projects {
    padding-block: 10px;
    background-image: linear-gradient($common-color 25%,  $primary-color, $common-color);
}

.projects__title {
    margin: 0;
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    gap: 20px;
    font-family: $secondary-font;
    font-size: 40px;
    line-height: 40px;
    background-color: $common-color;
    color: $primary-color;

    @media (min-width: $tablet) {
        margin-bottom: 40px;
        font-size: 70px;
    }
}

.projects__title::after {
    content: "";
    width: 40px;
    margin-right: -20px;
    max-width: 100%;
    flex-grow: 1;
    height: 2px;
    background-color: $primary-color;

    @media (min-width: $tablet) {
        margin-right: -50px;
    }
}
</style>