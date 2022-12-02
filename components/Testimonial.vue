<template>
    <section class="container mx-auto">
        <SectionHeading text="What Client Said About Me" margin="my-10">
            Testimonial
        </SectionHeading>
        <!--  -->
        <div class="lg:w-8/12 lg:mx-auto">
            <swiper
                :navigation="true"
                :slides-per-view="1"
                :allowTouchMove="true"
                :loop="true"
                :speed="500"
                :modules="[Navigation]"
            >
                <swiper-slide v-for="slide in slideItems" :key="slide.client">
                    <div class="text-center p-4 w-5/6 rounded-md mx-auto">
                        <p class="mb-3 relative">
                            {{ slide.text }}
                        </p>
                        <h3 class="font-bold">{{ slide.client }}</h3>
                        <h4 class="ml-1 text-sm font-light opacity-95">
                            - {{ slide.platform }}
                        </h4>
                    </div>
                </swiper-slide>
            </swiper>
        </div>
    </section>
</template>
<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation } from 'swiper';
import 'swiper/css/navigation';
const slideItems = [
    {
        text: '" Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro suscipit accusamus incidunt error voluptas nulla, obcaecati, similique officiis aspernatur doloribus id commodi sapiente. Reprehenderit, fugiat ratione assumenda, officia nobis aspernatur facere laborum dolores incidunt, optio repellat eos rerum dignissimos ullam."',
        platform: 'Upwork',
        client: 'Jone Deo',
    },
    {
        text: '" Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis ipsam facilis, eaque molestiae dolorum dicta tempora a! Dolores possimus voluptas voluptatem, dolorum iure quaerat a accusantium vel fugit mollitia? Voluptatibus? "',
        platform: 'Upwork',
        client: 'Micale Josh',
    },
    {
        text: '" Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta minus, numquam exercitationem error asperiores sequi obcaecati debitis temporibus dignissimos sed. "',
        platform: 'Upwork',
        client: 'Samir Ahmed',
    },
];
</script>

<style>
:root {
    --vc-pgn-active-color: rgba(255, 255, 255, 0.808);
    --vc-pgn-background-color: rgba(255, 255, 255, 0.281);
}
.swiper-button-next,
.swiper-button-prev {
    color: rgba(255, 255, 255, 0.808) !important;
    /* --vc-pgn-background-color */
}
.swiper-button-prev::after,
.swiper-button-next::after {
    font-size: 20px !important;
}
</style>
