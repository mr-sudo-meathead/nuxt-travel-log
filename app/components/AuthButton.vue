<script lang="ts" setup>
import { useAuthStore } from "@/stores/auth";

const authStore = useAuthStore();
</script>

<template>
  <details v-if="!authStore.loading && authStore.user" class="dropdown dropdown-end">
    <summary class="btn m-1">
      {{ authStore.user.name }}
      <div v-if="authStore.user.image" class="avatar">
        <div class="w-8 rounded-full">
          <img :src="authStore.user.image" :alt="authStore.user.name">
        </div>
      </div>
    </summary>
    <ul class="menu dropdown-content bg-base-200 rounded-box z-1 w-52 p-2 shadow-sm">
      <li>
        <NuxtLink to="/sign-out">
          <a>Sign out</a>
          <Icon name="tabler:logout-2" />
        </NuxtLink>
      </li>
    </ul>
  </details>
  <button
    v-else
    :disabled="authStore.loading"
    class="btn bg-green-500"
    @click="authStore.signIn"
  >
    Sign In With Github
    <span v-if="authStore.loading" class="loading loading-spinner text-green-300" />
    <Icon v-else name="tabler:brand-github" size="24" />
  </button>
</template>
