<template>
    <section class="container mx-auto">
        <UtilsSectionHeading> Testimonial </UtilsSectionHeading>
        <div class="w-8/12 mx-auto">
            <carousel :itemsToShow="1" :wrapAround="true" :transition="500">
                <slide v-for="slide in slideItems" :key="slide.client">
                    <div class="text-center p-16 w-5/6 bg-gray-700 rounded-md">
                        <p class="mb-3 relative">
                            {{ slide.text }}
                        </p>
                        <h3 class="font-bold">{{ slide.client }}</h3>
                        <h4 class="ml-1 text-sm font-light opacity-95">
                            - {{ slide.platform }}
                        </h4>
                    </div>
                </slide>

                <template #addons>
                    <navigation />
                    <pagination />
                </template>
            </carousel>
        </div>
    </section>
</template>
<script setup lang="ts">
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';

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

<style></style>
