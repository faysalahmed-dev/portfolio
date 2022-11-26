<template>
    <section
        class="w-[1100px] mx-auto rounded-3xl py-20 px-16 about-section -mt-20"
    >
        <UtilsSectionHeading>About Me</UtilsSectionHeading>
        <div class="flex">
            <div class="w-2/4 flex justify-center items-center">
                <NuxtImg src="/images/faysalahmed.png" width="350" />
            </div>
            <div class="w-2/4 p-4">
                <div class="flex justify-between">
                    <div class="p-4 rounded-md bg-purple-500 text-center">
                        <h3 class="font-bold">Experience</h3>
                        <p>3+ years</p>
                    </div>
                    <div class="p-4 rounded-md bg-purple-500 text-center">
                        <h3 class="font-bold">Experience</h3>
                        <p>3+ years</p>
                    </div>
                    <div class="p-4 rounded-md bg-purple-500 text-center">
                        <h3 class="font-bold">Experience</h3>
                        <p>3+ years</p>
                    </div>
                </div>
                <p class="my-10">
                    Full stack web developer From Chittagong, Bangladesh with
                    over a 3 of experience. I work with agencies across the
                    globe to create high performance & rich interactive apps
                    that work across all platforms & devices.
                </p>
                <div class="space-x-6">
                    <button class="py-2 px-8 rounded-md bg-slate-700">
                        Let's Talk
                    </button>
                    <button class="py-2 px-8 rounded-md bg-slate-700">
                        Download CV
                    </button>
                </div>
            </div>
        </div>
    </section>
</template>
<style scoped>
.about-section {
    background: linear-gradient(
        to right,
        rgb(55, 65, 81),
        rgb(17, 24, 39),
        rgb(0, 0, 0)
    );
}
</style>
