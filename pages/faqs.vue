<template>
    <div class="min-h-screen w-full bg-white pt-12 mb-10">
        <div class=" flex items-center justify-center w-full">
            <div class=" mx-auto mt-16 mb-4 max-w-4xl z-20">
                <h1 class="mb-5 text-[#070127] text-4xl sm:text-5xl font-medium leading-tight text-center">
                    Have Questions?
                </h1>
                <p class="text-[#747474] sm:w-[450px] w-full mx-auto text-center text-lg">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                </p>
                <div class="w-full max-w-3.5xl mx-auto space-y-4 mt-8">
                    <div v-for="(fa, i) in faqData" :key="i"
                        class="faq-item bg-[#FFE2D4] shadow-lg rounded-md overflow-hidden">
                        <div @click="toggleQuestion(i)"
                            :class="['faq-question cursor-pointer text-xl font-semibold p-5 flex items-center justify-between', { 'rounded-t-md': i === 0 }]">
                            <span class="text-[#101010] text-[21px] font-[500]">{{ fa.question }}</span>
                            <span class="text-2xl">
                                <svg v-if="selectedQuestion === i" width="24" height="24" viewBox="0 0 24 24"
                                    fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M20 12H4" stroke="#141B34" stroke-width="1.5" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                </svg>
                                <svg v-else xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M12 6v12M6 12h12" />
                                </svg>
                            </span>
                        </div>
                        <!-- Conditional border -->
                        <div v-if="selectedQuestion === i" class="border border-gray-400 w-[95%] m-auto"></div>
                        <div v-show="selectedQuestion === i || i === 0" class="faq-answer p-4 text-[17px] text-[#4D4845]">
                            {{ fa.answer }}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <call-to-action></call-to-action>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import faqData from "~/data/faq.json";

// Track the currently selected FAQ
const selectedQuestion = ref(0);

const toggleQuestion = (index) => {
    if (index !== 0) {
        selectedQuestion.value = selectedQuestion.value === index ? null : index;
    } else {
        selectedQuestion.value = index;
    }
};

useSeoMeta({
    title: "Frequently Asked Questions | PhotoFox Ai AI Art Generator",
    ogTitle: "Frequently Asked Questions | PhotoFox Ai AI Art Generator",
    description: "Find answers to common questions about PhotoFox Ai's AI art generation tools. Learn about our features, pricing, usage rights, and more to make the most of our platform for turning sketches into stunning digital art.",
    ogDescription: "Find answers to common questions about PhotoFox Ai's AI art generation tools. Learn about our features, pricing, usage rights, and more to make the most of our platform for turning sketches into stunning digital art.",
    ogImage: "/seo/sketch-to-image-cover.png",
    twitterCard: "/seo/sketch-to-image-cover.png",
    canonical: "https://photofox-ai.com/faqs",
});
</script>