<template>
    <div class="pt-12 min-h-screen w-full bg-[#FEF6FE]">
      <div class="pricing-section">
        <h1 class="flex items-center justify-center gap-2 text-center text-3xl text-[#224079] my-12 sm:text-xl">
          Simple Pricing
        </h1>
        <p class="text-center text-xl text-gray-600 mb-4 opacity-70 sm:text-lg">
          Choose a plan that works for you.
        </p>
        <pricingSection></pricingSection>
        <p class="mx-auto max-w-4xl bg-white p-4 rounded-lg leading-loose text-gray-600 sm:mt-12">
          <span class="font-bold text-[#B82C6F]"> *</span> Please note that each AI model
          requires a different
          number of credits per
          use. The figures
          shown represent
          the
          maximum number of generations possible if all credits are used for a single model type. In practice, you'll
          likely use a mix of models, allowing for diverse creations within your credit limit. For example, using
          credits for SketchToImage(v2) will leave fewer credits available for video generation or upscaling. This
          flexible system lets you allocate credits based on your specific needs. For a detailed breakdown of credit
          costs per model use, please click on the <span>💰 Cost</span> link in navbar.
        </p>
      </div>
    </div>
  </template>
  
  <script setup>
    useSeoMeta({
      title: "Pricing Plans | PhotoFox AI Art Generator",
      ogTitle: "Pricing Plans | PhotoFox AI Art Generator",
      description: "Explore our flexible pricing options for PhotoFox's AI art generation tools. Find the perfect plan to unleash your creativity and transform your sketches into stunning digital art.",
      ogDescription: "Explore our flexible pricing options for PhotoFox's AI art generation tools. Find the perfect plan to unleash your creativity and transform your sketches into stunning digital art.",
      ogImage: "/seo/sketch-to-image-cover.png",
      twitterCard: "/seo/sketch-to-image-cover.png",
      canonical: "https://photofox-ai.com/pricing",
    });
  </script>
  