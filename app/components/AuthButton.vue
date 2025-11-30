<script lang="ts" setup>
import { useAuthStore } from "@/stores/auth";

const authStore = useAuthStore();
</script>

<template>
  <button :disabled="authStore.loading" class="btn bg-green-500" @click="authStore.signIn">
    Sign In With Github
    <span v-if="authStore.loading" class="loading loading-spinner text-green-300" />
    <Icon v-else name="tabler:brand-github" size="24" />
  </button>
</template>
