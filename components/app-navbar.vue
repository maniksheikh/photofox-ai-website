<template>
    <div
        class="px-10 flex justify-between items-center p-4 fixed w-full z-50 bg-gray-100 backdrop-blur-md border-b border-opacity-10 border-gray-100">
        <div>
            <nuxt-link class="logo" to="/" aria-label="Home">
                <img src="/logo.png" alt="PhotoFox Logo" />
            </nuxt-link>
        </div>
        <div class="flex items-center gap-10">
            <div class="flex flex-wrap justify-center gap-4 sm:gap-6 lg:gap-8">
                <nuxt-link class="text-[#070127] text-[18px] font-[400]" to="/blogs">Blogs</nuxt-link>
                <nuxt-link class="text-[#070127] text-[18px] font-[400]" to="/testimonials">Testimonials</nuxt-link>
                <nuxt-link class="text-[#070127] text-[18px] font-[400]" to="/faqs">FAQs</nuxt-link>
                <nuxt-link class="text-[#070127] text-[18px] font-[400]" to="/pricing">Pricing</nuxt-link>
            </div>
            <div class="flex items-center">
                <button
                    class="flex items-center gap-2 w-full px-5 py-2.5 bg-[#FF5F38] text-white font-semibold rounded-md hover:bg-[#ec7455] active:bg-blue-800 transition">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M10.1891 1.60159C7.21055 1.59378 4.58945 3.1348 3.09141 5.46292C3.025 5.56644 3.09922 5.70315 3.22227 5.70315H4.59531C4.68906 5.70315 4.77695 5.66214 4.83555 5.58987C4.97227 5.42386 5.11875 5.2637 5.27305 5.11136C5.90977 4.47659 6.65 3.97659 7.47422 3.62894C8.32578 3.26956 9.23203 3.08597 10.1676 3.08597C11.1031 3.08597 12.0094 3.26761 12.8609 3.62894C13.6852 3.97659 14.4254 4.47659 15.0621 5.11136C15.6988 5.74612 16.1969 6.48636 16.5465 7.30862C16.9078 8.16019 17.0895 9.06448 17.0895 10C17.0895 10.9356 16.9059 11.8399 16.5465 12.6914C16.1988 13.5137 15.6988 14.2539 15.0621 14.8887C14.4254 15.5235 13.6852 16.0235 12.8609 16.3711C12.0087 16.7311 11.0927 16.9157 10.1676 16.9141C9.23203 16.9141 8.32578 16.7305 7.47422 16.3711C6.65161 16.0238 5.9041 15.5204 5.27305 14.8887C5.11875 14.7344 4.97422 14.5742 4.83555 14.4102C4.77695 14.3379 4.68711 14.2969 4.59531 14.2969H3.22227C3.09922 14.2969 3.02305 14.4336 3.09141 14.5371C4.5875 16.8594 7.19687 18.3985 10.1676 18.3985C14.7809 18.3985 18.527 14.6856 18.5738 10.086C18.6207 5.41214 14.8688 1.61331 10.1891 1.60159ZM7.71484 12.1875V10.7032H1.58203C1.49609 10.7032 1.42578 10.6328 1.42578 10.5469V9.45315C1.42578 9.36722 1.49609 9.2969 1.58203 9.2969H7.71484V7.81253C7.71484 7.68167 7.86719 7.60745 7.96875 7.68948L10.7402 9.87698C10.7589 9.8916 10.774 9.91027 10.7844 9.93159C10.7948 9.95291 10.8002 9.97632 10.8002 10C10.8002 10.0237 10.7948 10.0471 10.7844 10.0685C10.774 10.0898 10.7589 10.1085 10.7402 10.1231L7.96875 12.3106C7.86719 12.3907 7.71484 12.3184 7.71484 12.1875Z"
                            fill="white" />
                    </svg>
                    Login
                </button>
            </div>
        </div>
        <div class="md:hidden">
            <div class="hamburger-menu" @click="toggleResponsiveMenu">
                <svg v-if="!isResponsiveMenuVisible" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                    fill="none">
                    <path fill="currentColor"
                        d="M2 9a1 1 0 0 1 1-1h18a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1M2 15a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1">
                    </path>
                </svg>
                <svg v-else xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                    <path fill="currentColor" fill-rule="evenodd"
                        d="M6.004 6c-.148.148-.222.222-.26.304a.5.5 0 0 0-.007.4c.035.083.106.16.25.313l5.31 5.69 5.69 5.31c.153.143.23.215.313.25a.5.5 0 0 0 .4-.007c.082-.038.156-.112.304-.26s.222-.222.26-.304a.5.5 0 0 0 .006-.4c-.034-.083-.106-.16-.249-.313l-5.31-5.69-5.69-5.31c-.153-.143-.23-.215-.313-.25a.5.5 0 0 0-.4.007c-.082.038-.156.112-.304.26"
                        clip-rule="evenodd"></path>
                    <path fill="currentColor" fill-rule="evenodd"
                        d="M18.004 6c.148.148.222.222.26.304a.5.5 0 0 1 .006.4c-.034.083-.106.16-.248.313l-5.31 5.69-5.691 5.31c-.153.143-.23.215-.313.25a.5.5 0 0 1-.4-.007c-.082-.038-.156-.112-.304-.26s-.222-.222-.26-.304a.5.5 0 0 1-.007-.4c.035-.083.106-.16.25-.313l5.31-5.69 5.69-5.31c.153-.143.23-.215.313-.25a.5.5 0 0 1 .4.007c.082.038.156.112.304.26"
                        clip-rule="evenodd"></path>
                </svg>
            </div>
        </div>
        <div class="mobile-menu" v-if="isResponsiveMenuVisible">
            <responsive-menu @hide-responsive-menu="isResponsiveMenuVisible = false" />
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";
import responsiveMenu from "./responsive-menu.vue";

