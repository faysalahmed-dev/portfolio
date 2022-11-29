<template>
    <div class="service-card rounded-[50px] p-8 flex-1 bg-gray-900">
        <h2 class="font-bold text-center mb-6">{{ props.title }}</h2>
        <ul class="space-y-6">
            <li
                class="flex items-center"
                v-for="item in props.items"
                :key="item"
            >
                <p class="w-[25px]">
                    <NuxtImg src="/images/dimon-3d.png" width="20" />
                </p>
                <p class="ml-2">{{ item }}</p>
            </li>
        </ul>
    </div>
</template>
<script lang="ts" setup>
const props = defineProps<{
    title: string;
    items: string[];
}>();
</script>

<style scoped>
.service-card {
    background: rgba(7, 3, 53, 1);
    background-image: radial-gradient(
        circle 610px at 5.2% 51.6%,
        rgba(5, 8, 114, 1) 0%,
        rgba(7, 3, 53, 1) 97.5%
    );
}
</style>
