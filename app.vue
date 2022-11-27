<template>
    <NuxtPage></NuxtPage>
</template>
<style>
:root {
    --yello-light: #feef51;
    --acen-light: #60f7ea;
}
body {
    background: rgb(47, 7, 67);
    background: linear-gradient(to right, rgb(65, 41, 90), rgb(47, 7, 67));
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
</style>
