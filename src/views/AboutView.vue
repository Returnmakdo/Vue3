<template>
  <div>
    <h2>About</h2>
    <p>{{ $route.path }}</p>
    <p>{{ $route.name }}</p>
    <button class="btn btn-primary" @click="$router.push('/')">Home으로</button>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router';
const route = useRoute();
console.log('router.path:', route.path);
</script>

<style lang="scss" scoped></style>
