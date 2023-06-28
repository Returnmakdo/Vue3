<template>
  <div class="card">
    <div v-if="$slots.header" class="card-header">
      <slot name="header"></slot>
    </div>
    <div v-if="$slots.default" class="card-body">
      <slot></slot>
    </div>
    <div v-if="$slots.footer" class="card-footer"></div>
    <slot name="footer"></slot>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
