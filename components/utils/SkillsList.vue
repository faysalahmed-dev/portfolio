<template>
    <li class="">
        <div class="flex items-center">
            <span>
                <NuxtImg src="/images/dimon-3d.png" width="20" />
            </span>
            <p class="font-bold ml-2">{{ props.skillName }}</p>
        </div>
        <p class="text-sm ml-7 w-full opacity-80">{{ props.level }}</p>
    </li>
</template>
<script lang="ts" setup>
const props = defineProps({
    skillName: String,
    level: String,
});
</script>
