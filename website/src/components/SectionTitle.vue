<script setup>
import { Icon } from "@iconify/vue";

const props = defineProps({
    tag: String,
    icon: String,
});
</script>

<template>
    <tag class="flex text-3xl mb-5 flex-row flex-nowrap items-center gap-2 text-slate-400 font-title">
        <Icon class="h-10 w-10" v-if="icon" :icon="props.icon" />
        <slot />
    </tag>
</template>