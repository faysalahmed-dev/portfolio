<template>
    <div class="bg-gray-800 rounded-md p-8 flex-1">
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
