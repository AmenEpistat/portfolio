<template>
    <footer class="footer container">
        <a class="footer__logo logo" href="#">Amen</a>
        <Contacts class="footer__contacts"></Contacts>
    </footer>
</template>

<script setup lang="ts">
import Contacts from './Contacts.vue';

</script>

<style lang="scss" scoped>
.footer {
    padding: 20px;
    display: grid;
    grid-template-columns: max-content 1fr;
    gap: 30px;
    background: $common-color;

    &__contacts {
        margin-left: auto;
    }

    @media (min-width: $tablet) {
        padding: 50px;
    }
}
</style>