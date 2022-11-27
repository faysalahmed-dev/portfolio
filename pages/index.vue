<template>
    <main class="hero-bg min-h-screen">
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
    background: linear-gradient(
            45deg,
            rgba(0, 0, 0, 0.366),
            rgba(0, 0, 0, 0.547)
        ),
        url('~/assets/images/hero-bg.jpg') no-repeat center/cover;

    /* background-attachment: fixed; */
    width: 100%;
}
</style>