const isResponsiveMenuVisible = ref(false);
const isUseCaseLinksVisible = ref(false);
const isProductLinksVisible = ref(false);

const toggleResponsiveMenu = () => {
    isResponsiveMenuVisible.value = !isResponsiveMenuVisible.value;
};

const updateVisibility = (newVisibility) => {
    isUseCaseLinksVisible.value = newVisibility;
    isProductLinksVisible.value = newVisibility;
};

const useCaseLinks = [
    {
        text: 'Reimagine Kids\' Art',
        to: '/kids-art-reimagined',
        description: 'Transform kids\' art into many styles. Just upload any sketch and see the magic.',
        image: '/nav/kids-art-reimagined.png',
        alt: 'Kids Art Reimagined Example',
        type: 'nuxt-link'
    },
    {
        text: 'Architectural Design',
        to: '/architectural-design',
        description: 'Convert any architectural sketch to a realistic images with a single click.',
        image: '/nav/architectural-design.png',
        alt: 'Architectural Design Example',
        type: 'nuxt-link'
    },
    {
        text: 'Interior Design',
        to: '/interior-design',
        description: 'Visualise your interior design sketch into a realistic render in seconds.',
        image: '/nav/interior-design.png',
        alt: 'Interior Design Example',
        type: 'nuxt-link'
    },
    {
        text: 'Texture 3D Model/Design',
        to: '/3d-texturing',
        description: 'Texture your 3D models in various styles with an ease.',
        image: '/nav/3d-texturing.png',
        alt: '3D Texturing Example',
        type: 'nuxt-link'
    }
];
const productLinks = [
    {
        text: "PhotoFox Ai",
        to: "/",
        description: "Transform any sketch into image in various styles with a single click.",
        image: '/nav/sketch-to-image.png',
        alt: 'PhotoFox Ai Example',
        type: "nuxt-link",
    },
    {
        text: "Upscale Image",
        to: "/upscale",
        description: "Enhance & upscale any image with cutting-edge AI technology.",
        image: '/nav/upscale-image.png',
        alt: 'Image Upscaling Example',
        type: "nuxt-link",
    },
    {
        text: 'Image to Video',
        to: '/image-to-video',
        description: 'Animate any image into a video in seconds with latest AI model.',
        image: '/nav/image-to-video.png',
        alt: 'Image to Video Example',
        type: 'nuxt-link'
    },
];
</script>