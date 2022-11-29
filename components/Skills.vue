<template>
    <section id="skills" class="py-24 -mt-20 rounded-[50px]">
        <div class="container mx-auto">
            <SectionHeading text="What I Know"> My Skills </SectionHeading>

            <div class="flex justify-between space-x-10 mx-auto max-w-[1100px]">
                <div class="skill-box flex-1 rounded-[50px] p-10">
                    <h2 class="text-center font-bold mb-10">
                        Font End Development
                    </h2>

                    <ul
                        class="grid grid-cols-2 gap-y-6 gap-x-6 justify-between"
                    >
                        <SkillsList skill-name="HTML" level="Expert" />
                        <SkillsList skill-name="CSS" level="Expert" />
                        <SkillsList
                            skill-name="JavaScript / Typescript"
                            level="Expert"
                        />
                        <SkillsList skill-name="Tailwind CSS" level="Expert" />
                        <SkillsList skill-name="Vue" level="Expert" />
                        <SkillsList skill-name="Nuxt" level="Expert" />
                        <SkillsList skill-name="React" level="Intermediate" />
                        <SkillsList skill-name="NextJS" level="Intermediate" />
                    </ul>
                </div>
                <div class="skill-box flex-1 rounded-[50px] p-10">
                    <h2 class="text-center font-bold mb-10">
                        Back End Development
                    </h2>
                    <ul
                        class="grid grid-cols-2 gap-y-6 gap-x-6 justify-between"
                    >
                        <SkillsList skill-name="NodeJS" level="Expert" />
                        <SkillsList skill-name="Firebase" level="Expert" />
                        <SkillsList skill-name="MongoDB" level="Expert" />
                        <SkillsList skill-name="Postgressql" level="Expert" />
                        <SkillsList skill-name="GoLang" level="Expert" />
                        <SkillsList skill-name="GraphQL" level="Expert" />
                        <SkillsList skill-name="NextJS" level="Intermediate" />
                    </ul>
                </div>
            </div>
        </div>
    </section>
</template>
<style scoped>
#skills {
    background-image: radial-gradient(
        circle 926px at 2.7% 11%,
        rgba(17, 29, 94, 1) 0%,
        rgba(178, 31, 102, 1) 90%
    );
}
.skill-box {
    background: #433457;
    background-image: linear-gradient(
        179.4deg,
        rgba(12, 20, 69, 1) -16.9%,
        rgba(71, 30, 84, 1) 119.9%
    );
}
</style>
