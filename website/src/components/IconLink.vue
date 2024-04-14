<script setup>
import { Icon } from "@iconify/vue";

const props = defineProps({
    icon: String,
    link: String,
})
</script>

<template>
    <a :href="link" class="transition hover:scale-110 hover:text-purple-400 duration-250 ease-linear ">
        <Icon class="w-14 h-14" :icon="icon" />
    </a>
</template>
