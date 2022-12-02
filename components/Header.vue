<template>
    <header class="flex justify-between py-10">
        <h3 class="text-xl font-bold logo">Faysal Ahmed</h3>
        <div>
            <button
                class="flex flex-col space-y-[3px] md:hidden"
                @click="showNav = true"
            >
                <span class="w-5 h-1 rounded-md bg-white inline-block"></span>
                <span class="w-5 h-1 rounded-md bg-white inline-block"></span>
                <span class="w-5 h-1 rounded-md bg-white inline-block"></span>
            </button>
            <ul
                class="nav-items navigation font-bold"
                v-if="showNav"
                @click="!isLargerDevice && (showNav = false)"
            >
                <button
                    class="md:hidden nav-close-btn flex w-10 h-10 justify-center items-center fixed top-8 right-4 rounded-full"
                >
                    <svg
                        class="transform rotate-45 inline-block"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        style="fill: currentColor"
                    >
                        <path d="M19 11h-6V5h-2v6H5v2h6v6h2v-6h6z"></path>
                    </svg>
                </button>
                <!-- flex justify-between space-x-5 -->
                <li><nuxt-link href="#about-me">About Me</nuxt-link></li>
                <li><nuxt-link href="#skills">Skills</nuxt-link></li>
                <li><nuxt-link href="#service">Service</nuxt-link></li>
                <!-- <li><a href="">Experiences</a></li> -->
                <li><nuxt-link href="#projects">Recent Work</nuxt-link></li>
                <!-- <li><a href="">Client Review</a></li> -->
                <!-- <li><a href="">Recent Post</a></li> -->
                <li><nuxt-link href="#contact">Get In Touch</nuxt-link></li>
            </ul>
        </div>
    </header>
</template>
<script setup lang="ts">
import { useMediaQuery, breakpointsTailwind } from '@vueuse/core';

const isLargerDevice = useMediaQuery(
    `(min-width: ${breakpointsTailwind.md}px)`
);
const showNav = ref(isLargerDevice.value);

watch(isLargerDevice, value => {
    console.log(value);
    console.log('is larger devices');
    if (value && !showNav.value) {
        showNav.value = true;
    }
    if (!value && showNav.value) {
        showNav.value = false;
    }
});

watch(showNav, currentVal => {
    console.log('watch showNav');
    if (currentVal && !isLargerDevice.value) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = 'auto';
    }
});
</script>
<style scoped>
.nav-close-btn {
    background: #433457;
    background-image: linear-gradient(
        179.4deg,
        rgba(12, 20, 69, 1) -16.9%,
        rgba(71, 30, 84, 1) 119.9%
    );
}
</style>
