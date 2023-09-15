<script setup lang="ts">
import gsap from 'gsap';
const hasMouseMoved = ref(false);
const isPageLeft = usePageLeave();
const mouseRef = ref();

function handleMouseMove({ clientX, clientY }: MouseEvent) {
    if (!hasMouseMoved.value) hasMouseMoved.value = true;
    gsap.to(mouseRef.value, {
        x: clientX,
        y: clientY,
        duration: 0.2,
        ease: 'expo.out',
    });
}

useEventListener('mousemove', handleMouseMove);
</script>

<template>
    <div
        class="w-full h-screen overflow-hidden pointer-events-none top-0 left-0 fixed z-[1000]"
        :class="hasMouseMoved && !isPageLeft ? 'visible' : 'invisible'"
    >
        <div ref="mouseRef" id="mouse-pointer">
            <div
                class="w-8 h-8 rounded-full border-2 border-fuchsia-50 flex justify-center items-center z-50 pointer-events-none absolute"
            >
                <div class="w-2 h-2 rounded-full bg-fuchsia-50"></div>
            </div>
        </div>
    </div>
</template>
