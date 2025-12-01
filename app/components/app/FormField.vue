<script setup lang="ts">
const props = defineProps<{
  error?: string;
  label: string;
  name: string;
  type?: "text" | "textarea" | "number";
  disabled?: boolean;
}>();
</script>

<template>
  <fieldset class="fieldset">
    <legend class="fieldset-legend">
      {{ props.label }}
    </legend>
    <Field
      :as="type === 'number' ? 'input' : type"
      :type="type || 'text'"
      :disabled="props.disabled"
      :name="props.name"
      class="input w-full"
      :class="{
        'input-error': props.error,
        'input': !type || type === 'text',
        'textarea': type === 'textarea',
      }"
    />
    <p v-if="props.error" class="fieldset-label text-red-500">
      {{ props.error }}
    </p>
  </fieldset>
</template>

<style scoped>

</style>
