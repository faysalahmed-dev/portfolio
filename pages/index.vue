<template>
    <main class="hero-bg min-h-screen rounded-b-[50px]">
        <div class="container mx-auto">
            <Header />
            <Hero />
        </div>
    </main>
    <About />
    <Skills />
    <Services />
    <Projects />
    <Testimonial />
    <Contact />
    <Footer />
</template>
<style scoped>
.hero-bg {
    background: linear-gradient(207deg, #311358, rgba(0, 0, 0, 0.13)),
        url(/_nuxt/assets/images/hero-bg.jpg) no-repeat center/cover;
    width: 100%;
}
</style>
