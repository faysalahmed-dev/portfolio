<template>
    <div class="flex-1 p-4 project-card rounded-2xl flex flex-col shadow-md">
        <div>
            <NuxtImg :src="project.imgUrl" />
        </div>
        <h3 class="font-bold my-4 text-md flex-grow">{{ project.text }}</h3>
        <div class="space-x-5">
            <button class="py-1 px-4 bg-primary rounded-md">Live Demo</button>
            <button class="py-1 px-4 bg-primary rounded-md">GitHub</button>
        </div>
    </div>
</template>
<script setup lang="ts">
const { project } = defineProps<{
    project: {
        tags: string[];
        text: string;
        demoLink: string;
        githubUrl: string;
        imgUrl: string;
    };
}>();
</script>

<style scoped>
.project-card {
    background-image: radial-gradient(
        circle 926px at 2.7% 11%,
        rgba(17, 29, 94, 1) 0%,
        rgba(178, 31, 102, 1) 90%
    );
}
</style>
