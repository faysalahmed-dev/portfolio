<template>
    <!--  -->
    <div
        class="flex mt-16 md:flex-col-reverse lg:flex-row lg:pt-10 lg:pb-44 lg:mt-24 lg:max-w-6xl"
    >
        <div>
            <button
                class="welcome-btn py-2 px-3 rounded-lg font-bold cursor-default lg:flex-1"
            >
                Welcome to my Portfolio
            </button>
            <h1 class="text-3xl md:text-4xl lg:text-6xl my-4 md:my-6 lg:my-8">
                Hi I'M <span class="logo">Faysal</span>
            </h1>
            <div class="flex items-center mb-4">
                <h1 class="text-lg md:text-xl">And I'M</h1>
                <swiper
                    :slides-per-view="1"
                    direction="vertical"
                    :allowTouchMove="false"
                    :height="sliderItemHeight + 5"
                    :loop="true"
                    :speed="500"
                    :autoplay="{
                        delay: 2500,
                        disableOnInteraction: false,
                    }"
                    :modules="[Autoplay]"
                    class="text-xl md:text-2xl lg:text-3xl overflow-hidden"
                    :style="`margin-right: 0; margin-left: 10px; height: ${
                        sliderItemHeight + 5
                    }px; `"
                >
                    <swiper-slide>
                        <span
                            class="slider-caption inline-block font-bold"
                            ref="slideItem"
                        >
                            Font End Developer
                        </span>
                    </swiper-slide>
                    <swiper-slide>
                        <span class="slider-caption inline-block font-bold">
                            Vue JS Developer
                        </span>
                    </swiper-slide>
                    <swiper-slide>
                        <span class="slider-caption inline-block font-bold">
                            Full Stack Developer
                        </span>
                    </swiper-slide>
                    <swiper-slide>
                        <span class="slider-caption inline-block font-bold">
                            Freelancer
                        </span>
                    </swiper-slide>
                </swiper>
            </div>
            <!-- :allowTouchMove="false" -->
            <p class="w-[80%]">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem
                maxime consectetur ipsum dolorum veniam saepe quia vero numquam
                reprehenderit facere.
            </p>
            <a
                target="_blank"
                href="https://www.upwork.com/freelancers/~018852d8ff84d72f35"
                class="mt-5 bg-primary py-2 px-5 rounded-lg font-bold inline-block"
            >
                Hire Me
            </a>
        </div>
        <div
            class="w-3/4 mx-auto mb-8 hidden md:flex justify-center items-center lg:w-full"
        >
            <NuxtImg src="/images/hero-image.svg" class="" />
        </div>
    </div>
</template>
<script lang="ts" setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay } from 'swiper';
const sliderItemHeight = ref(0);
const slideItem = ref<HTMLSpanElement | null>(null);
onMounted(() => {
    if (slideItem.value) {
        sliderItemHeight.value = slideItem.value.clientHeight;
    }
});
</script>
<style scoped>
.welcome-btn {
    background: #433457;
    background-image: linear-gradient(
        179.4deg,
        rgba(12, 20, 69, 1) -16.9%,
        rgba(71, 30, 84, 1) 119.9%
    );
}
.slider-caption {
    color: var(--acen-light);
}
</style>
