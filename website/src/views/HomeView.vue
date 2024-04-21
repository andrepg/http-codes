<script setup>
import logo from "@/assets/logo.svg";

import SectionParagraph from "@/components/SectionParagraph.vue";
import SectionContainer from "@/components/SectionContainer.vue";
import SectionTitle from "@/components/SectionTitle.vue";
import IconLink from '@/components/IconLink.vue'
import FooterView from "@/views/FooterView.vue";
import ScreenshotsCarousel from "@/partials/ScreenshotCarousel.vue";
import TechnologiesGrid from "@/partials/TechnologiesGrid.vue";
import DownloadButton from '@/components/DownloadButton.vue'
import { inject } from "vue";

const links = inject("links");
</script>

<template>
  <main class="flex flex-col gap-0 text-slate-200 bg-gradient-to-b from-slate-950 to-slate-800 items-center ">
    <div class="w-full bg-contain bg-no-repeat bg-top bg-[url(@/assets/hero_bg.png)]">

      <!-- Hero Section -->
      <SectionContainer id="hero" class="w-full md:flex-row max-w-screen-2xl lg:mx-auto">
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

        <div class="sm:w-9/12 justify-center max-w-screen-lg">
          <SectionParagraph class="leading-relaxed text-center">
            This is a simple learning project to help understand each HTTP Code that can
            be returned by a server when a request is made.
          </SectionParagraph>
          <SectionParagraph class="leading-relaxed text-center">
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
            <IconLink icon="mingcute:github-line" :link="links.github" />
            <IconLink icon="mingcute:discord-line" :link="links.discord" />
            <IconLink icon="octicon:sponsor-tiers-16" :link="links.sponsor" />
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

        <TechnologiesGrid />
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
