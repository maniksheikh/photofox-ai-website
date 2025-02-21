<template>
    <div class="menu-container p-4" @click="hideResponsiveMenu">
      <div class="flex flex-col">
        <div class="visible">
          <a href="" class="btn-signin flex items-center gap-2 w-full">
            <span class="mt-1">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M10 11V8L15 12L10 16V13H1V11H10ZM2.458 15H4.582C5.28005 16.7191 6.55371 18.1422 8.18512 19.0259C9.81652 19.9097 11.7043 20.1991 13.5255 19.8447C15.3468 19.4904 16.9883 18.5142 18.1693 17.0832C19.3503 15.6523 19.9975 13.8554 20 12C20.001 10.1427 19.3558 8.34283 18.1749 6.90922C16.994 5.47561 15.3511 4.49756 13.528 4.14281C11.7048 3.78807 9.81505 4.07874 8.18278 4.96498C6.55051 5.85121 5.27747 7.27778 4.582 9H2.458C3.732 4.943 7.522 2 12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22C7.522 22 3.732 19.057 2.458 15Z"
                  fill="white" />
              </svg>
            </span>
            Sign In
          </a>
        </div>
        <div class="flex-links">
          <div class="border-b">
            <button class="btn-tools w-full flex justify-between items-center py-2" @click="isToolsLinkVisible = !isToolsLinkVisible">
              <span>Tools</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" class="!mr-0 ml-1">
                <path fill="currentColor"
                  d="M6.84 9.84 5.8 8.8c-.915-.915-1.373-1.373-1.385-1.769a1 1 0 0 1 .315-.76C5.018 6 5.665 6 6.96 6h2.08c1.295 0 1.942 0 2.23.271a1 1 0 0 1 .315.76c-.012.396-.47.854-1.385 1.769L9.16 9.84c-.423.423-.634.634-.881.706a1 1 0 0 1-.558 0c-.247-.072-.458-.283-.88-.706">
                </path>
              </svg>
            </button>
            <div class="link-container" v-if="isToolsLinkVisible">
              <ul class="content flex flex-col gap-2 pb-5">
                <li v-for="(link, index) in toolsLink" :key="index" @click="isToolsLinkVisible = false">
                  <template v-if="link.type === 'a'">
                    <a :href="link.to" class="flex items-center gap-2">
                      <img :src="link.image" alt="Link Image" class="link-image w-36 h-20 object-contain rounded-md" />
                      <div class="link-text">
                        <h3 class="text-lg font-normal text-gray-800">{{ link.text }}</h3>
                        <p class="text-sm text-gray-600">{{ link.description }}</p>
                      </div>
                    </a>
                  </template>
                  <template v-else>
                    <nuxt-link :to="link.to" class="flex items-center gap-2">
                      <img :src="link.image" alt="Link Image" class="link-image w-36 h-20 object-contain rounded-md" />
                      <div class="link-text">
                        <h3 class="text-lg font-normal text-gray-800">{{ link.text }}</h3>
                        <p class="text-sm text-gray-600">{{ link.description }}</p>
                      </div>
                    </nuxt-link>
                  </template>
                </li>
              </ul>
            </div>
          </div>
          <div class="border-b">
            <button class="btn-use-cases w-full flex justify-between items-center py-2" @click="isUseCaseLinksVisible = !isUseCaseLinksVisible">
              <span>Use cases</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" class="!mr-0 ml-1">
                <path fill="currentColor"
                  d="M6.84 9.84 5.8 8.8c-.915-.915-1.373-1.373-1.385-1.769a1 1 0 0 1 .315-.76C5.018 6 5.665 6 6.96 6h2.08c1.295 0 1.942 0 2.23.271a1 1 0 0 1 .315.76c-.012.396-.47.854-1.385 1.769L9.16 9.84c-.423.423-.634.634-.881.706a1 1 0 0 1-.558 0c-.247-.072-.458-.283-.88-.706">
                </path>
              </svg>
            </button>
            <div class="link-container" v-if="isUseCaseLinksVisible">
              <div class="container">
                <ul class="content flex flex-col gap-2 pb-5">
                  <li v-for="(link, index) in useCaseLinks" :key="index" @click="isUseCaseLinksVisible = false">
                    <template v-if="link.type === 'a'">
                      <a :href="link.to" class="flex items-center gap-2">
                        <img :src="link.image" alt="Link Image" class="link-image w-36 h-20 object-contain rounded-md" />
                        <div class="link-text">
                          <h3 class="text-lg font-normal text-gray-800">{{ link.text }}</h3>
                          <p class="text-sm text-gray-600">{{ link.description }}</p>
                        </div>
                      </a>
                    </template>
                    <template v-else>
                      <nuxt-link :to="link.to" class="flex items-center gap-2">
                        <img :src="link.image" alt="Link Image" class="link-image w-36 h-20 object-contain rounded-md" />
                        <div class="link-text">
                          <h3 class="text-lg font-normal text-gray-800">{{ link.text }}</h3>
                          <p class="text-sm text-gray-600">{{ link.description }}</p>
                        </div>
                      </nuxt-link>
                    </template>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <ul class="flex flex-col">
            <li class="navigate-link border-b"> <nuxt-link to="/blogs"> Blogs </nuxt-link></li>
            <li class="navigate-link border-b"> <nuxt-link to="/gallery"> Gallery </nuxt-link></li>
            <li class="navigate-link border-b"><nuxt-link to="/testimonials">
                Testimonials
              </nuxt-link></li>
            <li class="navigate-link"> <nuxt-link to="/pricing"> Pricing </nuxt-link></li>
          </ul>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  const config = useRuntimeConfig();
  const emit = defineEmits(["hide-responsive-menu"]);
  const isToolsLinkVisible = ref(false)
  const isUseCaseLinksVisible = ref(false)
  const useCaseLinks = [
    {
      text: 'Reimagine Kids\' Art',
      to: '/kids-art-reimagined',
      description: 'Transform kids\' art into many styles. Just upload any sketch and see the magic.',
      image: '/nav/kids-art-reimagined.png',
      type: 'nuxt-link'
    },
    {
      text: 'Architectural Design',
      to: '/architectural-design',
      description: 'Convert any architectural sketch to a realistic images with a single click.',
      image: '/nav/architectural-design.png',
      type: 'nuxt-link'
    },
    {
      text: 'Interior Design',
      to: '/interior-design',
      description: 'Visualise your interior design sketch into a realistic render in seconds.',
      image: '/nav/interior-design.png',
      type: 'nuxt-link'
    },
    {
      text: 'Texture 3D Model/Design',
      to: '/3d-texturing',
      description: 'Texture your 3D models in various styles with an ease.',
      image: '/nav/3d-texturing.png',
      type: 'nuxt-link'
    }
  ];
  const toolsLink = [
    {
      text: "PhotoFox Ai",
      to: "/",
      description: "Transform any sketch into image in various styles with a single click.",
      image: '/nav/sketch-to-image.png',
      type: "nuxt-link",
    },
    {
      text: "Upscale Image",
      to: "/upscale",
      description: "Enhance & upscale any image with cutting-edge AI technology.",
      image:
        '/nav/upscale-image.png',
      type: "nuxt-link",
    },
    {
      text: 'Image to Video',
      to: '/image-to-video',
      description: 'Animate any image into a video in seconds with latest AI model.',
      image: '/nav/image-to-video.png',
      type: 'nuxt-link'
    },
  
  ];
  
  function hideResponsiveMenu(event) {
    const target = event.target.closest("a, nuxt-link");
    if (target) {
      emit("hide-responsive-menu");
    }
  }
  </script>