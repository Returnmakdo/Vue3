<template>
  <div>
    <h2>home</h2>
    <p>{{ $route.path }}</p>
    <p>{{ $route.name }}</p>
    <button class="btn btn-primary" @click="goAboutPage">About으로</button>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
const router = useRouter();
const goAboutPage = () => {
  router.push('/about');
};
</script>

<style lang="scss" scoped></style>
