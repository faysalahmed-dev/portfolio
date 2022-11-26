<template>
    <div class="flex-1 p-4 bg-indigo-600 rounded-md flex flex-col">
        <div>
            <NuxtImg :src="project.imgUrl" />
        </div>
        <h3 class="font-bold my-4 text-md flex-grow">{{ project.text }}</h3>
        <div class="space-x-5">
            <button class="py-2 px-4 bg-slate-800 rounded-md">Live Demo</button>
            <button class="py-2 px-4 bg-slate-800 rounded-md">GitHub</button>
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
