<template>
    <section>
        <div class="container mx-auto">
            <UtilsSectionHeading> My Skills </UtilsSectionHeading>
            <div class="flex justify-between space-x-10">
                <div class="flex-1 rounded-md p-10 bg-slate-900">
                    <h2 class="text-center font-bold mb-10">
                        Font End Development
                    </h2>
                    <ul
                        class="grid grid-cols-2 gap-y-6 gap-x-6 justify-between"
                    >
                        <UtilsSkillsList skill-name="HTML" level="Expert" />
                        <UtilsSkillsList skill-name="CSS" level="Expert" />
                        <UtilsSkillsList
                            skill-name="JavaScript / Typescript"
                            level="Expert"
                        />
                        <UtilsSkillsList
                            skill-name="Tailwind CSS"
                            level="Expert"
                        />
                        <UtilsSkillsList skill-name="Vue" level="Expert" />
                        <UtilsSkillsList skill-name="Nuxt" level="Expert" />
                        <UtilsSkillsList
                            skill-name="React"
                            level="Intermediate"
                        />
                        <UtilsSkillsList
                            skill-name="NextJS"
                            level="Intermediate"
                        />
                    </ul>
                </div>
                <div class="flex-1 rounded-md p-10 bg-slate-900">
                    <h2 class="text-center font-bold mb-10">
                        Back End Development
                    </h2>
                    <ul
                        class="grid grid-cols-2 gap-y-6 gap-x-6 justify-between"
                    >
                        <UtilsSkillsList skill-name="NodeJS" level="Expert" />
                        <UtilsSkillsList skill-name="Firebase" level="Expert" />
                        <UtilsSkillsList skill-name="MongoDB" level="Expert" />
                        <UtilsSkillsList
                            skill-name="Postgressql"
                            level="Expert"
                        />
                        <UtilsSkillsList skill-name="GoLang" level="Expert" />
                        <UtilsSkillsList skill-name="GraphQL" level="Expert" />
                        <UtilsSkillsList
                            skill-name="NextJS"
                            level="Intermediate"
                        />
                    </ul>
                </div>
            </div>
        </div>
    </section>
</template>
