<script setup>
import Header from './components/Header.vue';
import AboutMe from './components/AboutMe.vue';
import Footer from './components/Footer.vue';
import Hero from './components/Hero.vue';
import Projects from './components/Projects.vue';

</script>

<template>
    <Header></Header>
    <main class="main">
        <Hero></Hero>
        <AboutMe></AboutMe>
        <Projects></Projects>
    </main>
    <Footer></Footer>
</template>
