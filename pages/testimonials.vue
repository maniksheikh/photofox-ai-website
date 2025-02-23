<template>
    <div class="p-10 py-20 bg-[#FFF6F1]">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-20 max-w-6xl m-auto">
            <div v-for="(testimonial, index) in testimonials" :key="index" class="bg-white p-10 rounded-lg shadow-md">
                <div class="flex gap-4">
                    <div class="flex justify-center items-center">
                        <img :src="testimonial.personImage" :alt="testimonial.name" class="w-10 h-10 rounded-full"
                            :style="{ backgroundColor: testimonial.personBg }" />
                    </div>
                    <div>
                        <h3 class="text-[20px] text-[#070127] font-[400] text-start">{{ testimonial.name }}</h3>
                        <p class="text-[16px] text-[#73737B] font-[400] text-start">{{ testimonial.header }}</p>
                    </div>
                </div>
                <p class="mt-4 text-[#070127] font-[28px] text-start">{{ testimonial.content }}</p>
            </div>
        </div>
    </div>
  </template>
  
  <script setup>
//   import testimonials from '~/data/testimonials.json'
  </script>