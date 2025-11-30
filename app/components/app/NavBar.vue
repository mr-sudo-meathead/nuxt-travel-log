<script setup lang="ts">
import AuthButton from "../AuthButton.vue";
</script>

<template>
  <div class="navbar bg-neutral text-neutral-content">
    <div class="navbar-start">
      <NuxtLink to="/" class="btn btn-ghost text-xl">
        Travel Log
      </NuxtLink>
    </div>
    <div class="navbar-end gap-4">
      <AppThemeToggle />
      <AuthButton />
    </div>
  </div>
</template>
