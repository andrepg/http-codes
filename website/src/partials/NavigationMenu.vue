<script setup>
import { ref } from "vue";
import NavLink from "@/components/NavLink.vue";
import { Icon } from "@iconify/vue";

const isClosed = ref(true)

const closeMenu = () => isClosed.value = true;

</script>

<template>
    <div class="w-full flex flex-col h-full">
        <button class="md:hidden relative top-0 left-0 w-fit ms-2" :onClick="() => isClosed = !isClosed">
            <Icon class="w-10 h-10" icon="ei:navicon" />
        </button>

        <nav :aria-expanded="!isClosed" class='flex flex-col md:flex-row flex-no-wrap gap-1 md:gap-2 py-0 transition duration-500 opacity-0 h-0 
            aria-expanded:opacity-100 aria-expanded:h-full aria-expanded:py-2 md:aria-expanded:py-4 aria-expanded:duration-200
            md:opacity-100 md:py-2 md:h-auto lg:py-6 lg:px-4'>
            <NavLink :onClick="closeMenu" target="#hero">Home</NavLink>
            <NavLink :onClick="closeMenu" target="#why">Why?</NavLink>
            <NavLink :onClick="closeMenu" target="#more-info">More Info</NavLink>
            <NavLink :onClick="closeMenu" target="#screenshots">Screenshots</NavLink>
            <NavLink :onClick="closeMenu" target="#techs">Technologies</NavLink>
        </nav>
    </div>
</template>
