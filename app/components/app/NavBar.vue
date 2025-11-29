<template>
  <div class="navbar bg-neutral text-neutral-content">
    <div class="navbar-start">
      <NuxtLink to="/" class="btn btn-ghost text-xl">
        Travel Log
      </NuxtLink>
    </div>
    <div class="navbar-end gap-4">
      <AppThemeToggle />
      <a class="btn bg-green-500">
        Sign In With Github
        <Icon name="tabler:brand-github" size="24" />
      </a>
    </div>
  </div>
</template>
