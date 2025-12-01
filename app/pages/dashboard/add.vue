<script setup lang="ts">
import type { FetchError } from "ofetch";

import { InsertLocation } from "@@/server/db";
import { toTypedSchema } from "@vee-validate/zod";
import { useForm } from "vee-validate";

const router = useRouter();
const submitted = ref(false);
const submitError = ref("");
const loading = ref(false);
const { $csrfFetch } = useNuxtApp();

const { handleSubmit, errors, meta, setErrors } = useForm({
  validationSchema: toTypedSchema(InsertLocation),
});

const onSubmit = handleSubmit(async (value) => {
  try {
    submitError.value = "";
    loading.value = true;

    await $csrfFetch("/api/locations", {
      method: "POST",
      body: value,
    });

    submitted.value = true;
    navigateTo("/dashboard");
  }
  catch (e) {
    const error = e as FetchError;

    // only show errors when form errors exist
    if (error.data?.data) {
      setErrors(error.data?.data);
    }

    submitError.value = error.statusMessage || "An unknown error occured.";
  }
  finally {
    loading.value = false;
  }
});

onBeforeRouteLeave(() => {
  // tells us if the input has been typed in
  if (!submitted.value && meta.value.dirty) {
    // eslint-disable-next-line no-alert
    const confirm = window.confirm("Are you sure you want to leave? All unsaved changes will be lost.");
    if (!confirm) {
      return false;
    }
  }
  return true;
});
</script>

<template>
  <div class="container max-w-md mx-auto p-5">
    <div>
      <h1 class="text-2xl font-bold">
        Add Location
      </h1>
      <p class="text-md">
        A location is a place you have traveled or will travel to. It can be a city, country, state or point of
        interest. You can add specific times you visited this location after adding it.
      </p>
    </div>
    <div v-if="submitError" role="alert" class="alert bg-red-500 text-white my-5">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6 shrink-0 stroke-current"
        fill="none"
        viewBox="0 0 24 24"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
      <span>{{ submitError }}</span>
    </div>
    <form class="flex flex-col gap-3 my-5" @submit.prevent="onSubmit">
      <AppFormField
        name="name"
        label="Name"
        :error="errors.name"
        :disabled="loading"
      />

      <AppFormField
        type="textarea"
        name="description"
        label="Descripion"
        :error="errors.description"
        :disabled="loading"
      />

      <AppFormField
        type="number"
        name="lat"
        label="Latitude"
        :error="errors.lat"
        :disabled="loading"
      />

      <AppFormField
        type="number"
        name="long"
        label="Longitude"
        :error="errors.long"
        :disabled="loading"
      />

      <div class="flex justify-end mt-5 gap-2">
        <button
          :disabled="loading"
          type="button"
          class="btn border-red-500 text-red-500 hover:bg-red-500 hover:text-white"
          @click="router.back()"
        >
          <Icon name="tabler:arrow-left" size="24" />
          Cancel
        </button>
        <button
          :disabled="loading"
          type="submit"
          class="btn border-green-500 text-green-500 hover:bg-green-500 hover:text-white"
        >
          <span v-if="loading" class="loading loading-spinner loading-md" />
          <Icon v-else name="tabler:circle-plus-filled" size="24" />
          Add
        </button>
      </div>
    </form>
  </div>
</template>

<style scoped>

</style>
