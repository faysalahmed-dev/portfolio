<template>
    <section
        id="about-me"
        class="max-w-[1100px] mx-auto rounded-[50px] py-10 px-16 about-section -mt-20 relative z-10"
    >
        <SectionHeading text="" margin="my-8">About Me</SectionHeading>
        <div class="flex py-6">
            <div class="flex-1 flex justify-center items-center">
                <NuxtImg src="/images/faysalahmed.png" width="350" />
            </div>
            <div class="flex-1 p-4">
                <div class="flex justify-between">
                    <div
                        class="py-3 w-36 rounded-lg about-small-box text-center"
                    >
                        <svg
                            class="inline-block mb-2"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            style="fill: currentColor; transform: ; msfilter: "
                        >
                            <path
                                d="M16.999 23V7c0-1.103-.897-2-2-2h-8c-1.103 0-2 .897-2 2v16l6-3.601 6 3.601z"
                            ></path>
                            <path
                                d="M15.585 3h1.414c1.103 0 2 .897 2 2v10.443l2 2.489V3c0-1.103-.897-2-2-2h-8c-1.103 0-2 .897-2 2h6.586z"
                            ></path>
                        </svg>
                        <h3 class="font-bold">Experience</h3>
                        <p>3+ years</p>
                    </div>
                    <div
                        class="py-3 w-36 rounded-lg about-small-box text-center"
                    >
                        <svg
                            class="inline-block mb-2"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            style="fill: currentColor; transform: ; msfilter: "
                        >
                            <path
                                d="M20 3H7c-1.103 0-2 .897-2 2v2H4c-1.103 0-2 .897-2 2v10c0 1.103.897 2 2 2h6c1.103 0 2-.897 2-2h8c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2zM6 9h4l-.003 9H4V9h2zm6 8V9c0-1.103-.897-2-2-2H7V5h11v12h-6z"
                            ></path>
                        </svg>
                        <h3 class="font-bold">Projects</h3>
                        <p>10 +</p>
                    </div>
                    <div
                        class="py-3 w-36 rounded-lg about-small-box text-center"
                    >
                        <svg
                            class="inline-block mb-2"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            style="fill: currentColor; transform: ; msfilter: "
                        >
                            <path
                                d="M4.5 8.552c0 1.995 1.505 3.5 3.5 3.5s3.5-1.505 3.5-3.5-1.505-3.5-3.5-3.5-3.5 1.505-3.5 3.5zM19 8h-2v3h-3v2h3v3h2v-3h3v-2h-3zM4 19h10v-1c0-2.757-2.243-5-5-5H7c-2.757 0-5 2.243-5 5v1h2z"
                            ></path>
                        </svg>
                        <h3 class="font-bold">Clients</h3>
                        <p>5 +</p>
                    </div>
                </div>
                <p class="my-10">
                    Full stack web developer From Chittagong, Bangladesh with
                    over a 3 of experience. I work with agencies across the
                    globe to create high performance & rich interactive apps
                    that work across all platforms & devices.
                </p>
                <div class="space-x-6">
                    <a
                        target="_blank"
                        href="https://wa.me/+8801997261058"
                        class="py-2 px-8 rounded-lg bg-primary font-bold"
                    >
                        Let's Talk
                    </a>
                    <button class="py-2 px-8 rounded-lg bg-primary font-bold">
                        Download CV
                    </button>
                </div>
            </div>
        </div>
    </section>
</template>
<style scoped>
.about-section {
    background: rgba(7, 3, 53, 1);
    background-image: radial-gradient(
        circle 610px at 5.2% 51.6%,
        rgba(5, 8, 114, 1) 0%,
        rgba(7, 3, 53, 1) 97.5%
    );
}
.about-small-box {
    background-image: linear-gradient(
        179.4deg,
        rgba(12, 20, 69, 1) -16.9%,
        rgba(71, 30, 84, 1) 119.9%
    );
    @apply shadow-md;
}
</style>
