<template>
    <!-- min-h-[95vh] md:min-h-screen min-h-[95vh]-->
    <main class="hero-bg rounded-b-[50px] pb-48 lg:min-h-screen lg:pb-0">
        <div class="container">
            <Header />
            <Hero />
        </div>
    </main>
    <section class="container"><About /></section>

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
        url(/_nuxt/assets/images/hero-bg.jpg) no-repeat;
    width: 100%;
    background-size: cover;
    background-position: 0%;
}
</style>
