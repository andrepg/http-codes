<script setup>
import screenshotFirstScreen from "@/assets/screenshots/screen_http_groups_list.png";
import screenshotSecondScreen from "@/assets/screenshots/screen_http_codes_list.png";
import screenshotThirdScreen from "@/assets/screenshots/screen_http_code_list_with_details.png";

</script>

<template>
    <div class="flex flex-col justify-start items-center lg:flex-row w-full xl:justify-center">
        <div class="">
            <img class="transition transform duration-250 scale-100 hover:scale-105 " :src="screenshotFirstScreen"
                alt="">
        </div>
        <div class="">
            <img class="transition transform duration-250 scale-100 hover:scale-105 " :src="screenshotSecondScreen"
                alt="">
        </div>
        <div class="">
            <img class="transition transform duration-250 scale-100 hover:scale-105 " :src="screenshotThirdScreen"
                alt="">
        </div>
    </div>
</template>