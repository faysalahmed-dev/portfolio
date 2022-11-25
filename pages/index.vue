<template>
    <main class="hero-bg min-h-screen">
        <div class="container mx-auto">
            <Header />
            <Hero />
        </div>
    </main>
</template>
<style scoped>
.hero-bg {
    background: linear-gradient(
            45deg,
            rgba(0, 0, 0, 0.366),
            rgba(0, 0, 0, 0.547)
        ),
        url('~/assets/images/6690897_2352.jpg') no-repeat center/cover;
    background-attachment: fixed;
    width: 100%;
}
</style>
