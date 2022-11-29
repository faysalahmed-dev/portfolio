<template>
    <div :class="`text-center ${margin}`" v-if="props.text">
        <p class="mb-1 capitalize">{{ props.text }}</p>
        <h2 class="font-bold text-2xl"><slot></slot></h2>
    </div>
    <h2 v-else :class="`text-center font-bold text-2xl ${margin}`">
        <slot></slot>
    </h2>
</template>

<script setup lang="ts">
const props = defineProps<{
    text?: string;
    margin?: string;
}>();
const margin = props.margin || 'my-20';
</script>
