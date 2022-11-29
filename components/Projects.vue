<template>
    <section class="container mx-auto" id="projects">
        <SectionHeading text="What I Build">Projects</SectionHeading>
        <div class="flex space-x-8 max-w-[1100px] mx-auto">
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
