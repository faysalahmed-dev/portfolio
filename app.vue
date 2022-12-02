<template>
    <NuxtPage></NuxtPage>
</template>
<style>
:root {
    --yello-light: #feef51;
    --acen-light: #60f7ea;
}
body {
    background: #433457;
    background-image: linear-gradient(
        179.4deg,
        rgba(12, 20, 69, 1) -16.9%,
        rgba(71, 30, 84, 1) 119.9%
    );
    @apply text-gray-300;
}

.logo {
    color: var(--yello-light);
    background: linear-gradient(
        45deg,
        var(--yello-light) 30%,
        var(--acen-light) 70%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-weight: bolder;
    text-transform: uppercase;
}
.bg-primary {
    background: #fd94df;
    @apply text-gray-900;
}
</style>
<script>
import 'swiper/css';
</script>
