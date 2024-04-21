<script setup>
const technologiesClasses = 'h-32 w-auto transition-all duration-500 hover:scale-105 hover:rotate-2';

import adwaita from "@/assets/technologies/adwaita.svg";
import gjs from "@/assets/technologies/gjs.png"
import gtk from "@/assets/technologies/gtk.png"
import javascript from "@/assets/technologies/javascript.png"
import flatpak from "@/assets/technologies/flatpak.png"
import { inject } from "vue";

const links = inject("links")
</script>

<template>
    <div class="flex flex-row py-10 px-5 flex-wrap gap-6 sm:gap-10 justify-center items-center md:py-20">
        <a :href="links.technologies.adwaita" title="Adwaita UI">
            <img :class="technologiesClasses" :src="adwaita" alt="Adwaita UI" />
        </a>
        <a :href="links.technologies.javascript" title="Javascript">
            <img :class="technologiesClasses" :src="javascript" alt="Javascript" />
        </a>
        <a :href="links.technologies.gtk" title="GTK">
            <img :class="technologiesClasses" :src="gtk" alt="GTK" />
        </a>
        <a :href="links.technologies.gjs" title="GJS">
            <img :class="technologiesClasses" :src="gjs" alt="GJS" />
        </a>
        <a :href="links.technologies.flatpak" title="Flatpak">
            <img :class="technologiesClasses" :src="flatpak" alt="Flatpak" />
        </a>
    </div>
</template>