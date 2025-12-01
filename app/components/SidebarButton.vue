<script lang="ts" setup>
const props = defineProps<{
  label: string;
  icon: string;
  size: string;
  href: string;
  showLabel: boolean;
}>();

const route = useRoute();
</script>

<template>
  <div class="px-2 py-1.5">
    <div class="tooltip-right" :class="{ tooltip: !showLabel }" :data-tip="showLabel ? undefined : props.label">
      <NuxtLink
        :to="props.href"
        :class="{ 'bg-base-100': route.path === props.href }"
        class="rounded-md flex justify-start gap-2 p-3 hover:bg-base-100 hover:cursor-pointer"
      >
        <Icon :name="props.icon" :size="props.size" />
        <Transition name="grow">
          <span v-if="showLabel">
            {{ props.label }}
          </span>
        </Transition>
      </NuxtLink>
    </div>
  </div>
</template>

<style scoped>
.grow-enter-active {
  animation: grow 0.3s;
}

.grow-leave-active {
  animation: grow 0.03s reverse;
}

@keyframes grow {
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
}
</style>
