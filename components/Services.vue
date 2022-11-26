<template>
    <section class="container mx-auto">
        <UtilsSectionHeading>Skills</UtilsSectionHeading>
        <div class="flex space-x-8">
            <UtilsServicesCard
                title="Website Development"
                :items="items.websiteDev"
            />
            <UtilsServicesCard
                title="Font End Development"
                :items="items.fontEnd"
            />
            <UtilsServicesCard
                title="Full Stack Development"
                :items="items.backEnd"
            />
        </div>
    </section>
</template>
<script setup lang="ts">
const items = {
    websiteDev: [
        'Website With HTML, CSS, Javascript',
        'MultiPage Static Website',
        'Landing Page',
    ],
    fontEnd: [
        'Client Site Web App',
        'ECommerce Site Development',
        'React, Vue',
        'Server Side Render App: Next, Nuxt',
        'Authentication, Authorization',
    ],
    backEnd: [
        'Complete Web App',
        'Api Building',
        'Database Integration',
        'Microservices',
    ],
};
</script>
