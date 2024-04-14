<script setup>
import { Icon } from "@iconify/vue";

import logo from "@/assets/logo.svg";

import adwaita from "@/assets/technologies/adwaita.svg";
import gjs from "@/assets/technologies/gjs.png"
import gtk from "@/assets/technologies/gtk.png"
import javascript from "@/assets/technologies/javascript.png"
import flatpak from "@/assets/technologies/flatpak.png"

import SectionParagraph from "@/components/SectionParagraph.vue";
import SectionContainer from "@/components/SectionContainer.vue";
import SectionTitle from "@/components/SectionTitle.vue";
import IconLink from '@/components/IconLink.vue'
import FooterView from "@/views/FooterView.vue";
import ScreenshotsCarousel from "@/partials/ScreenshotCarousel.vue";
import DownloadButton from '@/components/DownloadButton.vue'

const technologiesClasses = 'h-32 w-auto transition-all duration-500 hover:scale-105 hover:rotate-2';
</script>

<template>
  <main class="flex flex-col gap-0 text-slate-200 bg-gradient-to-b from-slate-950 to-slate-800 items-center ">
    <div class="w-full bg-contain bg-no-repeat bg-top bg-[url(@/assets/hero_bg.png)]">

      <!-- Hero Section -->
      <SectionContainer id="hero" class="w-full md:flex-row">
        <img class="w-8/12 mx-auto md:w-6/12 lg:w-4/12" :src="logo" alt="HTTP Codes Logo">

        <div class="flex flex-col lg:w-6/12 gap-5 justify-start">
          <h1 class="flex text-start font-bold font-title text-5xl flex-col gap-3">
            Easy offline HTTP Code handbook

            <small class="text-xl font-normal leading-tight">
              A simple, lightweight list of HTTP Codes returned by a server when making
              requests
            </small>
          </h1>

          <DownloadButton />
        </div>
      </SectionContainer>

      <!-- Why Create Section -->
      <SectionContainer id="why">
        <SectionTitle tag="h2" icon="ei:question">Why create it?</SectionTitle>

        <div class="sm:w-9/12">
          <SectionParagraph class="leading-relaxed">
            This is a simple learning project to help understand each HTTP Code that can
            be returned by a server when a request is made.
          </SectionParagraph>
          <SectionParagraph class="leading-relaxed">
            An offline application that provides a list of HTTP Codes and a simple explanation
            of what's happening under the hood. A simple handbook to he whenever you need
            to know what server is telling you.
          </SectionParagraph>
        </div>
      </SectionContainer>

      <!-- More Information -->
      <SectionContainer id="more-info">
        <SectionTitle tag="h2" icon="ei:pointer">More information</SectionTitle>
        <div class="sm:w-9/12">
          <SectionParagraph class="text-center">
            You can help this project grows in many ways.
            We will provide here some links to help you help us. 😁
          </SectionParagraph>

          <div class="flex flex-row gap-10 px-5 py-10 justify-center">
            <IconLink icon="mingcute:github-line" link="#" />
            <IconLink icon="mingcute:discord-line" link="#" />
            <IconLink icon="octicon:sponsor-tiers-16" link="#" />
          </div>
        </div>
      </SectionContainer>

      <!-- Screenshots -->
      <SectionContainer id="screenshots">
        <SectionTitle tag="h2" icon="ei:image">Screenshots</SectionTitle>

        <SectionParagraph class="text-center">
          Still not sure what this app is about?
          Checkout some screenshots for you down here! 👇
        </SectionParagraph>

        <ScreenshotsCarousel />
      </SectionContainer>

      <!-- Technologies -->
      <SectionContainer id="techs">
        <SectionTitle tag="h2" icon="ei:gear">Technologies</SectionTitle>

        <SectionParagraph class="text-center">
          <span class="font-bold">This project was built as a learning side-project.</span>
          <br>
          It exists because of the technologies listed below, and is provided as-is,
          with no guarantee. Be cautious! ⚠️
        </SectionParagraph>

        <div class="flex flex-row py-10 px-5 flex-wrap gap-6 sm:gap-10 justify-center items-center md:py-20">
          <a href="#" title="Adwaita UI">
            <img :class="technologiesClasses" :src="adwaita" alt="Adwaita UI" />
          </a>
          <a href="#" title="Javascript">
            <img :class="technologiesClasses" :src="javascript" alt="Javascript" />
          </a>
          <a href="#" title="GTK">
            <img :class="technologiesClasses" :src="gtk" alt="GTK" />
          </a>
          <a href="#" title="GJS">
            <img :class="technologiesClasses" :src="gjs" alt="GJS" />
          </a>
          <a href="#" title="Flatpak">
            <img :class="technologiesClasses" :src="flatpak" alt="Flatpak" />
          </a>
        </div>
      </SectionContainer>

      <SectionContainer>
        <SectionTitle tag="h2" icon="ei:link">Downloads</SectionTitle>

        <div class="flex flex-col gap-10 justify-center items-center">
          <SectionParagraph>
            📥 You can download Codes for free from our GitHub repository
          </SectionParagraph>

          <DownloadButton />
        </div>
      </SectionContainer>
    </div>
  </main>

  <FooterView />
</template>
