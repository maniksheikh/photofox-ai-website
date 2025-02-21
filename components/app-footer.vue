<template>
    <footer class="footer bg-gray-100 p-4 pt-16">
      <div class="footer__content max-w-screen-xl mx-auto flex flex-wrap justify-between">
        <div class="footer__brand mb-8 w-full md:w-1/3">
          <h2 class="footer__logo text-2xl text-green-400 bg-gradient-to-r from-pink-600 to-red-600 bg-clip-text text-transparent font-bold mb-4">PhotoFox Ai</h2>
          <p class="footer__description text-base text-gray-600 mb-4">
            Sketch To Image (previously Scribble To Art) transforms any sketches into stunning image using AI magic.
          </p>
          <p class="footer__subtext text-base text-gray-600 mb-4">
            Draw or upload a sketch, pick a style, and watch our AI bring it to life. Sharpen details with our image
            upscaler and turn still image into videos, bringing your simple sketches to life as moving artworks.
          </p>
        </div>
        <div class="footer__links flex flex-wrap justify-between w-full md:w-3/5">
          <div class="footer__column mb-4 w-1/2 md:w-1/3">
            <h3 class="footer__title text-lg text-purple-700 mt-14 mb-4">Pages</h3>
            <ul class="footer__list list-none p-0">
              <li><a href="" class="text-gray-600 text-base hover:text-purple-700">PhotoFox Ai</a></li>
              <li><nuxt-link to="/upscale" class="text-gray-600 text-base hover:text-purple-700">Upscale Image</nuxt-link></li>
              <li><nuxt-link to="/image-to-video" class="text-gray-600 text-base hover:text-purple-700">Image to Video</nuxt-link></li>
              <li><nuxt-link to="/gallery" class="text-gray-600 text-base hover:text-purple-700">Gallery</nuxt-link></li>
              <li><nuxt-link to="/pricing" class="text-gray-600 text-base hover:text-purple-700">Pricing</nuxt-link></li>
              <li><nuxt-link to="/testimonials" class="text-gray-600 text-base hover:text-purple-700">Testimonials</nuxt-link></li>
              <li><nuxt-link to="/sitemap" class="text-gray-600 text-base hover:text-purple-700">Sitemap</nuxt-link></li>
            </ul>
          </div>
  
          <div class="footer__column mb-4 w-1/2 md:w-1/3">
            <h3 class="footer__title text-lg text-purple-700 mt-14 mb-4">&nbsp;</h3>
            <ul class="footer__list list-none p-0">
              <li><a href="https://sketchtoimage.tolt.io/login" class="text-gray-600 text-base hover:text-purple-700">Affiliates</a></li>
              <li><nuxt-link to="/blogs" class="text-gray-600 text-base hover:text-purple-700">Blogs</nuxt-link></li>
              <li><nuxt-link to="/faqs" class="text-gray-600 text-base hover:text-purple-700">Faqs</nuxt-link></li>
              <li><nuxt-link to="/contact" class="text-gray-600 text-base hover:text-purple-700">Contact Us</nuxt-link></li>
              <li><nuxt-link to="/privacy-policy" class="text-gray-600 text-base hover:text-purple-700">Privacy Policy</nuxt-link></li>
              <li><nuxt-link to="/terms-and-conditions" class="text-gray-600 text-base hover:text-purple-700">Terms & Conditions</nuxt-link></li>
            </ul>
          </div>
  
          <div class="footer__column mb-4 w-1/2 md:w-1/3">
            <h3 class="footer__title text-lg text-purple-700 mt-14 mb-4">Tools</h3>
            <ul class="footer__list list-none p-0">
              <!-- <li><nuxt-link to="/architectural-design" class="text-gray-600 text-base hover:text-purple-700">Architectural Design</nuxt-link></li>
              <li><nuxt-link to="/interior-design" class="text-gray-600 text-base hover:text-purple-700">Interior Design</nuxt-link></li>
              <li><nuxt-link to="/3d-texturing" class="text-gray-600 text-base hover:text-purple-700">Texture 3D Model/Design</nuxt-link></li>
              <li><nuxt-link to="/kids-art-reimagined" class="text-gray-600 text-base hover:text-purple-700">Reimagine Kids' Art</nuxt-link></li> -->
            </ul>
          </div>
        </div>
  
        <div class="footer__social w-full md:w-1/5">
          <h3 class="footer__title text-lg text-purple-700 mt-14 mb-4">Social</h3>
          <div class="footer__social-icons flex gap-4 mb-4">
            <a target="_blank" class="footer__social-icon bg-purple-700 text-white rounded-full p-2" href="https://www.facebook.com/sketchtoimage">
              <svg width="15px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                <path
                  d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />
              </svg>
            </a>
            <a target="_blank" class="footer__social-icon bg-purple-700 text-white rounded-full p-2" href="https://www.youtube.com/@connektstudio7607">
              <svg width="20px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                <path
                  d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z" />
              </svg>
            </a>
            <a target="_blank" class="footer__social-icon bg-purple-700 text-white rounded-full p-2" href="https://twitter.com/connektstudio">
              <svg width="20px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path
                  d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" />
              </svg>
            </a>
            <a target="_blank" class="footer__social-icon bg-purple-700 text-white rounded-full p-2" href="https://www.linkedin.com/company/sketch-to-image">
              <svg width="19px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path
                  d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" />
              </svg>
            </a>
            <a target="_blank" class="footer__social-icon bg-purple-700 text-white rounded-full p-2" href="https://www.pinterest.com/scribbletoart">
              <svg width="19px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                <path
                  d="M204 6.5C101.4 6.5 0 74.9 0 185.6 0 256 39.6 296 63.6 296c9.9 0 15.6-27.6 15.6-35.4 0-9.3-23.7-29.1-23.7-67.8 0-80.4 61.2-137.4 140.4-137.4 68.1 0 118.5 38.7 118.5 109.8 0 53.1-21.3 152.7-90.3 152.7-24.9 0-46.2-18-46.2-43.8 0-37.8 26.4-74.4 26.4-113.4 0-66.2-93.9-54.2-93.9 25.8 0 16.8 2.1 35.4 9.6 50.7-13.8 59.4-42 147.9-42 209.1 0 18.9 2.7 37.5 4.5 56.4 3.4 3.8 1.7 3.4 6.9 1.5 50.4-69 48.6-82.5 71.4-172.8 12.3 23.4 44.1 36 69.3 36 106.2 0 153.9-103.5 153.9-196.8C384 71.3 298.2 6.5 204 6.5z" />
              </svg>
            </a>
          </div>
          <div class="footer__badges flex gap-2 flex-wrap">
            <a href="https://www.producthunt.com/posts/scribble-to-art?utm_source=badge-top-post-topic-badge&utm_medium=badge&utm_souce=badge-scribble&#0045;to&#0045;art" target="_blank">
              <img src="https://api.producthunt.com/widgets/embed-image/v1/top-post-topic-badge.svg?post_id=395674&theme=neutral&period=weekly&topic_id=44" alt="Scribble To Art - Turn your sketches into art with AI magic | Product Hunt" class="w-64 h-auto" />
            </a>
            <a href="https://www.producthunt.com/posts/scribble-to-art?embed=true&utm_source=badge-featured&utm_medium=badge&utm_souce=badge-scribble&#0045;to&#0045;art" target="_blank">
              <img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=395674&theme=light" alt="Scribble To Art - Turn your sketches into art with AI magic | Product Hunt" class="w-64 h-auto" />
            </a>
          </div>
        </div>
      </div>
      <div class="footer-button mt-4 pt-4 border-t border-gray-300 flex justify-between max-w-90% mx-auto">
        <p class="text-gray-600 text-base text-center">&copy; {{ year }} <a href="https://connekt.studio" target="_blank" class="text-blue-500">Connekt Studio</a> | All Rights Reserved</p>
        <p class="text-gray-600 text-base text-center">Useful Products: <a href="https://photofox.ai" target="_blank" class="text-blue-500">PhotoFox.ai</a></p>
      </div>
    </footer>
  </template>
  
  <script setup>
    const config = useRuntimeConfig()
    const year = new Date().getFullYear()
  </script>