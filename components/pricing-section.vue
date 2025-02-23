<template>
    <div class="flex justify-center items-center overflow-hidden">
        <iframe title="Pricing" :src="config.public.appBaseUrl + '/pricing-container'" frameborder="0" class="w-11/12 max-w-screen-xl h-[115vh]"></iframe>
    </div>
</template>

<script setup>
const config = useRuntimeConfig();
</script>