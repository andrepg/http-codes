<script setup>
import { Icon } from "@iconify/vue";
</script>

<template>
    <footer class="w-full h-min-20 relative bg-slate-900 text-slate-100 py-5 px-2
        flex flex-col md:flex-row md:flex-wrap md:gap-y-10 pb-20 md:px-5 gap-y-5
    ">
        <div class="flex flex-col w-full gap-3 md:w-1/2">
            <p class="mb-2">Made with 🤍 accross the world!</p>
            <small>
                <Icon class="inline h-5 w-auto" icon="ei:chevron-right" />
                Icons by <a target="_blank" rel="nofollow" href="https://iconify.design">Iconify</a>
            </small>

            <small>
                <Icon class="inline h-5 w-auto" icon="ei:chevron-right" />
                Build entirely with
                <a target="_blank" rel="nofollow" href="https://vuejs.org">VueJS</a> &
                <a target="_blank" rel="nofollow" href="https://vitejs.dev">Vite</a>
            </small>

            <small>
                <Icon class="inline h-5 w-auto" icon="ei:chevron-right" />
                Built with support of <a target="_blank" rel="nofollow" href="https://tailwindcss.com">Tailwind CSS</a>
            </small>
        </div>

        <div class="flex flex-col w-full gap-3 md:w-1/2">
            <p class="mb-2">Some disclaimers</p>

            <small class="text-sm">
                <Icon class="inline h-5 w-auto" icon="ei:exclamation" />
                Adwaita, GTK, GJS, Javascript and Flatpak are not
                affiliated with this site and tool in any way.
            </small>

            <small class="text-sm">
                <Icon class="inline h-5 w-auto" icon="ei:exclamation" />
                This is an OpenSource project. Offered <i>as-is</i>, without any warrant. Be careful, always.
            </small>
        </div>

        <small class="text-sm w-full flex-grow">
            <Icon class="inline h-5 w-auto" icon="ei:exclamation" />
            If you found any error in this website or the app, feel free to open an issue or a Pull Request at our
            <a target="_blank" class="underline" href="https://github.com/andrepg/http-codes/issues">repository</a>
        </small>
    </footer>
</template>