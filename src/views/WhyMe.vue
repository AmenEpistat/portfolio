
<template>
    <h2>{{ title }}</h2>
    <button @click="$emit('large')">aDD</button>
</template>

<script setup lang="ts">
defineProps( {
    title: {
        type: String,
    },
});
defineEmits(['large']);
</script>