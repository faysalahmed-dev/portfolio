<template>
    <section class="container mx-auto" id="projects">
        <SectionHeading text="What I Build">Projects</SectionHeading>
        <!-- space-x-8 -->
        <div
            class="flex flex-col md:flex-row space-y-6 md:space-y-0 max-w-[1100px] mx-auto md:flex-wrap md:gap-6"
        >
            <ProjectsCard
                v-for="project in projects"
                :key="project.text"
                :project="project"
            />
        </div>
    </section>
</template>

<script setup lang="ts">
const projects = [
    {
        tags: [],
        text: 'Lorem ipsum dolor sit amet.',
        demoLink: '',
        githubUrl: '',
        imgUrl: '/images/project-img1.png',
    },
    {
        tags: [],
        text: 'Lorem ipsum dolor sit amet consectetur.',
        demoLink: 'Lorem ipsum dolor sit.',
        githubUrl: '',
        imgUrl: '/images/project-img2.png',
    },
    {
        tags: [],
        text: 'Lorem ipsum dolor sit. dolor',
        demoLink: '',
        githubUrl: '',
        imgUrl: '/images/project-img3.png',
    },
];
</script>
