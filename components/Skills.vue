<template>
    <section>
        <div class="container mx-auto">
            <SectionHeading> My Skills </SectionHeading>
            <div class="flex justify-between space-x-10">
                <div class="flex-1 rounded-md p-10 bg-slate-900">
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
                <div class="flex-1 rounded-md p-10 bg-slate-900">
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
