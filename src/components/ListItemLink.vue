<template>
    <li class="nav__item">
        <a
            class="nav__link"
            :href="url"
        >
            <slot />
        </a>
    </li>
</template>

<script setup lang="ts">
defineProps({
    url: {
        type: String,
        required: true,
    },
});
</script>