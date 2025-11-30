<script setup lang="ts">
import AuthButton from "~/components/AuthButton.vue";
</script>

<template>
  <div class="hero bg-base-200 container mx-auto mt-8">
    <div class="hero-content text-center min-h-96">
      <div class="max-w-md">
        <h1 class="text-5xl font-bold">
          Travel Log
        </h1>
        <p class="py-6">
          Keep track of your travels and adventures with this simple trave log application.
        </p>
        <AuthButton />
      </div>
    </div>
  </div>
</template>
