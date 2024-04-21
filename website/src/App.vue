<script setup>
import { RouterView } from 'vue-router';
import { Icon } from "@iconify/vue";
import { inject } from "vue"
import NavigationMenu from '@/partials/NavigationMenu.vue'

const links = inject("links")
</script>

<template>
  <header class="flex flex-row w-full overflow-clip justify-between items-center 
    text-slate-200 bg-slate-800 outline outline-b-1 outline-slate-900
    px-2 sticky z-10 top-0 shadow-lg shadow-slate-900
    ">
    <div class="flex flex-col w-full py-3 md:py-0">
      <NavigationMenu />
    </div>

    <a class="flex flex-row w-auto transition duration-250 scale-100 hover:scale-150 hover:rotate-2 hover:animate-pulse self-start py-3 md:self-center md:py-0"
      :href="links.github" target="_blank" rel="nofollow">
      <Icon class="w-10 h-10" icon="ei:sc-github" />
    </a>
  </header>

  <RouterView />
</template>
