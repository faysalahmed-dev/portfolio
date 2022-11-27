<template>
    <section class="container mx-auto">
        <SectionHeading>Get In Touch</SectionHeading>
        <div class="flex w-[800px] mx-auto justify-center space-x-10">
            <div class="space-y-4 text-center">
                <div class="py-8 px-4 rounded-md bg-gray-900">Email</div>
                <div class="py-8 px-4 rounded-md bg-gray-900">LinkinDin</div>
                <div class="py-8 px-4 rounded-md bg-gray-900">WhatsApp</div>
            </div>
            <form
                class="flex flex-col space-y-4 p-6 bg-gray-900 rounded-md"
                action=""
            >
                <label for="name">
                    Name:
                    <input
                        class="block py-2 px-4 rounded-md bg-slate-400 w-96"
                        type="text"
                        id="name"
                        name="name"
                        placeholder="John Deo"
                    />
                </label>
                <label for="email">
                    Email:
                    <input
                        type="text"
                        class="block py-2 px-4 rounded-md bg-slate-400 w-96"
                        id="email"
                        name="email"
                        placeholder="user@example.com"
                    />
                </label>
                <label for="message">
                    Message:
                    <textarea
                        class="block w-full rounded-md bg-slate-400 p-2"
                        id="message"
                        rows="6"
                        placeholder="Your Message here..."
                    ></textarea>
                </label>
                <button class="block rounded-md py-2 bg-green-700">
                    Send Message
                </button>
            </form>
        </div>
    </section>
</template>

<style scoped>
label input,
label textarea {
    @apply mt-2;
}
</style>
