<template>
  <div class="bg-[#FFF6F1]">
    <footer class="p-4 pt-16 max-w-7xl mx-auto">
      <div class="bg-white rounded-2xl p-10 mb-10">
        <div class="flex gap-20">
          <div class="footer__brand mb-8 w-full md:w-2/3">
            <div class="mb-5">
              <nuxt-link class="logo" to="/" aria-label="Home">
                <img src="/logo.png" alt="PhotoFox Logo" />
              </nuxt-link>
            </div>
            <p class="text-base leading-[28px] text-[#4D4845]">
              Create stunning AI photos instantly from your device. Upload pictures/selfies, build your Flux model, and
              generate professional-quality images in any setting. Choose pre-made packs or customize. No photographer,
              equipment, or special skills needed. Save time and money while producing amazing content for all your
              needs.
            </p>
          </div>
          <div class="mb-4 w-1/2 md:w-1/3">
            <h3 class="font-[500] text-[20px] text-[#101010] mb-4 mt-4">Pages</h3>
            <ul class="footer__list list-none p-0 space-y-2">
              <li><a href="/blogs" class="text-gray-600 text-base hover:text-purple-700">Blogs</a></li>
              <li><nuxt-link to="/testimonials"
                  class="text-gray-600 text-base hover:text-purple-700">Testimonials</nuxt-link></li>
              <li><nuxt-link to="/faqs" class="text-gray-600 text-base hover:text-purple-700">FAQs</nuxt-link></li>
              <li><nuxt-link to="/pricing" class="text-gray-600 text-base hover:text-purple-700">Pricing</nuxt-link>
              </li>
            </ul>
          </div>
          <div class="footer__column mb-4 w-1/2 md:w-1/3">
            <h3 class="font-[500] text-[20px] text-[#101010] mb-4 mt-4">Contact</h3>
            <ul class="footer__list list-none p-0 space-y-4">
              <div class="flex gap-2">
                <svg width="26" height="26" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="30" height="30" rx="10" fill="#FFE9E4" />
                  <path d="M6.66602 10L12.4269 13.2641C14.5507 14.4675 15.448 14.4675 17.5718 13.2641L23.3327 10"
                    stroke="#101010" stroke-width="1.5" stroke-linejoin="round" />
                  <path
                    d="M6.67916 16.23C6.73363 18.7847 6.76087 20.0619 7.70348 21.0082C8.64608 21.9543 9.95796 21.9872 12.5817 22.0532C14.1988 22.0938 15.7999 22.0938 17.417 22.0532C20.0408 21.9872 21.3526 21.9543 22.2953 21.0082C23.2378 20.0619 23.2651 18.7847 23.3195 16.23C23.3371 15.4086 23.3371 14.5921 23.3195 13.7707C23.2651 11.216 23.2378 9.93873 22.2953 8.99254C21.3526 8.04635 20.0408 8.01339 17.417 7.94747C15.7999 7.90683 14.1988 7.90683 12.5817 7.94746C9.95796 8.01338 8.64608 8.04633 7.70347 8.99253C6.76087 9.93873 6.73363 11.216 6.67915 13.7707C6.66163 14.5921 6.66164 15.4086 6.67916 16.23Z"
                    stroke="#101010" stroke-width="1.5" stroke-linejoin="round" />
                </svg>
                <li><nuxt-link to=""
                    class="text-gray-600 text-base hover:text-purple-700">photofox@gmail.com</nuxt-link></li>
              </div>
              <div class="flex gap-2">
                <svg width="26" height="26" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="30" height="30" rx="10" fill="#FFE9E4" />
                  <path
                    d="M9.16602 12.5003C9.16602 9.75047 9.16602 8.37553 10.0203 7.52127C10.8746 6.66699 12.2495 6.66699 14.9993 6.66699C17.7492 6.66699 19.1241 6.66699 19.9784 7.52127C20.8327 8.37553 20.8327 9.75047 20.8327 12.5003V17.5003C20.8327 20.2502 20.8327 21.6251 19.9784 22.4794C19.1241 23.3337 17.7492 23.3337 14.9993 23.3337C12.2495 23.3337 10.8746 23.3337 10.0203 22.4794C9.16602 21.6251 9.16602 20.2502 9.16602 17.5003V12.5003Z"
                    stroke="#101010" stroke-width="1.25" stroke-linecap="round" />
                  <path d="M14.166 20.833H15.8327" stroke="#101010" stroke-width="1.25" stroke-linecap="round"
                    stroke-linejoin="round" />
                  <path
                    d="M12.5 6.6665L12.5742 7.11152C12.7349 8.07591 12.8153 8.55811 13.146 8.85154C13.491 9.15762 13.9801 9.1665 15 9.1665C16.0199 9.1665 16.509 9.15762 16.854 8.85154C17.1847 8.55811 17.2651 8.07591 17.4258 7.11152L17.5 6.6665"
                    stroke="#101010" stroke-width="1.25" stroke-linejoin="round" />
                </svg>
                <li><nuxt-link to="" class="text-gray-600 text-base hover:text-purple-700">+12356678910</nuxt-link></li>
              </div>
              <div class="flex gap-2">
                <svg width="26" height="26" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="30" height="30" rx="10" fill="#FFE9E4" />
                  <path
                    d="M17.9173 14.1667C17.9173 15.7775 16.6115 17.0833 15.0007 17.0833C13.3898 17.0833 12.084 15.7775 12.084 14.1667C12.084 12.5558 13.3898 11.25 15.0007 11.25C16.6115 11.25 17.9173 12.5558 17.9173 14.1667Z"
                    stroke="#101010" stroke-width="1.25" />
                  <path
                    d="M15 6.6665C19.0588 6.6665 22.5 10.0273 22.5 14.1047C22.5 18.2469 19.0027 21.1538 15.7725 23.1304C15.5371 23.2633 15.2708 23.3332 15 23.3332C14.7292 23.3332 14.4629 23.2633 14.2275 23.1304C11.0032 21.1345 7.5 18.2613 7.5 14.1047C7.5 10.0273 10.9412 6.6665 15 6.6665Z"
                    stroke="#101010" stroke-width="1.25" />
                </svg>
                <li><nuxt-link to="" class="text-gray-600 text-base hover:text-purple-700">Lorem ipsum
                    Bangladesh.</nuxt-link></li>
              </div>
            </ul>
          </div>
        </div>
        <div class="footer__social w-full md:w-1/5">
          <div class="footer__social-icons flex gap-4 mb-4">
            <a target="_blank" class="footer__social-icon bg-gray-100 rounded-xl p-2"
              href="https://www.facebook.com/connektstudio">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M15.9217 6.75158C15.0461 6.7515 14.2675 6.75144 13.6389 6.83598C12.9557 6.92787 12.2658 7.13975 11.7019 7.70378C11.138 8.26781 10.9262 8.95793 10.8344 9.64139C10.7499 10.2702 10.7499 11.0491 10.75 11.9249V12.7535H10C9.30964 12.7535 8.75 13.3133 8.75 14.0039C8.75 14.6944 9.30964 15.2543 10 15.2543H10.75V21.2517C10.75 21.726 10.75 21.9631 10.6013 22.11C10.4526 22.2569 10.2173 22.2539 9.7467 22.2479C8.55726 22.2329 7.54575 22.1912 6.68802 22.0758C5.31137 21.8907 4.21911 21.5035 3.36091 20.645C2.50272 19.7866 2.11568 18.694 1.93059 17.3169C1.74998 15.973 1.74999 14.2518 1.75 12.0604V11.946C1.74999 9.75465 1.74998 8.03341 1.93059 6.68958C2.11568 5.31249 2.50272 4.21989 3.36091 3.36142C4.21911 2.50295 5.31137 2.11579 6.68802 1.93065C8.03143 1.74998 9.75214 1.74999 11.9428 1.75H12.0572C14.2479 1.74999 15.9686 1.74998 17.312 1.93065C18.6886 2.11579 19.7809 2.50295 20.6391 3.36142C21.4973 4.21989 21.8843 5.31248 22.0694 6.68958C22.25 8.03341 22.25 9.75466 22.25 11.946V12.0605C22.25 14.2518 22.25 15.973 22.0694 17.3169C21.8843 18.694 21.4973 19.7866 20.6391 20.645C19.7809 21.5035 18.6886 21.8907 17.312 22.0758C16.4543 22.1912 15.4427 22.2329 14.2533 22.2479C13.7827 22.2539 13.5474 22.2569 13.3987 22.11C13.25 21.9631 13.25 21.726 13.25 21.2517V15.2543H15C15.6904 15.2543 16.25 14.6944 16.25 14.0039C16.25 13.3133 15.6904 12.7535 15 12.7535H13.25V12.0032C13.25 11.0248 13.2527 10.4167 13.3121 9.97461C13.3657 9.57557 13.4449 9.49675 13.4685 9.47331L13.4697 9.47211L13.4709 9.4709C13.4943 9.44734 13.5731 9.36811 13.972 9.31446C14.414 9.25502 15.0219 9.25237 16 9.25237H17C17.6904 9.25237 18.25 8.69255 18.25 8.00197C18.25 7.3114 17.6904 6.75158 17 6.75158H15.9217Z"
                  fill="#FF5F38" />
              </svg>
            </a>
            <a target="_blank" class="footer__social-icon bg-gray-100 rounded-xl p-2"
              href="https://www.linkedin.com/company/connektstudio/posts/?feedView=all">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M11.9428 1.75H12.0572C14.2479 1.74999 15.9686 1.74998 17.312 1.93059C18.6886 2.11568 19.7809 2.50271 20.6391 3.36091C21.4973 4.21911 21.8843 5.31137 22.0694 6.68802C22.25 8.03144 22.25 9.75214 22.25 11.9428V12.0572C22.25 14.2479 22.25 15.9686 22.0694 17.312C21.8843 18.6886 21.4973 19.7809 20.6391 20.6391C19.7809 21.4973 18.6886 21.8843 17.312 22.0694C15.9686 22.25 14.2479 22.25 12.0572 22.25H11.9428C9.7521 22.25 8.03144 22.25 6.68802 22.0694C5.31137 21.8843 4.21911 21.4973 3.36091 20.6391C2.50272 19.7809 2.11568 18.6886 1.93059 17.312C1.74998 15.9686 1.74999 14.2479 1.75 12.0572V11.9428C1.74999 9.75211 1.74998 8.03144 1.93059 6.68802C2.11568 5.31137 2.50272 4.21911 3.36091 3.36091C4.21911 2.50271 5.31137 2.11568 6.68802 1.93059C8.03143 1.74998 9.75214 1.74999 11.9428 1.75ZM8.00195 10.5C8.00195 9.94771 7.55424 9.5 7.00195 9.5C6.44967 9.5 6.00195 9.94771 6.00195 10.5V17C6.00195 17.5523 6.44967 18 7.00195 18C7.55424 18 8.00195 17.5523 8.00195 17V10.5ZM11.002 9C11.4073 9 11.7564 9.2412 11.9134 9.58791C12.5213 9.215 13.2365 9 14.002 9C16.2111 9 18.002 10.7909 18.002 13V17C18.002 17.5523 17.5542 18 17.002 18C16.4497 18 16.002 17.5523 16.002 17V13C16.002 11.8954 15.1065 11 14.002 11C12.8974 11 12.002 11.8954 12.002 13V17C12.002 17.5523 11.5542 18 11.002 18C10.4497 18 10.002 17.5523 10.002 17V10C10.002 9.44771 10.4497 9 11.002 9ZM8.25977 7C8.25977 7.69036 7.70012 8.25 7.00977 8.25H7.00078C6.31043 8.25 5.75078 7.69036 5.75078 7C5.75078 6.30964 6.31043 5.75 7.00078 5.75H7.00977C7.70012 5.75 8.25977 6.30964 8.25977 7Z"
                  fill="#FF5F38" />
              </svg>
            </a>
            <a target="_blank" class="footer__social-icon bg-gray-100 rounded-xl p-2" href="https://twitter.com/connektstudio">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M17.312 1.93059C15.9686 1.74998 14.2479 1.74999 12.0572 1.75H11.9428C9.75212 1.74999 8.03144 1.74998 6.68803 1.93059C5.31137 2.11568 4.21911 2.50272 3.36092 3.36091C2.50272 4.21911 2.11568 5.31137 1.9306 6.68802C1.74998 8.03144 1.74999 9.75212 1.75 11.9428V12.0572C1.74999 14.2479 1.74998 15.9686 1.9306 17.312C2.11568 18.6886 2.50272 19.7809 3.36092 20.6391C4.21911 21.4973 5.31137 21.8843 6.68803 22.0694C8.03144 22.25 9.75211 22.25 11.9428 22.25H12.0572C14.2479 22.25 15.9686 22.25 17.312 22.0694C18.6887 21.8843 19.7809 21.4973 20.6391 20.6391C21.4973 19.7809 21.8843 18.6886 22.0694 17.312C22.25 15.9686 22.25 14.2479 22.25 12.0572V11.9428C22.25 9.7521 22.25 8.03144 22.0694 6.68802C21.8843 5.31137 21.4973 4.21911 20.6391 3.36091C19.7809 2.50272 18.6887 2.11568 17.312 1.93059ZM7 6.25C6.71836 6.25 6.46045 6.40779 6.33223 6.65856C6.20401 6.90933 6.22709 7.21079 6.392 7.43912L10.2116 12.7278L6.46968 16.4697C6.17678 16.7626 6.17678 17.2374 6.46968 17.5303C6.76257 17.8232 7.23744 17.8232 7.53034 17.5303L11.1012 13.9595L13.6142 17.4391C13.7552 17.6344 13.9814 17.75 14.2222 17.75H17C17.2817 17.75 17.5396 17.5922 17.6678 17.3414C17.796 17.0907 17.7729 16.7892 17.608 16.5609L13.7885 11.2722L17.5304 7.53033C17.8232 7.23744 17.8232 6.76256 17.5304 6.46967C17.2375 6.17678 16.7626 6.17678 16.4697 6.46967L12.8989 10.0405L10.3858 6.56088C10.2448 6.36565 10.0186 6.25 9.77778 6.25H7Z"
                  fill="#FF5F38" />
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div class="bg-white p-5 rounded-2xl">
        <div class="footer-button flex justify-between max-w-90% mx-auto">
          <p class="text-gray-600 text-base text-center"><a href="https://photofox.ai" target="_blank"
              class="text-blue-500">PhotoFox.ai</a> &copy; {{ year }} <a href="https://connekt.studio" target="_blank"
              class="text-blue-500">Connekt Studio</a> | All Rights Reserved</p>
          <ul class="list-none flex items-center justify-center gap-20">
            <li><nuxt-link to="/" class="text-gray-600 text-base text-center">Peivacy Policy</nuxt-link></li>
            <li><nuxt-link to="/" class="text-gray-600 text-base text-center">Terms of Service</nuxt-link></li>
          </ul>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
const config = useRuntimeConfig()
const year = new Date().getFullYear()
</script>