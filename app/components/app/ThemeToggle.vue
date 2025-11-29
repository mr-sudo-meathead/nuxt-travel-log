<script setup lang="ts">
const colorMode = useColorMode();

const isDark = computed({
  get() {
    return colorMode.value === "dark";
  },
  set(value) {
    colorMode.preference = value ? "dark" : "light";
  },
});
</script>

<template>
  <label class="swap swap-rotate">
    <!-- this hidden checkbox controls the state -->
    <input v-model="isDark" type="checkbox">

    <!-- sun icon -->
    <Icon name="tabler:sunset-2-filled" size="24" class="swap-on" />

    <!-- moon icon -->
    <Icon name="tabler:haze-moon" size="24" class="swap-off" />
  </label>
</template>
