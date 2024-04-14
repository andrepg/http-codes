<script setup>
const props = defineProps({
  target: String,
});
</script>

<template>
  <a class="px-3 py-2 transition duration-500 rounded-lg hover:shadow-md hover:bg-slate-300 hover:text-slate-900"
    :href="props.target" :click="$attrs.onClick">
    <slot />
  </a>
</template>