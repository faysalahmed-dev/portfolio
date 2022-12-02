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
            <h1 class="text-6xl my-8">
                Hi I'M <span class="logo">Faysal</span>
            </h1>
            <p class="w-[80%] lg:w-1/2">
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

<style scoped>
.welcome-btn {
    background: #433457;
    background-image: linear-gradient(
        179.4deg,
        rgba(12, 20, 69, 1) -16.9%,
        rgba(71, 30, 84, 1) 119.9%
    );
}
</style>
