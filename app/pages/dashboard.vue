<script lang="ts" setup>
const isSidebarOpen = ref(true);

function toggleSidebar() {
  isSidebarOpen.value = !isSidebarOpen.value;
  localStorage.setItem("isSidebarOpen", isSidebarOpen.value.toString());
}

onMounted(() => {
  isSidebarOpen.value = localStorage.getItem("isSidebarOpen") === "true";
});
</script>

<template>
  <div class="flex-1 flex">
    <div class="bg-base-300 transition-all duration-300" :class="{ 'w-64': isSidebarOpen, 'w-16': !isSidebarOpen }">
      <div
        class="flex hover:cursor-pointer p-2"
        :class="{ 'justify-center': !isSidebarOpen, 'justify-end': isSidebarOpen }"
        @click="toggleSidebar"
      >
        <Icon v-if="isSidebarOpen" name="tabler:chevron-left" size="24" />
        <Icon v-else name="tabler:chevron-right" size="24" />
      </div>
      <div class="flex flex-col">
        <SidebarButton
          :show-label="isSidebarOpen"
          href="/dashboard"
          label="Locations"
          icon="tabler:map"
          size="24"
        />
        <SidebarButton
          :show-label="isSidebarOpen"
          href="/dashboard/add"
          label="Add Location"
          icon="tabler:circle-plus-filled"
          size="24"
        />
        <div class="divider" />
        <SidebarButton
          :show-label="isSidebarOpen"
          href="/sign-out"
          label="Sign out"
          icon="tabler:logout-2"
          size="24"
        />
      </div>
    </div>
    <div class="flex-1">
      <NuxtPage />
    </div>
  </div>
</template>
