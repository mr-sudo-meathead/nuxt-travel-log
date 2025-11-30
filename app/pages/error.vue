<script lang="ts" setup>
const route = useRoute();
const error = route.query.error || "An unknown error occured";
</script>

<template>
  <div
    class="card bg-base-300 container mt-4 min-h-72 text-center mx-auto flex flex-col justify-center items-center gap-2"
  >
    <div role="alert" class="alert alert-error alert-soft min-w-fit">
      <span>Whoops! {{ error }}.</span>
    </div>
    <NuxtLink to="/" class="btn bg-green-500">
      <Icon name="tabler:arrow-narrow-left" size="24" />
      Home
    </NuxtLink>
  </div>
</template>
