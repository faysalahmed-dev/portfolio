<template>
    <div class="flex pt-10 pb-44 mt-24 max-w-6xl mx-auto">
        <div class="w-[50%]">
            <button>Welcome to my Portfolio</button>
            <h1 class="text-6xl my-8">
                Hi I'M <span class="name">Faysal</span>
            </h1>
            <p class="w-[70%]">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem
                maxime consectetur ipsum dolorum veniam saepe quia vero numquam
                reprehenderit facere.
            </p>
            <button class="mt-5">Hire Me</button>
        </div>
        <div class="w-[50%]">
            <NuxtImg src="/images/hero-image.svg" width="100%" />
        </div>
    </div>
</template>

<style scoped>
.name {
    color: var(--yello-light);
    background: linear-gradient(
        45deg,
        var(--yello-light) 30%,
        var(--acen-light) 70%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-weight: bolder;
    text-transform: uppercase;
}
</style>
